import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {ScreenName} from '../screenName';
import FeedScreen from '../../home/feedScreen';
import {Image} from 'react-native';
import {UserGroupIcon, HomeIcon, UserIcon, PlusIcon, MoreIcon} from 'assets';
import MatesScreen from '../../home/matesScreen';
import AddEventScreen from '../../home/addEventScreen';
import MoreScreen from '../../home/moreScreen';
import ProfileScreen from '../../home/profileScreen';
const HomeBar = createBottomTabNavigator();
const HomeBarStackScreen = () => {
  return (
    <HomeBar.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {paddingBottom: 5, paddingTop: 5},
        tabBarLabelStyle: { fontSize: 12, fontWeight: '400' },
        tabBarActiveTintColor:"#E57773"
      }}
      initialRouteName="feed">
      <HomeBar.Screen
        key={ScreenName.FEED_SCREEN}
        name={ScreenName.FEED_SCREEN}
        component={FeedScreen}
        options={{
          tabBarLabel: 'Feed',
          tabBarIcon: tabInfo => {
            return (
              <Image
                source={HomeIcon}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: tabInfo.focused ? '#E57773' : '#000',
                }}></Image>
            );
          },
        }}></HomeBar.Screen>
      <HomeBar.Screen
        key={ScreenName.MATES_SCREEN}
        name={ScreenName.MATES_SCREEN}
        component={MatesScreen}
        options={{
          tabBarLabel: 'Mates',
          tabBarIcon: tabInfo => {
            return (
              <Image
                source={UserGroupIcon}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: tabInfo.focused ? '#E57773' : '#000',
                }}></Image>
            );
          },
        }}></HomeBar.Screen>
      <HomeBar.Screen
        key={ScreenName.ADD_EVENT_SCREEN}
        name={ScreenName.ADD_EVENT_SCREEN}
        component={AddEventScreen}
        options={{
          tabBarLabel: 'Add Event',
          tabBarIcon: tabInfo => {
            return (
              <Image
                source={PlusIcon}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: tabInfo.focused ? '#E57773' : '#000',
                }}></Image>
            );
          },
        }}></HomeBar.Screen>
      <HomeBar.Screen
        key={ScreenName.PROFILE_SCREEN}
        name={ScreenName.PROFILE_SCREEN}
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: tabInfo => {
            return (
              <Image
                source={UserIcon}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: tabInfo.focused ? '#E57773' : '#000',
                }}></Image>
            );
          },
        }}></HomeBar.Screen>
      <HomeBar.Screen
        key={ScreenName.MORE_SCREEN}
        name={ScreenName.MORE_SCREEN}
        component={MoreScreen}
        options={{
          tabBarLabel: 'More',
          tabBarIcon: tabInfo => {
            return (
              <Image
                source={MoreIcon}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: tabInfo.focused ? '#E57773' : '#000',
                }}></Image>
            );
          },
        }}></HomeBar.Screen>
    </HomeBar.Navigator>
  );
};

export default HomeBarStackScreen;
