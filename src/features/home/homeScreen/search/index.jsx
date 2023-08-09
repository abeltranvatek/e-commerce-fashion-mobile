import React, {useState} from 'react';
import {Image, TextInput, TouchableOpacity, View} from 'react-native';
import {SearchIcon, FilterIcon} from 'assets';
import {translate} from '~utils/language';
import {navigate} from '~utils/navigation';
import {ScreenName} from '../../../navigation/screenName';
import {SearchStyles} from './style';
import {useDispatch} from 'react-redux';
import {fetchNavOne, fetchNavTow} from '../../../navigation/stack/redux/action';
const Search = props => {
  const dispatch = useDispatch();
  const {setFilter} = props;
  const [value, setValue] = useState();
  return (
    <View style={SearchStyles.searchContainer}>
      <View style={SearchStyles.search}>
        <TouchableOpacity
          onPress={() => {
            navigate({screen: ScreenName.SEARCH_SCREEN});
          }}>
          <Image source={SearchIcon} style={SearchStyles.searchIcon}></Image>
        </TouchableOpacity>
        <TextInput
          onChangeText={setValue}
          style={SearchStyles.textInput}
          placeholder={
            value ? value : translate('HomeScreen.HomeScreenPlaceholderSearch')
          }></TextInput>
      </View>
      <TouchableOpacity
        onPress={() => {
          dispatch(fetchNavOne());
          setFilter(true);
        }}>
        <View style={SearchStyles.filterContainer}>
          <Image source={FilterIcon}></Image>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Search;
