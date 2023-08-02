import {
  Image,
    Text,
    TouchableOpacity,
    View,
    TextInput,
    ImageBackground
  } from 'react-native';
import LoginScreenStyles from './style';
import { translate } from '../../../utils/language';
import { fetchLoginRequest } from '../redux/auth.actions';
import { useDispatch } from 'react-redux';
import {navigate} from '~utils/navigation'
import { ScreenName } from '../../navigation/screenName';
import { LogoIcon, BackgroundImage } from 'assets';
const LoginScreen = () => {
  const dispatch = useDispatch();
  const onClickLogin = () => {
    dispatch(
      fetchLoginRequest({
        userName: 'userName',
        password: 'password',
      }),

      navigate({screen: ScreenName.REGISTER_SCREEN}),
    );
  };

  return (
    <ImageBackground  style={LoginScreenStyles.container} source={BackgroundImage}>
      <View style={LoginScreenStyles.loginContainer}>
        <Image source={LogoIcon} style={LoginScreenStyles.logo}></Image>
        <Text style={LoginScreenStyles.title}>
          {translate('LoginScreen.LoginScreenTittleFashionCommerce')}
        </Text>
        <Text style={LoginScreenStyles.textLogin}>
          {translate('LoginScreen.LoginScreenTittle')}
        </Text>
        <View style={LoginScreenStyles.formContainer}>
          <TextInput
            style={LoginScreenStyles.textInput}
            placeholder={translate(
              'LoginScreen.LoginScreenPlaceHolderEmail',
            )}></TextInput>
          <TextInput
            style={LoginScreenStyles.textInput}
            placeholder={translate(
              'LoginScreen.LoginScreenPlaceHolderPassword',
            )}></TextInput>
          <View style={LoginScreenStyles.forgot}>
            <TouchableOpacity
              onPress={() => {
                navigate({screen: ScreenName.FORGOT_PASSWORD});
              }}>
              <Text style={LoginScreenStyles.textForgot}>
                {translate('LoginScreen.LoginScreenTextForgotPassword')}
              </Text>
            </TouchableOpacity>
            <View style={LoginScreenStyles.forgotRight}>
              <Text style={LoginScreenStyles.textNewUser}>
                {translate('LoginScreen.LoginScreenTextNewUser')}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigate({screen: ScreenName.REGISTER_SCREEN});
                }}>
                <Text style={LoginScreenStyles.textForgot}>
                  {translate('LoginScreen.LoginScreenTextRegister')}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={LoginScreenStyles.btnLogin}
          onPress={() => {
            navigate({screen: ScreenName.HOME_BAR_STACK_SCREEN});
          }}>
          <Text style={LoginScreenStyles.textBtnLogin}>
            {translate('LoginScreen.LoginScreenButtonLogin')}
          </Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
    );
};

export default LoginScreen;
