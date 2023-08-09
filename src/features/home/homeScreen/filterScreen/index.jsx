import React from 'react';
import {
  View,
  SafeAreaView,
  Image,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import Header from '../header';
import Search from '../search';
import {ArrowRight0Icon, ImgExample} from 'assets';
import {FilterScreenStyles} from './style';
import {translate} from '~utils/language';
import {XIcon} from 'assets';
import {useDispatch} from 'react-redux';
import {fetchNavTow} from '../../../navigation/stack/redux/action';
import {useState} from 'react';
import InputRange from '../../../../core/component/inputRange';

const FilterScreen = props => {
  const {setFilter} = props;
  const dispatch = useDispatch();
  const [id, setId] = useState(1);
  const data = [
    {id: 1, name: 'New Arrival'},
    {id: 2, name: 'Top Tranding'},
    {id: 3, name: 'Featured Products'},
  ];
  return (
    <SafeAreaView style={FilterScreenStyles.container}>
      <View style={FilterScreenStyles.header}>
        <Text style={FilterScreenStyles.headerTextClear}>
          {translate('FilterScreen.FilterScreenTextClear')}
        </Text>
        <Text style={FilterScreenStyles.headerTextFilter}>
          {translate('FilterScreen.FilterScreenTextFilter')}
        </Text>
        <TouchableOpacity
          onPress={() => {
            setFilter(false);
            dispatch(fetchNavTow());
          }}>
          <Image source={XIcon}></Image>
        </TouchableOpacity>
      </View>
      <View style={FilterScreenStyles.div}></View>
      <View style={FilterScreenStyles.bottom}>
        <Text style={FilterScreenStyles.textCategoryTitle}>
          {translate('FilterScreen.FilterScreenTextCategory')}
        </Text>
        <View style={FilterScreenStyles.categoryContainer}>
          {data.map(item => (
            <TouchableOpacity
              style={
                id === item.id
                  ? FilterScreenStyles.categoryActive
                  : FilterScreenStyles.category
              }
              onPress={() => {
                setId(item.id);
              }}
              key={item.id}>
              <Text
                style={
                  id === item.id
                    ? FilterScreenStyles.texCategoryActive
                    : FilterScreenStyles.textCategory
                }>
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={FilterScreenStyles.priceContainer}>
          <Text style={FilterScreenStyles.priceText}>
            {translate('FilterScreen.FilterScreenTextPrice')}
          </Text>
          <Text style={FilterScreenStyles.priceSelect}>{'$50-$200'}</Text>
        </View>
        <View style={FilterScreenStyles.priceContainer}>
          <Text style={FilterScreenStyles.priceText}>
            {translate('FilterScreen.FilterScreenTextPrice')}
          </Text>
          <Text style={FilterScreenStyles.priceSelect}>{'$50-$200'}</Text>
        </View>
        <TouchableOpacity style={FilterScreenStyles.btnFilter}>
          <Text style={FilterScreenStyles.btnFilterText}>{translate('FilterScreen.FilterScreenTextbtn')}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default FilterScreen;
