import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {View} from 'react-native';
import {ScreenName} from '../../screenName';
import HomeScreen from '../../../home/homeScreen';
import FilterScreen from '../../../home/homeScreen/filterScreen';
import SearchScreen from '../../../home/homeScreen/searchScreen';
import ProductDetailScreen from '../../../home/homeScreen/producDetailsScreen';

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
        options={{}}
        key={ScreenName.FILTER_SCREEN}
        name={ScreenName.FILTER_SCREEN}
        component={FilterScreen}></HomeStack.Screen>
      <HomeStack.Screen
        key={ScreenName.SEARCH_SCREEN}
        name={ScreenName.SEARCH_SCREEN}
        component={SearchScreen}></HomeStack.Screen>
      <HomeStack.Screen
        key={ScreenName.PRODUCT_DETAILS_SCREEN}
        name={ScreenName.PRODUCT_DETAILS_SCREEN}
        component={ProductDetailScreen}></HomeStack.Screen>
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
