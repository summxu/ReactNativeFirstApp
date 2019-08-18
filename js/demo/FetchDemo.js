import React, { Component } from 'react';
import { TextInput, StyleSheet, Text, Button, View } from 'react-native';

export default class FetchDemo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchKey: '',
      connect: 'sadasd'
    }
  }
  /* 搜索函数 */
  _goSearch () {

  }
  render () {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.searchBox}
          onChangeText={searchKey => {
            this.setState({ searchKey })
          }}
          value={this.state.searchKey}
        ></TextInput >
        <Button
          title="搜索"
          onPress={() => {
            this._goSearch
          }}></Button>
        <Text>{this.state.connect}</Text>
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
  searchBox: {
    borderWidth: 1,
    borderColor: '#000',
    minWidth: 50
  }
});
