import React, { Component } from 'react';
import NavigationUitl from "../navigator/NavigationUitl";
import DynamicTabNavigator from "../navigator/DynamicTabNavigator";

/* 主页，加载了底部路由 */

export default class HomePage extends Component {
  render () {
    /* 把navigation暂存 */
    NavigationUitl.navigation = this.props.navigation
    return <DynamicTabNavigator />
  }
}
