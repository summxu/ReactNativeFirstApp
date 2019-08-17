import { combineReducers } from 'redux'
import theme from './theme'
import { rootCom, RootNavigator } from '../navigator/AppNavigators';

//1.指定默认state
const navState = RootNavigator.router.getStateForAction(RootNavigator.router.getActionForPathAndParams(rootCom));

/**
 * 2.创建自己的 navigation reducer，
 */
const navReducer = (state = navState, action) => {
  const nextState = RootNavigator.router.getStateForAction(action, state);
  // 如果`nextState`为null或未定义，只需返回原始`state`
  return nextState || state;
};

/**
 * 3.合并reducer,把所有的reducer聚合起来
 * nav是navigation 的路由
 * @type {Reducer<any> | Reducer<any, AnyAction>}
 */
const index = combineReducers({
  nav: navReducer,
  theme: theme,
});

export default index;