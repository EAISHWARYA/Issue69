import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Search from './screens/search';
import Transaction from './screens/transaction';

export default class App extends React.Component{
  render(){
    return(
     <AppContainer/>
    )
  }
}
const tabNavigator=createBottomTabNavigator({
  Transaction:{screen:Transaction},
  Search:{screen:Search},
  
})
const AppContainer=createAppContainer(tabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
