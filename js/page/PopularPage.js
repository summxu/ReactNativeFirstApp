import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from "react-navigation";
/* 加载了顶部切换导航 */
type Props = {};
export default class PopularPage extends Component<Props> {
  _tabNavigator () {
    return createMaterialTopTabNavigator({
      PopularTab1: {
        screen: PopularTab,
        navigationOptions: {
          title: 'Tab1'
        }
      },
      PopularTab2: {
        screen: PopularTab,
        navigationOptions: {
          title: 'Tab2'
        }
      }
    })
  }
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to PopularPage!</Text>
      </View>
    );
  }
}

/* 创建每一个topNav组件 */
export default class PopularTab extends Component<Props> {
  render () {
    const { tabText } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>tabText</Text>
      </View>
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
  }
});
