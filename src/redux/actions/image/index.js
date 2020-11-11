import { client, CATEGORY_IMAGE_API, SUB_CATEGORY_IMAGE_API } from '../../../config/api'
import { IMAGE_DATA, IMAGE_LIST_DATA, IMAGE_DELETE_DATA } from '../../types'

export const addCatNSubImg = (imageData) => {
    return async dispatch => {
        return client().post(`${CATEGORY_IMAGE_API}`,imageData)
        .then((rData) => {
            dispatch({
                type : IMAGE_DATA,
                data : rData.data
            })
        })
        .catch((err) => {
            dispatch({
                type : IMAGE_DATA,
                data : err
            })
        })
    }
}

export const clearAddCatNSubImg = () => {
    return async dispatch => {
        dispatch({
            type : IMAGE_DATA,
            data : {}
        })
    }
}

export const listImage = (id,cType) => {
    let urlParam
    if(cType==="category"){
        urlParam = `${CATEGORY_IMAGE_API}?query={pageSize:5,currentPage:1,category_id:'${id}',image:'${cType}'}`
    }else{
        urlParam = `${SUB_CATEGORY_IMAGE_API}?query={pageSize:5,currentPage:1,sub_category_id:'${id}',image:'${cType}'}`
    }
    return async dispatch => {
        return client().get(`${urlParam}`)
        .then((rData) => {
            dispatch({
                type : IMAGE_LIST_DATA,
                data : rData.data
            })
        })
        .catch((err) => {
            dispatch({
                type : IMAGE_LIST_DATA,
                data : err
            })
        })
    }
}

export const clearListImage = () => {
    return async dispatch => {       
        dispatch({
            type : IMAGE_LIST_DATA,
            data : {}
        })
    }
}

export const delImage = (id) => {
    return async dispatch => {
        return client().delete(`${CATEGORY_IMAGE_API}/${id}`)
        .then((rData) => {
            dispatch({
                type : IMAGE_DELETE_DATA,
                data : rData.data
            })
        })
        .catch((err) => {
            dispatch({
                type : IMAGE_DELETE_DATA,
                data : err
            })
        })
    }
}

export const clearDelImage = () => {
    return async dispatch => {
        dispatch({
            type : IMAGE_DELETE_DATA,
            data : {}
        })
    }
}




