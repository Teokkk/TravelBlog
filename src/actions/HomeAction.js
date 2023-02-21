import { HOME_GET_API, TOURS_GET_API_SUCCESS } from '../defines/ActionTypes';
import { api } from '../servers/API';

export const homeGetAPISuccess = (params) => (
    {
        type: HOME_GET_API,
        payload: params
    }
)

export const toursGetAPISuccess = (params) => (
    {
        type: TOURS_GET_API_SUCCESS,
        payload: params
    }
)
// export const updateUploadFie = (params) => (
//     {
//         type: UPDATE_PROGRESS_UPLOAD,
//         payload: params
//     }
// )


export const homeGetAPI = () => (
    api({
        uri: 'https://cattechsolutions.com/maui.json', 
        successAction: (json) => homeGetAPISuccess(json),
        failAction: (error) => console.error(error)
    })
)

export const toursGetAPI = () => (
    api({
        uri: 'https://cattechsolutions.com/tours.json', 
        successAction: (json) => toursGetAPISuccess(json),
        failAction: (error) => console.error(error)
    })
)
