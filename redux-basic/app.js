import React from 'react'
import {render} from 'react-dom'
import {createStore,combineReducers,applyMiddleware,compose} from 'redux'
import {Provider} from 'react-redux'
import {Router,Route,IndexRoute,browserHistory} from 'react-router'
import {syncHistoryWithStore,routerReducer} from 'react-router-redux'

import * as reducers from './reducers'
import {App,Home,Foo,Bar} from './components'

const reducer = combineReducers({
    ...reducers,
    routing:routerReducer
})

const createStoreWithMiddleware = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)
const store = createStoreWithMiddleware(reducer)
const history = syncHistoryWithStore(browserHistory,store)
render(
    <Provider store={store}>
        <div>
            <Router history={history}>
                <Route path='/' component={App}>
                    <IndexRoute component={Home}/>
                    <Route path='foo' component={Foo} />
                    <Route path='bar' component={Bar} />
                </Route>
            </Router>
        </div>
    </Provider>,
    document.getElementById('root')
)
