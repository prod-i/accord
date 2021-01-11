import { usersAPI } from '../api/api';
import { updateObjectInArray } from '../utils/object-helpers';

const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET_USERS';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'users/TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    usersData: [],
    pageUsersSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingProgres: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                usersData: updateObjectInArray(state.usersData, action.userId, 'id', {followed: true}),
            }
        case UNFOLLOW:
            return {
                ...state,
                usersData: updateObjectInArray(state.usersData, action.userId, 'id', {followed: false}),
            }
        case SET_USERS:
            return {
                ...state,
                usersData: action.users,
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount,
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingProgres: action.isFetching
                    ? [...state.followingProgres, action.userId]
                    : state.followingProgres.filter(id => id != action.userId),
            }
        default:
            return state;
    }
}

export const setUsers = (users) => ({ type: SET_USERS, users });
export const follow = (userId) => ({ type: FOLLOW, userId });
export const unFollow = (userId) => ({ type: UNFOLLOW, userId });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleIsFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId });

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreater) => {
    dispatch(toggleIsFollowingProgress(true, userId));
    let response = await apiMethod(userId)
    if (response.data.resultCode == 0) {
        dispatch(actionCreater(userId));
    }
    dispatch(toggleIsFollowingProgress(false, userId));
}

export const getUsersTC = (currentPage, pageUsersSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(currentPage));

        let response = await usersAPI.getUsers(currentPage, pageUsersSize)
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(response.data.items));
        dispatch(setTotalUsersCount(response.data.totalCount));
    }
}
export const followTC = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), follow);
    }
}
export const unfollowTC = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unFollow);
    }
}

export default usersReducer;