import {StyleSheet} from 'react-native';
export const inputStyles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    height: 57,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 16,
  },
  iconContainer: {
    width: 50,
    height: 45,
    backgroundColor: '#F67952',
    opacity: 0.3,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    zIndex: 0,
  },
  icon: {
    width: 24,
    height: 24,
    zIndex: 100,
  },
  textInput: {
    height: '100%',
    width: '100%',
    paddingLeft: 10,
    placeholderTextColor: '#230A06',
    placeholderTextSize: 12,
    color: '#000',
  },
});
