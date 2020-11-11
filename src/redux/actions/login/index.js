import { client, ADMIN_LOGIN_API } from '../../../config/api'
import { LOGIN_DATA } from '../../types'

export const login = (userData) => {
    return async dispatch => {
        return client().post(`${ADMIN_LOGIN_API}`,userData)
        .then((res) => {
            dispatch({
                type : LOGIN_DATA,
                data : res.data
            }) 
        })
        .catch((err) => {
            dispatch({
                type : LOGIN_DATA,
                data : err
            })
        })
    }
}

export const resetLogin = () => {
    return async dispatch => {
        dispatch({
            type : LOGIN_DATA,
            data : {}
        })
    }
}