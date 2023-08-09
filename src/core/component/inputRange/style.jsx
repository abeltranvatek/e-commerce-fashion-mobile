import {StyleSheet} from 'react-native';

export const InputRangeStyles = StyleSheet.create({
  container: {
    width: '100%',
  },
  priceContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#230A06',
  },
  priceSelect: {
    fontSize: 12,
    fontWeight: '500',
    color: '#230A06',
  },
  lableContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  track: {
    height: 3,
    backgroundColor: '#000',
    borderRadius: 3,
  },
  knob: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginTop: -8,
  },
});
