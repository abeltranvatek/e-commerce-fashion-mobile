import {StyleSheet} from 'react-native';

export const HomeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FBFBFD',
  },
  viewContainer: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 11,
  },

  textContainer: {
    marginTop: 32,
  },
  textExplore: {
    fontSize: 32,
    fontWeight: '500',
    color: '#000',
  },
  textBest: {
    fontSize: 20,
    fontWeight: '400',
    color: '#000',
    opacity: 0.3,
    marginTop: 20,
  },

  flatListTop: {
    marginTop: 35,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flatListTopContainer: {
    width: 71,
    height: 75,
    borderRadius: 15,
    alignItems: 'center',
    padding: 6,
    borderWidth: 1,
    borderColor: '#EBEBEB',
    borderRadius: 10,
  },
  flatListTopImage: {},
  flatListTopText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#000',
    opacity: 0.5,
    marginTop: 8,
  },
  bgActive: {
    backgroundColor: '#fff',
    width: 71,
    height: 75,
    borderRadius: 15,
    alignItems: 'center',
    borderRadius: 10,
    padding: 6,
  },
  flatListTopTextActive: {
    fontSize: 12,
    fontWeight: '500',
    color: '#000',
    marginTop: 8,
  },
  flatListBottom: {
    marginTop: 45,
    width: '100%',
  },
  flatListBottomHeader: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  flatListBottomHeaderTextNew: {
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 29,
    color: '#000',
  },
  flatListBottomHeaderTextSee: {
    fontSize: 14,
    fontWeight: '400',
    color: '#000',
    opacity: 0.5,
  },
  flatListBottomItem: {
    width: 155,
    height: 190,
    padding: 6,
    borderRadius: 15,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginRight: 20,
  },
  flatListBottomItemImg: {
    width: '100%',
    height: 130,
    resizeMode: 'cover',
    aspectRatio: 1.1 / 1,
  },
  flatListBottomItemName: {
    fontSize: 12,
    fontWeight: '400',
    color: '#000',
    textAlign: 'center',
    marginTop: 9,
  },
  flatListBottomItemPrice: {
    fontSize: 12,
    fontWeight: '500',
    color: '#000',
    marginTop: 5,
  },
});
