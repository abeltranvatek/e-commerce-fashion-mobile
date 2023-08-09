import {StyleSheet} from 'react-native';

export const SignUpScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#FBFBFD',
  },
  viewContainer: {
    width: '90%',
    alignItems: 'center',
  },
  logo: {
    marginTop: 55,
    width: 54,
    height: 62,
  },
  title: {
    marginTop: 40,
    fontSize: 22,
    fontWeight: '500',
    color: '#000',
  },
  form: {
    width: '100%',
    marginTop: 33,
  },
  checkBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  CheckBoxCustom: {
    width: 13,
    height: 13,
    backgroundColor: '#fff',
    borderWidth: 1,
    marginRight: 3,
    borderColor: '#EBEBEB',
    opacity: 0.5,
    borderRadius: 3,
  },
  iconTick: {marginRight: 3, width: 13, height: 13},
  textAccept: {
    fontSize: 12,
    fontWeight: '400',
    color: '#230A06',
    opacity: 0.5,
  },
  textTerm: {
    color: '#1C1A19',
    fontSize: 12,
    fontWeight: '500',
  },
  bottom: {
    width: '65%',
    marginTop: 17,
    alignItems: 'center',
  },
  btn: {
    width: '90%',
    height: 60,
    borderRadius: 130,
    backgroundColor: '#F67952',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fff',
    textAlign: 'center',
  },
  or: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  div: {
    height: 1,
    width: '40%',
    backgroundColor: '#232E24',
    opacity: 0.6,
  },
  IconGroup: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
  },
  textBottom: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 25,
    marginLeft: 50,
  },
  textAccount: {
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
    color: '#230A06',
    opacity: 0.5,
  },
  textSignup: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
    color: '#1C1A19',
  },
});
