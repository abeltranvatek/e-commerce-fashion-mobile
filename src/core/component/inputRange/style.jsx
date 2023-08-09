import {StyleSheet, Dimensions} from 'react-native';

export const InputRangeStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  caption: {
    fontSize: 16,
  },
  sliderContainer: {
    width: Dimensions.get('window').width * 0.8,
    height: 5,
    marginTop: 20,
    backgroundColor: '#E0E0E0',
    borderRadius: 2.5,
    position: 'relative',
  },
  rangeThumb: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#FF4081',
    position: 'absolute',
    top: -7.5,
  },
  rangeTrack: {
    height: 5,
    backgroundColor: '#FF4081',
  },
});
