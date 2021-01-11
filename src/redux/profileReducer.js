import { usersAPI, profileAPI } from '../api/api';
import { stopSubmit } from 'redux-form';

const ADD_POST           ='profile/ADD_POST';
const DELETE_POST        ='profile/DELETE_POST';
const SET_USER_PROFILE   ='profile/SET_USER_PROFILE';
const SET_STATUS         ='profile/SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS';

let initialState = {
    postsData: [
        { id: 1, name: "Alexandr Gluhov", content: "Hello World!", like: "5", comment: "3" },
        { id: 2, name: "Alexandr Gluhov", content: "I'm crying because I realized that I like the work of Justin Bieber", like: "12", comment: "1" },
    ],
    profile: null,
    status: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                postsData: [...state.postsData, { id: "5", name: "Alexandr Gluhov", content: action.text, like: "8", comment: "3", }],
            };
        case DELETE_POST:
            return {
                ...state,
                postsData: state.postsData.filter(p => p.id != action.postId),
            };
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos},
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            };
        default:
            return state;
    }

}
export const addPost =          (text)    => ({ type: ADD_POST,           text });
export const deletePost =       (postId)  => ({ type: DELETE_POST,        postId });
export const setUserProfile =   (profile) => ({ type: SET_USER_PROFILE,   profile });
export const setStatus =        (status)  => ({ type: SET_STATUS,         status });
export const savePhotoSuccess = (photos)  => ({ type: SAVE_PHOTO_SUCCESS, photos });

export const getProfileTC = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
}
export const getStatusTC = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}
export const updateStatusTC = (status) => async (dispatch) => {
    try{
        let response = await profileAPI.updateStatus(status);
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    } catch(error){
        // alert(error.message)
    }
}
export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}
export const saveProfile = (profile) => async (dispatch, getState) => {
    const id = getState().auth.id;
    const response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
        dispatch(getProfileTC(id));
    } else {
        dispatch(stopSubmit('edit-profile', { _error: response.data.messages[0] }));
        return Promise.reject(response.data.messages[0]);
    }
}

export default profileReducer;