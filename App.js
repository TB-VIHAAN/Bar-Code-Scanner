import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Slider, StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createButtonTabNavigator} from 'react-navigation-tabs';

import TransactionScreen from './screens/BookTransactionScreen';
import SearchScreen from './screens/SearchScreen';

export default class App extends React.Component{
  render(){
    return(
      <AppContainer />
    );
  }
}

const TabNavigator =createBottomTabNavigator({
  Transaction:{screen:TransactionScreen},
  Search:{screen:SearchScreen},
}); 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
