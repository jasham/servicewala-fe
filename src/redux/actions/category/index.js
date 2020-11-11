import { client, CATEGORY_API } from '../../../config/api'
import { CATEGORY_DATA, CATEGORY_LIST_DATA, CATEGORY_DELETE_DATA, CATEGORY_UPDATE_DATA } from '../../types'

export const addCategory = (categoryData) => {
    return async dispatch => {
        return client().post(`${CATEGORY_API}`,categoryData)
        .then((rData) => {
            dispatch({
                type : CATEGORY_DATA,
                data : rData.data
            })
        })
        .catch((err) => {
            dispatch({
                type : CATEGORY_DATA,
                data : err
            })
        })
    }
}

export const clearAddCategory = () => {
    return async dispatch => {
            dispatch({
                type : CATEGORY_DATA,
                data : {}
            })
    }
}

export const categoryList = (pageSize,currentPage) => {
    return async dispatch => {
        return client().get(`${CATEGORY_API}?query={pageSize:${pageSize},currentPage:${currentPage},search:""}`)
        .then((rData) => {
            dispatch({
                type : CATEGORY_LIST_DATA,
                data : rData.data
            })
        })
        .catch((err) => {
            dispatch({
                type : CATEGORY_LIST_DATA,
                data : err
            })
        })
    }
}

export const clearCategoryList = () => {
    return async dispatch => {
        dispatch({
            type : CATEGORY_LIST_DATA,
            data : {}
        })
    }
}

export const deleteCategory = (deleteData) => {
    return async dispatch => {
        return client().post(`${CATEGORY_API}/delete/`,deleteData)
        .then((rData) => {
            dispatch({
                type : CATEGORY_DELETE_DATA,
                data : rData.data
            })
        })
        .catch((err) => {
            dispatch({
                type : CATEGORY_DELETE_DATA,
                data : err
            })
        })
    }
}

export const clearDeleteCategory = () => {
    return async dispatch => {
        dispatch({
            type : CATEGORY_DELETE_DATA,
            data : {}
        })
    }
}

export const updateCategory = (updateData) => {
    return async dispatch => {
        return client().post(`${CATEGORY_API}/update/`,updateData)
        .then((rData) => {
            dispatch({
                type : CATEGORY_UPDATE_DATA,
                data : rData.data
            })
        })
        .catch((err) => {
            dispatch({
                type : CATEGORY_UPDATE_DATA,
                data : err
            })
        })
    }
}

export const clearUpdateCategory = () => {
    return async dispatch => {
        dispatch({
            type : CATEGORY_UPDATE_DATA,
            data : {}
        })
    }
}