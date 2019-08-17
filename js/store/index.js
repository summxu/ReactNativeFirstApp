import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import reducers from '../reducer'
import { middleware } from '../navigator/AppNavigators'

/* 自定义一个中间件 */
const logger = store => next => action => {
  if (typeof action === 'function') {
    console.log('dispatching is function');
  } else {
    console.log('dispatching', action);
  }
  const result = next(action)
  console.log('nextState', store.getState());
}

const middlewares = [
  middleware,
  thunk,
  logger
];
/**
 * 创建store
 */
export default createStore(reducers, applyMiddleware(...middlewares));