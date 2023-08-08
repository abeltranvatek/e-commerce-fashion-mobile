import React from 'react';
import {View, SafeAreaView, Image, FlatList, Text} from 'react-native';
import Header from '../header';
import Search from '../search';
import {ArrowRight0Icon, ImgExample} from 'assets';
import {FilterScreenStyles} from './style';
import {translate} from '~utils/language';

const SearchScreen = () => {
  const data = [
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
    {id: 5},
    {id: 6},
    {id: 7},
    {id: 8},
    {id: 9},
    {id: 10},
    {id: 11},
    {id: 12},
  ];

  return (
    <SafeAreaView style={FilterScreenStyles.container}>
      <View style={FilterScreenStyles.viewHeader}>
        <Header></Header>
        <View style={FilterScreenStyles.search}>
          <Search></Search>
        </View>
        <View style={FilterScreenStyles.ViewHeaderItem}>
          <Text style={FilterScreenStyles.ViewHeaderItemText}>
            {translate('FilterScreen.FilterScreenTextRecent')}
          </Text>
          <Image source={ArrowRight0Icon}></Image>
        </View>
      </View>
      <View style={FilterScreenStyles.div}></View>
      <View style={FilterScreenStyles.ViewBottom}>
        <Text style={FilterScreenStyles.textResult}>
          {translate('FilterScreen.FilterScreenTextResult')}
        </Text>
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={FilterScreenStyles.flatListBottomItem}>
              <Image
                source={ImgExample}
                style={FilterScreenStyles.flatListBottomItemImg}></Image>
              <Text style={FilterScreenStyles.flatListBottomItemName}>
                {'Long Sleeve Shirts'}
              </Text>
              <Text style={FilterScreenStyles.flatListBottomItemPrice}>
                {'$175'}
              </Text>
            </View>
          )}></FlatList>
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
