import { client, VENDOR_SIGNUP_API } from '../../../config/api'
import { VENDOR_DATA } from '../../types'

export const vendorSignUp = (imageData) => {
    return async dispatch => {
        return client().post(`${VENDOR_SIGNUP_API}`,imageData)
        .then((rData) => {
            dispatch({
                type : VENDOR_DATA,
                data : rData.data
            })
        })
        .catch((err) => {
            dispatch({
                type : VENDOR_DATA,
                data : err
            })
        })
    }
}

export const clearVendorSignUp = () => {
    return async dispatch => {
        dispatch({
            type : VENDOR_DATA,
            data : {}
        })
    }
}