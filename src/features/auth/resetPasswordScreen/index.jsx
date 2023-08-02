import React from 'react';
import {Image, Text, View, ImageBackground} from 'react-native';
import {ResetPasswordScreenStyles} from './style';
import {translate} from '~utils/language';
import {LogoIcon, BackgroundImage} from 'assets';
import {TextInput} from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native';
import {goBack} from '~utils/navigation'
import { ScreenName } from '../../navigation/screenName';
import { navigate } from '../../../utils/navigation';

const ResetPassword = () => {
  return (
    <ImageBackground style={ResetPasswordScreenStyles.container} source={BackgroundImage}>
      <View style={ResetPasswordScreenStyles.resetContainer}>
        <Image source={LogoIcon} style={ResetPasswordScreenStyles.logo}></Image>
        <Text style={ResetPasswordScreenStyles.title}>
          {translate('ResetPasswordScreen.ResetPasswordScreenTitleFashionCommerce')}
        </Text>
        <Text style={ResetPasswordScreenStyles.textReset}>
          {translate('ResetPasswordScreen.ResetPasswordScreenTitle')}
        </Text>
        <View style={ResetPasswordScreenStyles.formContainer}>
          <TextInput
            style={ResetPasswordScreenStyles.textInput}
            placeholder={translate(
              'ResetPasswordScreen.ResetPasswordScreenPlaceHolderNewPassword',
            )}></TextInput>
          <TextInput
            style={ResetPasswordScreenStyles.textInput}
            placeholder={translate(
              'ResetPasswordScreen.ResetPasswordScreenPlaceHolderConfirmNewPassword',
            )}></TextInput>
        </View>
        <TouchableOpacity style={ResetPasswordScreenStyles.btnReset}>
          <Text style={ResetPasswordScreenStyles.textBtnReset}>
            {translate('ResetPasswordScreen.ForgotPasswordScreenBtnReset')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={ResetPasswordScreenStyles.btnCancel}
          onPress={() => {
            navigate({screen: ScreenName.LOGIN_SCREEN});
          }}>
          <Text style={ResetPasswordScreenStyles.textBtnCancel}>
            {translate('ResetPasswordScreen.ForgotPasswordScreenBtnCancel')}
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default ResetPassword;
