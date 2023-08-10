import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import ShopScreen from '../../home/shopScreen';
import {ScreenName} from '../screenName';
import FavoriteScreen from '../../home/favouriteScreen';
import ProfileScreen from '../../home/profileScreen';
import {
  BuyIcon,
  BuyActiveIcon,
  HomeIcon,
  HomeActiveIcon,
  HeartIcon,
  ProfileIcon,
  ProfileActiveIcon,
} from 'assets';
import HomeScreen from '../../home/homeScreen';
import {Image, View} from 'react-native';
import HomeStackScreen from './homeStackScreen';
import {useSelector} from 'react-redux';
import {useState} from 'react';

const HomeBar = createBottomTabNavigator();
const HomeBarStackScreen = () => {
  const { count } = useSelector(state => state.navigationReducer);
  console.log(count)
  return (
    <HomeBar.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabel: '',
        tabBarStyle: {},
        tabBarActiveTintColor: '#F67952',
      }}
      initialRouteName={ScreenName.HOME_SCREEN}>
      {count === 1 ? (
        <HomeBar.Screen
          key={ScreenName.HOME_STACK_SCREEN}
          name={ScreenName.HOME_STACK_SCREEN}
          component={HomeStackScreen}
          options={{
            tabBarStyle: {
              display: 'none',
            },
            tabBarIcon: ({focused}) => (
              <FocusedCustom
                width={20}
                height={20}
                focused={focused}
                icon={HomeIcon}
                iconActive={HomeActiveIcon}></FocusedCustom>
            ),
          }}></HomeBar.Screen>
      ) : (
        <HomeBar.Screen
          key={ScreenName.HOME_STACK_SCREEN}
          name={ScreenName.HOME_STACK_SCREEN}
          component={HomeStackScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <FocusedCustom
                width={20}
                height={20}
                focused={focused}
                icon={HomeIcon}
                iconActive={HomeActiveIcon}></FocusedCustom>
            ),
          }}></HomeBar.Screen>
      )}
      <HomeBar.Screen
        key={ScreenName.SHOP_SCREEN}
        name={ScreenName.SHOP_SCREEN}
        component={ShopScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <FocusedCustom
              width={24}
              height={24}
              focused={focused}
              icon={BuyIcon}
              iconActive={BuyActiveIcon}></FocusedCustom>
          ),
        }}></HomeBar.Screen>
      <HomeBar.Screen
        key={ScreenName.FAVORITE_SCREEN}
        name={ScreenName.FAVORITE_SCREEN}
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <FocusedCustom
              width={24}
              height={24}
              focused={focused}
              icon={HeartIcon}
              iconActive={HeartIcon}></FocusedCustom>
          ),
        }}></HomeBar.Screen>
      <HomeBar.Screen
        key={ScreenName.PROFILE_SCREEN}
        name={ScreenName.PROFILE_SCREEN}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <FocusedCustom
              width={20}
              height={20}
              focused={focused}
              icon={ProfileIcon}
              iconActive={ProfileActiveIcon}></FocusedCustom>
          ),
        }}></HomeBar.Screen>
    </HomeBar.Navigator>
  );
};

export default HomeBarStackScreen;

const FocusedCustom = props => {
  const {focused, icon, iconActive, width, height} = props;
  return (
    <View>
      {focused ? (
        <View>
          <View
            style={{
              width: 14,
              height: 5,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              backgroundColor: '#F67952',
              marginLeft: 3,
            }}></View>
          <Image
            source={iconActive}
            resizeMode="contain"
            style={{
              width: width,
              height: height,
              marginTop: 10,
            }}></Image>
        </View>
      ) : (
        <View>
          <View
            style={{
              width: 14,
              height: 5,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
            }}></View>
          <Image
            source={icon}
            resizeMode="contain"
            style={{
              width: width,
              height: height,
              marginTop: 10,
            }}></Image>
        </View>
      )}
    </View>
  );
};
