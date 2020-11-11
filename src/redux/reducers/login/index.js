import { LOGIN_DATA } from '../../types'


export default (state = {}, action) => {
    switch (action.type) {
        case LOGIN_DATA:
          return {...state, login: action.data}
        default:
            return state
    }
}