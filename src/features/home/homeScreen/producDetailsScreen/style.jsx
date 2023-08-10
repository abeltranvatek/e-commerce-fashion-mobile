import {StyleSheet, Dimensions} from 'react-native';

const height = Dimensions.get('window').height;
export const ProductDetailScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  imgBg: {
    width: '100%',
    height: height * 0.5,
    alignItems: 'center',
    marginTop: 10,
  },
  header: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  product: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    aspectRatio: 1 / 1,
  },
  containerImage: {
    padding: 3,
    backgroundColor: '#fff',
    borderRadius: 50,
  },
  bottom: {
    width: '100%',
    height: height * 0.5,
    backgroundColor: '#fff',
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
  },

  bottomHeader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
    alignSelf: 'center',
  },
  bottomHeaderLeftText: {
    fontSize: 20,
    fontWeight: '500',
    color: ' #000',
  },
  bottomHeaderRightText: {
    fontSize: 18,
    fontWeight: '500',
    color: ' #000',
  },
  bottomDesc: {
    marginTop: 18,
    fontSize: 12,
    fontWeight: '400',
    color: '#000',
    opacity: 0.5,
    alignSelf: 'flex-start',
    lineHeight: 20,
  },
  bottomTextColor: {
    alignSelf: 'flex-start',
    marginTop: 17,
    fontSize: 14,
    fontWeight: '400',
    color: '#00060A',
  },
  bottomSelectContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 26,
    alignSelf: 'flex-start',
  },
  bottomSelect: {
    width: 24,
    height: 24,
    borderRadius: 20,
    marginRight: 10,
  },
  bottomSelectActiveItem: {
    width: 24,
    height: 24,
    borderRadius: 20,
  },
  bottomSelectActive: {
    borderRadius: 26,
    padding: 3,
    borderColor: '#F67952',
    borderWidth: 1,
    marginRight: 10,
  },
  btn: {
    width: '60%',
    height: 60,
    borderRadius: 70,
    backgroundColor: '#F67952',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
  },
  bottomTextbtn: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});
