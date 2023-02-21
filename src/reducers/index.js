import { combineReducers } from 'redux';

import appReducer from './AppReducer';
import homeReducer from './HomeReducers';

// **** Notes: nếu dùng createStore của redux
const rootReducer = combineReducers({
    app: appReducer,
    home: homeReducer
})

// **** Notes: nếu dùng @reduxjs/toolkit
// const rootReducer = {
//     app: appReducer,
//     home: homeReducer
// }

export default rootReducer