import * as ActionType from '../constants/User';

const INIT_STATE = {
    userProfile:{},
    users:[],
    isLogout : false,
    isLoading : true,
    isLoggedIn : false,
    token : localStorage.getItem('@token'),
    message : ''
}

const userReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ActionType.GET_USER_REQUEST:{
            return { ...state }
        }
        case ActionType.GET_USER_SUCCESS:{
            return GetUserSucceed(state, action)
        }
        case ActionType.ADD_SIGNUP_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case ActionType.ADD_SIGNUP_SUCCEED: {
            return applyAddSignupSucceed(state, action)
        }
        case ActionType.GET_SIGNIN_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case ActionType.GET_SIGNIN_SUCCEED: {
            return applyGetSigninSucceed(state, action)
        }
        case ActionType.GET_SIGNOUT_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case ActionType.GET_SIGNOUT_SUCCEED: {
            return applyGetSignoutSucceed(state, action)
        }
        case ActionType.SIGNUP_FAILED: {
            return {
                ...state,
                isLoading: false,
                error: action.payload.error,
            };
        }
        case ActionType.SHOW_MESSAGE: {
            return {
                ...state,
                message : action.payload.message,
                isLoggedIn : false
            };
        }
        default:
            return state;
            //return GetUserSucceed(state, action)
    }
}
const GetUserSucceed = (state, action) => {
    return {
        ...state,
        users: action.payload,
      }
    }

const applyAddSignupSucceed = (state, action) => {
    const { payload } = action;
    return {
        ...state,
        username: payload.user_name,
        email: payload.user_email,
        role_type: payload.user_role_type,
        isLoading: false
    }
}

const applyGetSigninSucceed = (state, action) => {
    const { payload } = action;
    const { profile } = payload
    return {
        ...state,
        userProfile: {...profile},
        isLoading: false,
        isLoggedIn : true,
        isLogout : false,
        message : ''
    }
}

const applyGetSignoutSucceed = (state, action) => {
    return {
        ...state,
        userProfile: {
            userId : "",
            userName : "",
            email : "",
            userRoles : ""
        },
        isLoading: false,
        isLoggedIn : false,
        isLogout : true,
        message : "",
    }
}


export default userReducer