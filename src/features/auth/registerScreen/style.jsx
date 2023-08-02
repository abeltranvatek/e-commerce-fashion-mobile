import {StyleSheet} from 'react-native';
import { Fonts } from '../../../../assets';
const RegisterScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode:'cover'
  },
  registerContainer: {
    padding: 18,
    width: '80%',
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#fff',
    elevation: 4,
    alignItems: 'center',
    borderRadius: 10,
    justifyContent: 'center',
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
    marginTop: 5,
  },
  textRegister: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
    marginTop: 30,
    marginBottom: 15,
    fontFamily: Fonts.PoppinsBlack
  },
  formContainer: {
    width: '100%',
    marginBottom: 15,
  },
  textInput: {
    height: 40,
    borderWidth: 1,
    borderRadius: 6,
    color: '#000',
    borderColor: '#D6D8DA',
    marginBottom: 10,
    paddingLeft: 10,
    placeholderTextColor: '#8F959A',
    fontFamily: Fonts.PoppinsRegular
  },
  textLogin: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textAccount: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 18,
    color: '#000',
    fontFamily: Fonts.PoppinsRegular

  },
  textNavigationLogin: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 18,
    color: '#E77874',
    fontFamily: Fonts.PoppinsRegular

  },
  btnRegister: {
    width: '100%',
    backgroundColor: '#E57773',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  textBtnRegister: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 21,
    color: '#fff',
    fontFamily: Fonts.PoppinsRegular

  },
});

export default RegisterScreenStyles;
