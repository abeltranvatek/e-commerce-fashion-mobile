import { StyleSheet } from 'react-native';
import { Colors } from '~core/styles';

export const spinner = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 1,
  },
  overlay: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: Colors.Black,
    opacity: 0.7,
  },
  indicatorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerStyle: {
    width: 50,
    height: 50,
  },
});

export const inComponentSpinner = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinner: {
    width: '40%',
    minWidth: 40,
    maxWidth: 50,
  },
});

export const loadMore = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  lottie: {
    width: 100,
    aspectRatio: 300 / 50,
    flexGrow: 1,
    alignSelf: 'center',
  },
});
