import { APP_LOGIN, APP_LOGOUT } from '../defines/ActionTypes';

export const appLogin = (params) => (
    {
        type: APP_LOGIN,
        payload: params
    }
)

export const appLogout = () => (
    {
        type: APP_LOGOUT
    }
)