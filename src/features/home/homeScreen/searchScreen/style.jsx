import {StyleSheet} from 'react-native';

export const FilterScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  viewHeader: {
    width: '90%',
    marginBottom: 11,
  },
  search: {
    width: '100%',
    marginTop: 10,
  },
  ViewHeaderItem: {
    marginTop: 22,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ViewHeaderItemText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#230A06',
    textAlign: 'center',
  },
  div: {
    backgroundColor: '#1C1A19',
    width: '100%',
    height: 0.65,
    marginTop: 13,
  },
  ViewBottom: {
    marginTop: 13,
    width: '90%',
    alignItems: 'center',
  },
  textResult: {
    fontSize: 16,
    fontWeight: '500',
    color: '#230A06',
    marginBottom: 30,
    marginTop: 15,
    alignSelf: 'flex-start',
  },
  flatListBottomItem: {
    width: 155,
    height: 190,
    padding: 6,
    borderRadius: 15,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginRight: 20,
    marginBottom: 20,
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
