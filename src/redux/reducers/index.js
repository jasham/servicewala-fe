import { combineReducers } from 'redux'
import login from './login'
import category from './category'
import subCategory from './subCategory'
import service from './service'
import vendor from './signUp'
import image from './image'
const reducer =  combineReducers({ 
    login,
    category,
    subCategory,
    service,
    vendor,
    image
})

export default reducer