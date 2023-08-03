import {StyleSheet} from 'react-native';
import {width} from '~utils/dimensions';
export const OnboardScreenThreeStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 56,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#000',
  },
  headerLeftText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#000',
  },
  headerSkip: {
    fontSize: 16,
    fontWeight: '400',
    color: '#000',
  },
  img: {},
  descContainer: {
    marginTop: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: '500',
    color: '#000',
    textAlign: 'center',
    marginBottom: 16,
  },
  desc: {
    fontSize: 14,
    fontWeight: '400',
    color: '#000',
    opacity: 0.5,
    textAlign: 'center',
    lineHeight: 23,
    height: 70,
  },
  btnNext: {
    width: '60%',
    backgroundColor: '#F67952',
    borderRadius: 120,
    height: 60,
    marginTop: 35,
  },
  touchable: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  btnNextText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#fff',
    paddingBottom: 3,
  },
});
