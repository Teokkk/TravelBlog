import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

// import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers';

//**** Notes: dùng createStore của Redux
const configureStore = (initialState) => {
    const store = createStore(
        rootReducer, 
        initialState,
        applyMiddleware(thunk)
    )
    return store
}

export default configureStore

//**** Notes: dùng @reduxjs/toolkit'
// const store = configureStore({
//     reducer: rootReducer,
// })

// export default store

