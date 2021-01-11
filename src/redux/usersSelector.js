import { createSelector } from "reselect";

export const getUsersS = (state) => {
    return state.users.usersData;
}
export const getUsers = createSelector(getUsersS, (usersData) => {
    return usersData.filter(u => true);
})

export const getPageSize = (state) => {
    return state.users.pageUsersSize;
}

export const getTotalUsersCount = (state) => {
    return state.users.totalUsersCount;
}

export const getCurrentPage = (state) => {
    return state.users.currentPage;
}

export const getIsFetching = (state) => {
    return state.users.isFetching;
}

export const getFollowingProgres = (state) => {
    return state.users.followingProgres;
}
