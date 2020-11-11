import { SERVICE_DATA, SERVICE_LIST_DATA, SERVICE_DELETE_DATA, SERVICE_UPDATE_DATA } from '../../types'


export default (state = {}, action) => {
    switch (action.type) {
        case SERVICE_DATA:
          return {...state, serviceData: action.data}
        case SERVICE_LIST_DATA:
            return { ...state, serviceList : action.data}
        case SERVICE_DELETE_DATA:
            return { ...state, serviceDeleteData : action.data}
        case SERVICE_UPDATE_DATA:
            return { ...state, serviceUpdateData : action.data}
        default:
            return state
    }
}