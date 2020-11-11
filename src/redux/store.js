import thunk from 'redux-thunk'
import reducer from './reducers'
import { applyMiddleware, createStore } from 'redux'

const rootReducer = createStore(reducer, applyMiddleware(thunk))

export default rootReducer