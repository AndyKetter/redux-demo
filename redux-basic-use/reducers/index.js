import { combineReducers } from 'redux'
import counter from './counter'

//使用redux的combineReducers方法将所有reducer打包起来
const rootReducer = combineReducers({
  counter
  // counter:counter等同于这个
})

export default rootReducer
