import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ScreenName} from '../screenName';
import LoginScreen from '../../auth/loginScreen';
import RegisterScreen from '../../auth/registerScreen';
import ForgotPassword from '../../auth/forgotPasswordScreen';
import ResetPassword from '../../auth/resetPasswordScreen';

const LoginStack = createStackNavigator();

const LoginStackScreen = () => {
  return (
    <LoginStack.Navigator screenOptions={{headerShown: false}}>
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
        key={ScreenName.RESET_PASSWORD}
        name={ScreenName.RESET_PASSWORD}
        component={ResetPassword}
      />
    </LoginStack.Navigator>
  );
};

export default LoginStackScreen;
