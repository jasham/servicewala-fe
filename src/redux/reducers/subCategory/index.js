import { SUB_CATEGORY_DATA, SUB_CATEGORY_LIST_DATA, SUB_CATEGORY_DELETE_DATA, SUB_CATEGORY_UPDATE_DATA, SUB_CATEGORY_DETAILED_LIST_DATA} from '../../types'


export default (state = {}, action) => {
    switch (action.type) {
        case SUB_CATEGORY_DATA:
          return {...state, subCategory: action.data}
        case SUB_CATEGORY_LIST_DATA:
            return { ...state, subCategoryList : action.data}
        case SUB_CATEGORY_DELETE_DATA:
            return { ...state, deleteSubCategory : action.data}
        case SUB_CATEGORY_UPDATE_DATA:
            return { ...state, updatedSubCategory : action.data}
        case SUB_CATEGORY_DETAILED_LIST_DATA:
            return { ...state, detailedSubCatList : action.data}
        default:
            return state
    }
}