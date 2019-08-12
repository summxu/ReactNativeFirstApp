import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";

import MyPage from "./MyPage";
import FavoritePage from "./FavoritePage";
import TrendingPage from "./TrendingPage";
import PopularPage from "./PopularPage";

import NavigationUitl from "../navigator/NavigationUitl";
/* 主页，加载了底部路由 */
type Props = {};
export default class HomePage extends Component<Props> {
  constructor(props) {
    super(props)
    console.disableYellowBox = true
  }
  _tabNavigator () {
    const bottomNav = createBottomTabNavigator({
      PopularPage: {
        screen: PopularPage,
        navigationOptions: {
          tabBarLabel: '最热',
          /* 这里实际上是一个对象 的 { } 按需引用*/
          tabBarIcon: ({ tintColor, focused }) => {
            return <MaterialIcons
              name={'whatshot'}
              size={26}
              style={{ color: tintColor }}
            />
          }
        }
      },
      TrendingPage: {
        screen: TrendingPage,
        navigationOptions: {
          tabBarLabel: '趋势',
          tabBarIcon: ({ tintColor, focused }) => {
            return <Ionicons
              name={'md-trending-up'}
              size={26}
              style={{ color: tintColor }}
            />
          }
        }
      },
      FavoritePage: {
        screen: FavoritePage,
        navigationOptions: {
          tabBarLabel: '喜欢',
          tabBarIcon: ({ tintColor, focused }) => {
            return <MaterialIcons
              name={'favorite'}
              size={26}
              style={{ color: tintColor }}
            />
          }
        }
      },
      MyPage: {
        screen: MyPage,
        navigationOptions: {
          tabBarLabel: '我的',
          tabBarIcon: ({ tintColor, focused }) => {
            return <Entypo
              name={'user'}
              size={26}
              style={{ color: tintColor }}
            />
          }
        }
      }
    }, {
        tabBarOptions: {
          activeTintColor: 'red'
        }
      })
    return createAppContainer(bottomNav)
  }
  render () {
    /* 把navigation暂存 */
    NavigationUitl.navigation = this.props.navigation
    const Tab = this._tabNavigator()
    return <Tab />
  }
}
