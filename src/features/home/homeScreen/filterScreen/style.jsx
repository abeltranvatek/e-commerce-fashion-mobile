import {Dimensions, StyleSheet} from 'react-native';
const height = Dimensions.get('window').height;

export const FilterScreenStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: height * 0.7,
    backgroundColor: '#FBFBFD',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: 'center',
  },
  header: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
  },
  headerTextClear: {
    fontSize: 14,
    fontWeight: '400',
    color: '#230A06',
  },
  headerTextFilter: {
    fontSize: 19,
    fontWeight: '500',
    color: '#230A06',
  },
  div: {
    width: '100%',
    height: 1,
    backgroundColor: '#1C1A19',
    opacity: 0.05,
    marginTop: 22,
  },
  bottom: {
    width: '90%',
    marginTop: 22,
  },
  textCategoryTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#230A06',
    alignSelf: 'flex-start',
  },
  categoryContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  categoryActive: {
    height: 46,
    padding: 10,
    backgroundColor: '#F67952',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  category: {
    height: 46,
    padding: 10,
    backgroundColor: '#fff',
    textAlign: 'center',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  texCategoryActive: {
    fontSize: 12,
    fontWeight: '500',
    color: '#fff',
  },
  textCategory: {
    fontSize: 12,
    fontWeight: '500',
    color: '#000',
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

  btnFilter: {
    width: '60%',
    height: 60,
    borderRadius: 30,
    backgroundColor: '#F67952',
  },
  btnFilterText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fff',
  },
});
