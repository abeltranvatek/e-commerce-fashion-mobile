import {Text, View, Image, TextInput, TouchableOpacity, ImageBackground} from 'react-native';
import RegisterScreenStyles from './style';
import {translate} from '../../../utils/language';
import {LogoIcon, BackgroundImage} from 'assets';
import {goBack, navigate} from '~utils/navigation';
import {ScreenName} from '../../navigation/screenName';

const RegisterScreen = () => {
  return (
    <ImageBackground style={RegisterScreenStyles.container} source={BackgroundImage}>
      <View style={RegisterScreenStyles.registerContainer}>
        <Image source={LogoIcon} style={RegisterScreenStyles.logo}></Image>
        <Text style={RegisterScreenStyles.title}>
          {translate('RegisterScreen.RegisterTitleFashionCommerce')}
        </Text>
        <Text style={RegisterScreenStyles.textRegister}>
          {translate('RegisterScreen.RegisterScreenTitle')}
        </Text>
        <View style={RegisterScreenStyles.formContainer}>
          <TextInput
            style={RegisterScreenStyles.textInput}
            placeholder={translate(
              'RegisterScreen.RegisterScreenPlaceHolderName',
            )}></TextInput>
          <TextInput
            style={RegisterScreenStyles.textInput}
            placeholder={translate(
              'RegisterScreen.RegisterScreenPlaceHolderEmail',
            )}></TextInput>
          <TextInput
            style={RegisterScreenStyles.textInput}
            placeholder={translate(
              'RegisterScreen.RegisterScreenPlaceHolderPassword',
            )}></TextInput>
          <TextInput
            style={RegisterScreenStyles.textInput}
            placeholder={translate(
              'RegisterScreen.RegisterScreenPlaceHolderRepeatPassword',
            )}></TextInput>
          <View style={RegisterScreenStyles.textLogin}>
            <Text style={RegisterScreenStyles.textAccount}>
              {translate('RegisterScreen.RegisterScreenTextRegister')}
            </Text>
            <TouchableOpacity
              onPress={() => {
                goBack({screen: ScreenName.LOGIN_SCREEN});
              }}>
              <Text style={RegisterScreenStyles.textNavigationLogin}>
                {translate('RegisterScreen.RegisterScreenTextLogin')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={RegisterScreenStyles.btnRegister}>
          <Text style={RegisterScreenStyles.textBtnRegister}>
            {translate('RegisterScreen.RegisterScreenButtonLogin')}
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default RegisterScreen;
