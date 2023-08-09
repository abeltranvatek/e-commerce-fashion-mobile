import React from 'react';
import {View, SafeAreaView, Image, FlatList, Text} from 'react-native';
import Header from '../header';
import {ArrowRight0Icon, ImgExample} from 'assets';
import {SearchScreenStyles} from './style';
import {translate} from '~utils/language';
import Search from '../search';

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
    <SafeAreaView style={SearchScreenStyles.container}>
      <View style={SearchScreenStyles.viewHeader}>
        <Header></Header>
        <View style={SearchScreenStyles.search}>
          <Search></Search>
        </View>
        <View style={SearchScreenStyles.ViewHeaderItem}>
          <Text style={SearchScreenStyles.ViewHeaderItemText}>
            {translate('FilterScreen.FilterScreenTextRecent')}
          </Text>
          <Image source={ArrowRight0Icon}></Image>
        </View>
      </View>
      <View style={SearchScreenStyles.div}></View>
      <View style={SearchScreenStyles.ViewBottom}>
        <Text style={SearchScreenStyles.textResult}>
          {translate('FilterScreen.FilterScreenTextResult')}
        </Text>
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={SearchScreenStyles.flatListBottomItem}>
              <Image
                source={ImgExample}
                style={SearchScreenStyles.flatListBottomItemImg}></Image>
              <Text style={SearchScreenStyles.flatListBottomItemName}>
                {'Long Sleeve Shirts'}
              </Text>
              <Text style={SearchScreenStyles.flatListBottomItemPrice}>
                {'$175'}
              </Text>
            </View>
          )}></FlatList>
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
