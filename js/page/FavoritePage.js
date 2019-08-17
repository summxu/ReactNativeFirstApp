import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import actions from "../action";
import { connect } from "react-redux";

class FavoritePage extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to FavoritePage!</Text>
        <Button title="点我切换主题" color={this.props.theme} onPress={() => {
          this.props.onThemeChange('pink')
        }}></ Button>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return state.theme
}
const mapDispatchToProps = dispatch => {
  return {
    onThemeChange: theme => dispatch(actions.onThemeChange(theme))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(FavoritePage)

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
