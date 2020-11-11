import { VENDOR_DATA } from '../../types'

export default (state = {}, action) => {
    switch (action.type) {
        case VENDOR_DATA:
          return {...state, vendorData: action.data}
        default:
            return state
    }
}