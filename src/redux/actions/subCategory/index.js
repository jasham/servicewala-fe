import { client, SUB_CATEGORY_API } from '../../../config/api'
import { SUB_CATEGORY_DETAILED_LIST_DATA } from '../../types'


export const subCategoryDetailedList = () => {
    return async dispatch => {
        // return client().get(`${SUB_CATEGORY_API}?query={pageSize:${pageSize},currentPage:${currentPage},category_id:"${id}",search :""}`)
        return client().get(`${SUB_CATEGORY_API}`)
        .then((rData) => {
            dispatch({
                type : SUB_CATEGORY_DETAILED_LIST_DATA,
                data : rData.data
            })
        })
        .catch((err) => {
            dispatch({
                type : SUB_CATEGORY_DETAILED_LIST_DATA,
                data : err
            })
        })
    }
}


