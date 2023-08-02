import {StyleSheet} from 'react-native';
import {width} from '../../../utils/dimensions';
import { Fonts } from '../../../../assets';
export const ResetPasswordScreenStyles = StyleSheet.create({
  container: {
    width: width,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode:'cover'
  },
  resetContainer: {
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
  textReset: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
    marginTop: 30,
    marginBottom: 15,
    fontFamily: Fonts.PoppinsBlack
  },
  formContainer: {
    width: '100%',
    marginTop: 16,
    marginBottom: 16,
  },
  textInput: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderRadius: 6,
    color: '#000',
    borderColor: '#D6D8DA',
    marginBottom: 8,
    paddingLeft: 10,
    placeholderTextColor: '#8F959A',
    fontFamily: Fonts.PoppinsRegular
  },
  btnReset: {
    width: '100%',
    height: 40,
    backgroundColor: '#E57773',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginBottom: 6,
  },
  textBtnReset: {
    fontSize: 14,
    fontWeight: '500',
    color: '#fff',
    fontFamily: Fonts.PoppinsRegular
  },
  btnCancel: {
    width: '100%',
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderWidth: 2,
    borderColor: '#E57773',
  },
  textBtnCancel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#E57773',
    fontFamily: Fonts.PoppinsRegular
  },
});
