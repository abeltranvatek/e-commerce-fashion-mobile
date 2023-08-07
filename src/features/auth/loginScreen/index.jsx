import {
  Image,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import {translate} from '../../../utils/language';
import {fetchLoginRequest} from '../redux/auth.actions';
import {useDispatch} from 'react-redux';
import {navigate} from '~utils/navigation';
import {ScreenName} from '../../navigation/screenName';
import {Logo, LetterIcon, PasswordIcon, FacebookIcon, GoogleIcon} from 'assets';
import {LoginScreenStyles} from './style';
import InputCustom from '../../../components/inputCustom';
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
    <SafeAreaView style={LoginScreenStyles.container}>
      <View style={LoginScreenStyles.viewContainer}>
        <Image source={Logo} style={LoginScreenStyles.logo}></Image>
        <Text style={LoginScreenStyles.title}>
          {translate('LoginScreen.LoginScreenTittle')}
        </Text>
        <View style={LoginScreenStyles.form}>
          <InputCustom
            icon={LetterIcon}
            placeholder={translate(
              'LoginScreen.LoginScreenPlaceHolderEmail',
            )}></InputCustom>
          <InputCustom
            icon={PasswordIcon}
            placeholder={translate(
              'LoginScreen.LoginScreenPlaceHolderPassword',
            )}></InputCustom>
          <TouchableOpacity style={LoginScreenStyles.forgotContainer}>
            <Text style={LoginScreenStyles.textForgot}>
              {translate('LoginScreen.LoginScreenTextForgotPassword')}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={LoginScreenStyles.bottom}>
          <TouchableOpacity
            style={LoginScreenStyles.btn}
            onPress={() => {
              navigate({screen: ScreenName.HOME_BAR_STACK_SCREEN});
            }}>
            <Text style={LoginScreenStyles.btnText}>
              {translate('LoginScreen.LoginScreenTextBtnLogin')}
            </Text>
          </TouchableOpacity>
          <View style={LoginScreenStyles.or}>
            <View style={LoginScreenStyles.div}></View>
            <Text style={LoginScreenStyles.textOr}>
              {translate('LoginScreen.LoginScreenTextOr')}
            </Text>
            <View style={LoginScreenStyles.div}></View>
          </View>
          <View style={LoginScreenStyles.IconGroup}>
            <Image source={FacebookIcon} style={LoginScreenStyles.icon}></Image>
            <Image source={GoogleIcon} style={LoginScreenStyles.icon}></Image>
          </View>
          <View style={LoginScreenStyles.textBottom}>
            <Text style={LoginScreenStyles.textAccount}>
              {translate('LoginScreen.LoginScreenTextAccount')}
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigate({screen: ScreenName.REGISTER_SCREEN});
              }}>
              <Text style={LoginScreenStyles.textSignup}>
                {translate('LoginScreen.LoginScreenTextSignUp')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
