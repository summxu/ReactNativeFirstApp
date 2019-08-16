import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { connect } from "react-redux";
import actions from "../action";

class MyPage extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to MyPage!</Text>
        <Button title="点我切换主题" onPress={() => {
          this.props.onThemeChange('red')
        }}></ Button>
      </View>
    )
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
export default connect(mapStateToProps, mapDispatchToProps)(MyPage)

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
