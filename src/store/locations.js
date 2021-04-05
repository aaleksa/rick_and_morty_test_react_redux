import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router'

import thunk from 'redux-thunk';
import * as History from 'history'
import createRootReducer from '../modules';

export const history = History.createBrowserHistory();

const initialStateLocations = {};
const enhancersLocation = [];
const middleware = [thunk, routerMiddleware(history)];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancersLocation.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancersLocation
)

const store = createStore(
  createRootReducer(history),
  initialStateLocations,
  composedEnhancers
)

export default store;