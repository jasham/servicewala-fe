import { IMAGE_DATA, IMAGE_LIST_DATA, IMAGE_DELETE_DATA } from '../../types'


export default (state = {}, action) => {
    switch (action.type) {
        case IMAGE_DATA:
          return {...state, imageData: action.data}
        case IMAGE_LIST_DATA:
            return { ...state, imageListData : action.data}
        case IMAGE_DELETE_DATA:
            return { ...state, imageDelData : action.data}
        default:
            return state
    }
}