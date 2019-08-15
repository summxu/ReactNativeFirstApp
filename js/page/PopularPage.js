import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator, createAppContainer } from "react-navigation";
import NavigationUitl from "../navigator/NavigationUitl";

/* 加载了顶部切换导航 */
export default class PopularPage extends Component {
  /* 动态配置 tab item */
  constructor(props) {
    super(props)
    this.tabsNames = ['Java', 'Android', "IOS", 'React', 'React Native', 'Swift', 'Vue', 'Object-C']
  }
  _genTabs () {
    let tabs = {}
    this.tabsNames.forEach((item, index) => {
      tabs[`tab${index}`] = {
        /* 可定义screen为回调函数，返回路由组件，来进行 props 传参 */
        screen: props => <PopularTab {...props} tabLabel={item} />,
        navigationOptions: {
          title: item
        }
      }
    });
    return tabs
  }
  render () {
    const TabNavigator = createAppContainer(createMaterialTopTabNavigator(
      this._genTabs(), {
        tabBarOptions: {
          upperCaseLabel: false,
          scrollEnabled: true,
          style: styles.tabBarSyle,
          activeTintColor: 'red'
        }
      }
    ))
    return <TabNavigator />
  }
}

class PopularTab extends Component {
  render () {
    const { tabLabel } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{tabLabel}</Text>
        <Text onPress={() => {
          NavigationUitl.goPage({ navigation: this.props.navigation }, "DetailPage")
        }} style={styles.welcome}>点击跳转到详情页</Text>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  tabBarSyle: {
    height: 40,
    backgroundColor: '#3d3d3d'
  }
});
