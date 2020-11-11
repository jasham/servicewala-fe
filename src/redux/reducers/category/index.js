import { CATEGORY_DATA, CATEGORY_LIST_DATA, CATEGORY_DELETE_DATA, CATEGORY_UPDATE_DATA} from '../../types'


export default (state = {}, action) => {
    switch (action.type) {
        case CATEGORY_DATA:
          return {...state, category: action.data}
        case CATEGORY_LIST_DATA:
            return { ...state, categoryList : action.data}
        case CATEGORY_DELETE_DATA:
            console.log("Here is delete data reducer",action.data)
            return { ...state, deleteCategory : action.data}
        case CATEGORY_UPDATE_DATA:
            return { ...state, updatedCategory : action.data}
        default:
            return state
    }
}