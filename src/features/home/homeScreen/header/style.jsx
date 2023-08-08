import {StyleSheet} from 'react-native';

export const HeaderStyles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#000',
  },
  iconLocation: {
    width: 8,
    height: 10,
    resizeMode: 'cover',
  },
});
