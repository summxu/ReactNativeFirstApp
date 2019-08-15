import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavigationUitl from "../navigator/NavigationUitl";

export default class WelcomePage extends Component {
  componentDidMount () {
    this.time = setTimeout(() => {
      NavigationUitl.goHome(this.props.navigation)
    }, 300);
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome Page React Native!</Text>
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
