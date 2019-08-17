import React, { Component } from 'react';
import NavigationUitl from "../navigator/NavigationUitl";
import DynamicTabNavigator from "../navigator/DynamicTabNavigator";
import { BackHandler } from "react-native";
import { NavigationActions } from "react-navigation";
import { connect } from "react-redux";
/* 主页，加载了底部路由 */

class HomePage extends Component {

  /* 处理安卓，监听事件 */
  componentDidMount () {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }
  componentWillUnmount () {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }
  onBackPress = () => {
    const { dispatch, nav } = this.props;
    //如果RootNavigator中的MainNavigator的index为0，则不处理返回事件
    if (nav.routes[1].index === 0) {
      return false;
    }
    dispatch(NavigationActions.back());
    return true;
  };

  render () {
    /* 把navigation暂存,这是十分低级的方式，有了redux这就是垃圾 */
    NavigationUitl.navigation = this.props.navigation
    return <DynamicTabNavigator />
  }
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps)(HomePage)