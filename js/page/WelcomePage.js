import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import NavigationUitl from "../navigator/NavigationUitl";

type Props = {};
export default class WelcomePage extends Component<Props> {
  componentDidMount () {
    this.time = setTimeout(() => {
      NavigationUitl.toHome(this.props.navigation)
    }, 3000);
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
