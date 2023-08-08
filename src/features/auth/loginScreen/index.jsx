import {
  Image,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ImageBackground,
  SafeAreaView,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {translate} from '../../../utils/language';
import {fetchLoginRequest} from '../redux/auth.actions';
import {useDispatch, useSelector} from 'react-redux';
import {navigate} from '~utils/navigation';
import {ScreenName} from '../../navigation/screenName';
import {Logo, LetterIcon, PasswordIcon, FacebookIcon, GoogleIcon} from 'assets';
import {LoginScreenStyles} from './style';
import InputCustom from '../../../components/inputCustom';
import {useState} from 'react';
import {useEffect} from 'react';
const LoginScreen = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const {pending, error, token} = useSelector(state => state.authorizeReducer);
  useEffect(() => {
    navigate({screen: ScreenName.HOME_BAR_STACK_SCREEN});
  }, [token]);
  const onClickLogin = () => {
    dispatch(fetchLoginRequest({username: email, password: password}));
  };
  if (error === 'Bad credentials') {
    Alert.alert('Email or password wrong');
  }
  return (
    <SafeAreaView style={LoginScreenStyles.container}>
      <View style={LoginScreenStyles.viewContainer}>
        <Image source={Logo} style={LoginScreenStyles.logo}></Image>
        <Text style={LoginScreenStyles.title}>
          {translate('LoginScreen.LoginScreenTittle')}
        </Text>
        <View style={LoginScreenStyles.form}>
          <InputCustom
            onChangeText={setEmail}
            icon={LetterIcon}
            placeholder={translate(
              'LoginScreen.LoginScreenPlaceHolderEmail',
            )}></InputCustom>
          <InputCustom
            onChangeText={setPassword}
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
            onPress={onClickLogin}>
            {pending ? (
              <ActivityIndicator size="large" color="#fff" />
            ) : (
              <Text style={LoginScreenStyles.btnText}>
                {translate('LoginScreen.LoginScreenTextBtnLogin')}
              </Text>
            )}
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
