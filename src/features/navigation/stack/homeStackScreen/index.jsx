import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {View} from 'react-native';
import {ScreenName} from '../../screenName';
import HomeScreen from '../../../home/homeScreen';
import FilterScreen from '../../../home/homeScreen/filterScreen';

const HomeStack = createStackNavigator();
const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={ScreenName.HOME_SCREEN}>
      <HomeStack.Screen
        key={ScreenName.HOME_SCREEN}
        name={ScreenName.HOME_SCREEN}
        component={HomeScreen}></HomeStack.Screen>
      <HomeStack.Screen
        key={ScreenName.FILTER_SCREEN}
        name={ScreenName.FILTER_SCREEN}
        component={FilterScreen}></HomeStack.Screen>
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
