import {StyleSheet} from 'react-native';
import {width} from '~utils/dimensions';

export const FeedScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    alignItems: 'center',
  },
  header: {
    width: '100%',
    height: 91,
    backgroundColor: 'white',
    paddingBottom: 12,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 41,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 43,
    height: 43,
  },
  title: {
    fontSize: 25,
    fontWeight: '700',
    color: 'black',
    marginLeft: 6,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 5,
  },
  content: {
    marginTop: 30,
    backgroundColor: 'white',
    height: 55,
    width: '80%',
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textNoEvent: {
    fontSize: 12,
    fontWeight: '400',
    color: 'black',
  },
  textCreate: {
    fontSize: 12,
    fontWeight: '500',
    color: '#E77874',
  },
});
