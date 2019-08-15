import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from "react-navigation";

import WelcomePage from "../page/WelcomePage";
import HomePage from "../page/HomePage";
import DetailPage from "../page/DetailPage";
/* 导入 connect */
import { connect } from "react-redux";
import { createReactNavigationReduxMiddleware, createReduxContainer } from "react-navigation-redux-helpers";

/* 设置默认的跟路由 */
export const rootCom = 'Init'

const InitNavigator = createStackNavigator({
  WelcomePage: {
    screen: WelcomePage,
    navigationOptions: {
      header: null
    }
  }
})
const MainNavigator = createStackNavigator({
  HomePage: {
    screen: HomePage,
    navigationOptions: {
      header: null
    }
  }, DetailPage: {
    screen: DetailPage,
    navigationOptions: {}
  }
})

export const RootNavigator = createSwitchNavigator({
  Init: InitNavigator,
  Main: MainNavigator
}, { navigationOptions: { header: null } })

/* 设置订阅中间件，设置key为root */
export const middleware = createReactNavigationReduxMiddleware(
  state => state.nav,
  'root'
);

/* 检查key 添加订阅 */
const AppNavigationState = createReduxContainer(RootNavigator, 'root')
/* 创建映射关系 */
const mapStateToProps = state => ({
  state: state.nav
})

// export default createAppContainer(SwitchNav); // Use this    
/* 连接react与redux */
export default connect(mapStateToProps)(AppNavigationState)