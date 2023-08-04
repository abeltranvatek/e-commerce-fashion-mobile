import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ScreenName} from '../screenName';
import LoginScreen from '../../auth/loginScreen';
import RegisterScreen from '../../auth/registerScreen';
import ForgotPassword from '../../auth/forgotPasswordScreen';
import OnboardScreen from '../../auth/onboard';

const LoginStack = createStackNavigator();

const LoginStackScreen = () => {
  return (
    <LoginStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={ScreenName.LOGIN_SCREEN}>
      <LoginStack.Screen
        key={ScreenName.LOGIN_SCREEN}
        name={ScreenName.LOGIN_SCREEN}
        component={LoginScreen}
        options={{gestureEnabled: false}}
      />

      <LoginStack.Screen
        key={ScreenName.REGISTER_SCREEN}
        name={ScreenName.REGISTER_SCREEN}
        component={RegisterScreen}
        options={{gestureEnabled: false}}
      />
      <LoginStack.Screen
        key={ScreenName.FORGOT_PASSWORD}
        name={ScreenName.FORGOT_PASSWORD}
        component={ForgotPassword}
        options={{gestureEnabled: false}}
      />
      <LoginStack.Screen
        key={ScreenName.ONBOARD_SCREEN}
        name={ScreenName.ONBOARD_SCREEN}
        component={OnboardScreen}
        options={{gestureEnabled: false}}
      />
    </LoginStack.Navigator>
  );
};

export default LoginStackScreen;
