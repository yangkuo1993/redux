import {createStore, applyMiddleware } from 'redux'
import App from '../reducers/index'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
const store = createStore(App,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunkMiddleware, createLogger));
export default store