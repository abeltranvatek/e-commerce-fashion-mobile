import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useAppState} from '~core/hooks/useAppState';
import LoginStackScreen from './stack/loginStack';
import {ScreenName} from './screenName';
import HomeBarStackScreen from './stack/homeBarStack';

const Stack = createStackNavigator();

const AppRouter = () => {
  const currentAppState = useAppState();

  useEffect(() => {
    if (currentAppState === 'active') {
    }
  }, [currentAppState]);

  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={ScreenName.HOME_BAR_STACK_SCREEN}>
      <Stack.Screen
        name={ScreenName.STACK_LOGIN_SCREEN}
        component={LoginStackScreen}
      />
      <Stack.Screen
        name={ScreenName.HOME_BAR_STACK_SCREEN}
        component={HomeBarStackScreen}
        options={{swipeEnabled: false}}
      />
    </Stack.Navigator>
  );
};

export default AppRouter;
