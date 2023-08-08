import {StyleSheet} from 'react-native';

export const SearchStyles = StyleSheet.create({
  searchContainer: {
    width: '100%',
    height: 55,
    padding: 6,
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 25,
  },
  filterContainer: {
    backgroundColor: '#F67952',
    width: 47,
    height: 43,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  search: {
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
    width: '85%',
    height: '100%',
  },
  textInput: {
    width: '100%',
  },
});
