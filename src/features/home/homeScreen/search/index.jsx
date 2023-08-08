import React, {useState} from 'react';
import {Image, TextInput, TouchableOpacity, View} from 'react-native';
import {SearchIcon, FilterIcon} from 'assets';
import {SearchStyles} from './style';
import {translate} from '~utils/language';
import {navigate} from '~utils/navigation';
import {ScreenName} from '../../../navigation/screenName';

const Search = () => {
  const [value, setValue] = useState();
  return (
    <View style={SearchStyles.searchContainer}>
      <View style={SearchStyles.search}>
        <TouchableOpacity
          onPress={() => {
            navigate({screen: ScreenName.FILTER_SCREEN});
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
      <View style={SearchStyles.filterContainer}>
        <Image source={FilterIcon}></Image>
      </View>
    </View>
  );
};

export default Search;
