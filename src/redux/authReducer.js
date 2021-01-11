import { authAPI, securityAPI } from '../api/api';
import { stopSubmit } from 'redux-form';

const SET_AUTH_USER_DATA = 'auth/SET_AUTH_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null, //if null, then captcha is not required
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
}

export const setAuthUserData      =(id, email, login, isAuth) => ({ type: SET_AUTH_USER_DATA,      payload: { id, email, login, isAuth } });
export const getCaptchaUrlSuccess =(captchaUrl)               => ({ type: GET_CAPTCHA_URL_SUCCESS, payload: { captchaUrl } });

export const authTC = () => async (dispatch) => {
    let response = await authAPI.me();
    if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}
export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
        dispatch(authTC());
    } else {
        if(response.data.resultCode === 10){
            dispatch(getCaptchaUrl());
        }
        let messages = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
        dispatch(stopSubmit('login', { _error: messages }));
    }
}
export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
}
export const logout = () => async (dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export default authReducer;