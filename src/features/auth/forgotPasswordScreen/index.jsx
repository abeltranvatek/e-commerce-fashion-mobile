import React from 'react';
import {Image, Text, TextInput, TouchableOpacity, View, ImageBackground} from 'react-native';
import {ForgotPasswordStyles} from './style';
import {translate} from '../../../utils/language';
import {LogoIcon, BackgroundImage} from 'assets';
import {goBack, navigate} from '../../../utils/navigation';
import {ScreenName} from '../../navigation/screenName';

const ForgotPassword = () => {

  const onSend = () => {
    navigate({screen: ScreenName.RESET_PASSWORD});
  }

  const onCancel = () => {
    goBack()
  }

  return (
    <ImageBackground style={ForgotPasswordStyles.container} source={BackgroundImage}>
      <View style={ForgotPasswordStyles.forgotContainer}>
        <Image source={LogoIcon} style={ForgotPasswordStyles.logo}></Image>
        <Text style={ForgotPasswordStyles.title}>
          {translate('ForgotPasswordScreen.ForgotPasswordScreenTitleFashionCommerce')}
        </Text>
        <Text style={ForgotPasswordStyles.textForgot}>
          {translate('ForgotPasswordScreen.ForgotPasswordScreenTitle')}
        </Text>
        <Text style={ForgotPasswordStyles.ForgotPasswordDesc}>
          {translate('ForgotPasswordScreen.ForgotPasswordScreenDesc')}
        </Text>
        <View style={ForgotPasswordStyles.formContainer}>
          <TextInput
            style={ForgotPasswordStyles.textInput}
            placeholder={translate(
              'ForgotPasswordScreen.ForgotPasswordScreenPlaceHolderEmail',
            )}></TextInput>
        </View>
        <TouchableOpacity style={ForgotPasswordStyles.btnForgot} onPress={onSend}>
          <Text style={ForgotPasswordStyles.textBtnForgot}>
            {translate('ForgotPasswordScreen.ForgotPasswordScreenBtnSend')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={ForgotPasswordStyles.btnCancel} onPress={onCancel}>
          <Text style={ForgotPasswordStyles.textBtnCancel}>
            {translate('ForgotPasswordScreen.ForgotPasswordScreenBtnCancel')}
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default ForgotPassword;
