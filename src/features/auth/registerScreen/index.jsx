import React from 'react';
import {
  View,
  CheckBox,
  SafeAreaView,
  Image,
  Text,
  TouchableOpacity,
  Modal,
  Pressable,
} from 'react-native';
import InputCustom from '../../../components/inputCustom';
import {translate} from '../../../utils/language';
import {SignUpScreenStyles} from './style';
import {
  Logo,
  LetterIcon,
  PasswordIcon,
  FacebookIcon,
  GoogleIcon,
  UserIcon,
  TickIcon,
} from 'assets';
import {navigate} from '~utils/navigation';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {ScreenName} from '../../navigation/screenName';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {fetchRegisterRequest} from '../redux/auth.actions';

const RegisterScreen = () => {
  const [check, setCheck] = useState(false);
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const {tokenRegister} = useSelector(state => state.authorizeReducer);
  // useEffect(() => {
  //   setModal(true);
  // }, [tokenRegister]);
  const userRegister = {
    userName: name,
    emailAddress: email,
    password: password,
  };
  const handleRegister = () => {
    dispatch(fetchRegisterRequest(userRegister));
  };
  return (
    <SafeAreaView style={SignUpScreenStyles.container}>
      <View style={SignUpScreenStyles.viewContainer}>
        <Image source={Logo} style={SignUpScreenStyles.logo}></Image>
        <Text style={SignUpScreenStyles.title}>
          {translate('RegisterScreen.RegisterScreenTitle')}
        </Text>
        <View style={SignUpScreenStyles.form}>
          <InputCustom
            onChangeText={setName}
            icon={UserIcon}
            placeholder={translate(
              'RegisterScreen.RegisterScreenPlaceHolderName',
            )}></InputCustom>
          <InputCustom
            onChangeText={setEmail}
            icon={LetterIcon}
            placeholder={translate(
              'RegisterScreen.RegisterScreenPlaceHolderEmail',
            )}></InputCustom>
          <InputCustom
            onChangeText={setPassword}
            icon={PasswordIcon}
            placeholder={translate(
              'RegisterScreen.RegisterScreenPlaceHolderPassword',
            )}></InputCustom>
          <View style={SignUpScreenStyles.checkBox}>
            <TouchableOpacity
              onPress={() => {
                setCheck(!check);
              }}>
              {check ? (
                <View style={SignUpScreenStyles.CheckBoxCustom}></View>
              ) : (
                <Image
                  source={TickIcon}
                  style={SignUpScreenStyles.iconTick}></Image>
              )}
            </TouchableOpacity>
            <Text style={SignUpScreenStyles.textAccept}>
              {translate('RegisterScreen.RegisterScreenTextAccept')}
            </Text>
            <Text style={SignUpScreenStyles.textTerm}>
              {translate('RegisterScreen.RegisterScreenTextTerm')}
            </Text>
          </View>
        </View>
        <View style={SignUpScreenStyles.bottom}>
          <TouchableOpacity
            style={SignUpScreenStyles.btn}
            onPress={handleRegister}>
            <Text style={SignUpScreenStyles.btnText}>
              {translate('RegisterScreen.RegisterScreenTitle')}
            </Text>
          </TouchableOpacity>
          <View style={SignUpScreenStyles.or}>
            <View style={SignUpScreenStyles.div}></View>
            <Text style={SignUpScreenStyles.textOr}>
              {translate('RegisterScreen.RegisterScreenTextOr')}
            </Text>
            <View style={SignUpScreenStyles.div}></View>
          </View>
          <View style={SignUpScreenStyles.IconGroup}>
            <Image
              source={FacebookIcon}
              style={SignUpScreenStyles.icon}></Image>
            <Image source={GoogleIcon} style={SignUpScreenStyles.icon}></Image>
          </View>
          <View style={SignUpScreenStyles.textBottom}>
            <Text style={SignUpScreenStyles.textAccount}>
              {translate('RegisterScreen.RegisterScreenTextAccount')}
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigate({screen: ScreenName.LOGIN_SCREEN});
              }}>
              <Text style={SignUpScreenStyles.textSignup}>
                {translate('RegisterScreen.RegisterScreenTextLogin')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {modal && <View style={SignUpScreenStyles.overlay}></View>}
      {
        <Modal animationType="fade" transparent={true} visible={modal}>
          <View style={SignUpScreenStyles.centeredView}>
            <View style={SignUpScreenStyles.modalView}>
              <Text style={SignUpScreenStyles.modalText}>
                {translate('RegisterScreen.RegisterScreenTextSuccess')}
              </Text>
              <TouchableOpacity
                style={[SignUpScreenStyles.button]}
                onPress={() => navigate({screen: ScreenName.LOGIN_SCREEN})}>
                <Text style={SignUpScreenStyles.textStyle}>
                  {translate('RegisterScreen.RegisterScreenTextToLogin')}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      }
    </SafeAreaView>
  );
};

export default RegisterScreen;
