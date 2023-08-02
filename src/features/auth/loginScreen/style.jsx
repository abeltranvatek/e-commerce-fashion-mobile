import {StyleSheet} from 'react-native';
import {width} from '../../../utils/dimensions';
import { Fonts } from '../../../../assets';
const LoginScreenStyles = StyleSheet.create({
  container: {
    width: width,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode:'cover'
  },
  loginContainer: {
    padding: 18,
    width: '80%',
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#fff',
    elevation: 4,
    alignItems: 'center',
    borderRadius: 10,
    justifyContent:'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 0.2
  },
  title: {
    fontSize: 20,
    color: '#000',
    fontWeight: '700',
    fontFamily: Fonts.PoppinsBlack,
    color:'black'
  },
  textLogin: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
    marginTop: 30,
    marginBottom: 15,
    fontFamily: Fonts.PoppinsBlack,
  },
  formContainer: {
    width: '100%',
    marginBottom: 15,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 6,
    color: '#000',
    borderColor: '#D6D8DA',
    marginBottom: 10,
    paddingLeft: 10,
    placeholderTextColor:"#8F959A",
    height: 40,
  },
  forgot: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 2
  },
  textForgot: {
    fontSize: 13,
    fontWeight: '500',
    color: '#E77874',
    fontFamily: Fonts.PoppinsRegular,
  },
  textNewUser: {
    fontSize: 13,
    color: '#000',
    marginRight: 5,
    fontFamily: Fonts.PoppinsRegular,
  },
  forgotRight: {
    flexDirection: 'row',
    alignItems: 'center',
    fontFamily: Fonts.PoppinsRegular,
  },
  textRegister: {
    fontSize: 13,
    fontWeight: '500',
    lineHeight: 18,
    marginLeft: 5,
    fontFamily: Fonts.PoppinsRegular,
  },
  btnLogin: {
    width: '100%',
    backgroundColor: '#E57773',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    padding:10,
  },
  textBtnLogin: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 21,
    color: '#fff',
    fontFamily: Fonts.PoppinsRegular,
  },
});

export default LoginScreenStyles;
