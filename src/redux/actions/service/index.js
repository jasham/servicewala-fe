import { client, SERVICE_API } from '../../../config/api'
import { SERVICE_DATA, SERVICE_DELETE_DATA, SERVICE_LIST_DATA, SERVICE_UPDATE_DATA } from '../../types'

export const addService = (serviceData) => {
    return async dispatch => {
        return client().post(`${SERVICE_API}`,serviceData)
        .then((rData) => {
            dispatch({
                type : SERVICE_DATA,
                data : rData.data
            })
        })
        .catch((err) => {
            dispatch({
                type : SERVICE_DATA,
                data : err
            })
        })
    }
}

export const clearAddService = () => {
    return async dispatch => {
            dispatch({
                type : SERVICE_DATA,
                data : {}
            })
    }
}

export const serviceList = (id,pageSize,currentPage) => {
    return async dispatch => {
        return client().get(`${SERVICE_API}?query={pageSize:${pageSize},currentPage:${currentPage},sub_category_id:"${id}",search :""}`)
        .then((rData) => {
            dispatch({
                type : SERVICE_LIST_DATA,
                data : rData.data
            })
        })
        .catch((err) => {
            dispatch({
                type : SERVICE_LIST_DATA,
                data : err
            })
        })
    }
}

export const clearServiceList = () => {
    return async dispatch => {
        dispatch({
            type : SERVICE_LIST_DATA,
            data : {}
        })
    }
}

export const deleteService = (id) => {
    return async dispatch => {
        return client().delete(`${SERVICE_API}/${id}`)
        .then((rData) => {
            dispatch({
                type : SERVICE_DELETE_DATA,
                data : rData.data
            })
        })
        .catch((err) => {
            dispatch({
                type : SERVICE_DELETE_DATA,
                data : err
            })
        })
    }
}

export const clearDeleteService = () => {
    return async dispatch => {
        dispatch({
            type : SERVICE_DELETE_DATA,
            data : {}
        })
    }
}

export const updateService = (updateData) => {
    return async dispatch => {
        return client().put(`${SERVICE_API}`,updateData)
        .then((rData) => {
            dispatch({
                type : SERVICE_UPDATE_DATA,
                data : rData.data
            })
        })
        .catch((err) => {
            dispatch({
                type : SERVICE_UPDATE_DATA,
                data : err
            })
        })
    }
}

export const clearUpdateService = () => {
    console.log("I am inside clear update")
    return async dispatch => {
        dispatch({
            type : SERVICE_UPDATE_DATA,
            data : {}
        })
    }
}