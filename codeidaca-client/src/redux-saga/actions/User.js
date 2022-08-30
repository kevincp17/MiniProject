import * as ActionType from '../constants/User'

export const GetUserRequest = () => ({
    type : ActionType.GET_USER_REQUEST
});

export const GetUserSuccess = (payload) => ({
    type : ActionType.GET_USER_SUCCESS,
    payload,
});

export const GetUserFailed = (payload) => ({
    type : ActionType.GET_USER_FAILED,
    payload,
});
export const doSignupRequest = (payload) => ({
    type: ActionType.ADD_SIGNUP_REQUEST,
    payload,
});

export const doSignupSucceed = (payload) => ({
    type: ActionType.ADD_SIGNUP_SUCCEED,
    payload,
});

export const doSignupFailed = (payload) => ({
    type: ActionType.SIGNUP_FAILED,
    payload,
});

export const doSigninRequest = (payload) => ({
    type: ActionType.GET_SIGNIN_REQUEST,
    payload,
});

export const doSigninSucceed = (payload) => ({
    type: ActionType.GET_SIGNIN_SUCCEED,
    payload,
});

export const doSignoutRequest = (payload) => ({
    type: ActionType.GET_SIGNOUT_REQUEST,
    payload,
});

export const doSignoutSucceed = (payload) => ({
    type: ActionType.GET_SIGNOUT_SUCCEED,
    payload,
});

export const doShowAuthMessage = (message) => ({
    type: ActionType.SHOW_MESSAGE,
    payload: message
});

