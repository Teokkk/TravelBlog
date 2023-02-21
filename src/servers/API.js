// Promise
// export const api = ({uri, method = 'GET', param = {}, successAction, failAction}) => (
//     async (dispatch, getState) => {
//         fetch(uri, {
//             method: method,
//             headers: {
//                 Accept: 'application/json',
//                 'Content-Type': 'application/json',
//                 // 'Authorization': isLogin ? null : 'Bearer ' +  userInfo?.accessToken, 
//             },
//             // body: JSON.stringify(param)
//         })
//         .then((response) => response.json())
//         .then((json) => {
//             dispatch(successAction(json))
//         })
//         .catch((error) => {
//             failAction(error)
//         })
//     }
// )

//Async - Await
// export const api = async ({uri, method = 'GET', param = {}, successAction, failAction}) => {
//     return async function request(dispatch, getState) {
//         try {
//             const response = await fetch(uri, {
//                 method: method,
//                 headers: {
//                     Accept: 'application/json',
//                     'Content-Type': 'application/json',
//                     // 'Authorization': isLogin ? null : 'Bearer ' +  userInfo?.accessToken, 
//                 },
//                 // body: JSON.stringify(param)
//             })

//             const json = await response.json()
//             dispatch(successAction(json))

//         } catch (error) {
//             failAction(error)
//         }
//     }
// }

// Dùng Axios
import axios from 'axios';

export const api = ({uri, method = 'GET', param = {}, successAction, failAction}) => (
    async (dispatch, getState) => {
        axios({
            method: method,
            url: uri,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                // 'Content-Type': 'multipart/form-data',
            },
            timeout: 60000,
        }).then(function (response) {
            dispatch(successAction(response.data))
        }).catch((error) => {
            failAction(error)
        })
    }
)


export const apiGET = ({uri, successAction, failAction}) => (
    async (dispatch, getState) => {
        axios.get(uri, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                // 'Content-Type': 'multipart/form-data',
            },
            timeout: 60
        }).then(function (response) {
            dispatch(successAction(response.data))
        }).catch((error) => {
            failAction(error)
        })
    }
)

export const apiPOST = ({uri, param, successAction, failAction}) => (
    async (dispatch, getState) => {
        axios.post(uri, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            timeout: 60,
            data: param
        }).then(function (response) {
            dispatch(successAction(response.data))
        }).catch((error) => {
            failAction(error)
        })
    }
)

export const apiUpload = ({uri, param, progressAction, successAction, failAction}) => (
    async (dispatch, getState) => {
        //file process
        var form = new FormData()
        param.images.forEach(image => {
            form.append(image.name, image)
        })

        axios.post(uri, form, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data'
            },
            onUploadProgress: function (axiosProgressEvent) {
                /*{
                  loaded: number;
                  total?: number;
                  progress?: number; // in range [0..1]
                  bytes: number; // how many bytes have been transferred since the last trigger (delta)
                  estimated?: number; // estimated time in seconds
                  rate?: number; // upload speed in bytes
                  upload: true; // upload sign
                }*/
                dispatch(progressAction(axiosProgressEvent?.progress))
            }
        }).then(function (response) {
            dispatch(successAction(response.data))
        }).catch((error) => {
            failAction(error)
        })
    }
)
