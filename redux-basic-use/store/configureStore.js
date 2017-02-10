import { createStore, applyMiddleware,compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducers'

//applyMiddleware来自redux可以包装 store 的 dispatch
//thunk作用是增强store的dispatch功能，使得dispatch可以接受一个function做为参数（之前只能接受action对象作为参数），而且该function 会接收 dispatch 作为参数，并且可以在发请求成功后dispatch一个action,这样就可以完成异步action
const createStoreWithMiddleware = compose(
    applyMiddleware(
        thunk
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)

export default function configureStore(initialState) {
    //initialState.服务端的初始化state，会覆盖所有的reducer里面的默认state
  const store = createStoreWithMiddleware(reducer, initialState)
  return store
}
