import { APP_LOGIN, APP_LOGOUT } from '../defines/ActionTypes';

const initialState = {
    isLogin: false,
}

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case APP_LOGIN: 
            return {...state, isLogin: action.payload}
        case APP_LOGOUT:
            return {...state, isLogin: false}
    }
    return state
}

export default appReducer