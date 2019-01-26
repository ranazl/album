import React, {Component} from 'react';
import {Platform, StyleSheet, Tesxt, View} from 'react-native';


export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.main}>
          <View style={styles.menu}></View>
        </View>
        <View style={styles.footer}></View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  main: {
    flex:2,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    flex:1,
    backgroundColor:'white'
  },
  menu: {
    height:200,
    width:400,
    backgroundColor:'white'
  },
});
