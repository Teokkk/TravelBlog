import { HOME_GET_API, TOURS_GET_API_SUCCESS } from '../defines/ActionTypes';

const initialState = {
    homeData: [],
    toursData: []
}

const homeReducer = (state = initialState, action) => {
    switch(action.type) {
        case HOME_GET_API: 
            return {...state, homeData: action.payload}
        case TOURS_GET_API_SUCCESS:
            return {...state, toursData: action.payload}
    }
    return state
}

export default homeReducer