import {StyleSheet} from 'react-native';
export const LoginScreenStyles = StyleSheet.create({
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
  forgotContainer: {
    marginTop: 2,
    alignItems: 'flex-end',
  },
  textForgot: {
    color: '#230A06',
    fontSize: 12,
    fontWeight: '400',
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
    marginTop: 42,
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
    marginTop: 35,
  },
  textBottom: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 55,
    marginLeft: 50,
  },
  textAccount: {
    fontSize: 14,
    fontWeight: '400',
    color: '#230A06',
    textAlign: 'center',
    opacity: 0.5,
  },
  textSignup: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
    color: '#1C1A19',
  },
});
