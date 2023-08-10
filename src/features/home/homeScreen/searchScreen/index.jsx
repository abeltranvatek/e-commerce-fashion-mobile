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
import {ArrowRight0Icon, ImgExample} from 'assets';
import {SearchScreenStyles} from './style';
import {translate} from '~utils/language';
import Search from '../search';
import {useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {fetchNavOne} from '../../../navigation/stack/redux/action';
import {navigate} from '~utils/navigation';
import {ScreenName} from '../../../navigation/screenName';
const SearchScreen = () => {
  const data = [
    {id: 1, img: ImgExample, name: 'Long Sleeve Shirts', price: '$125'},
    {id: 2, img: ImgExample, name: 'Long Sleeve Shirts', price: '$125'},
    {id: 3, img: ImgExample, name: 'Long Sleeve Shirts', price: '$125'},
    {id: 4, img: ImgExample, name: 'Long Sleeve Shirts', price: '$125'},
    {id: 5, img: ImgExample, name: 'Long Sleeve Shirts', price: '$125'},
    {id: 6, img: ImgExample, name: 'Long Sleeve Shirts', price: '$125'},
    {id: 7, img: ImgExample, name: 'Long Sleeve Shirts', price: '$125'},
    {id: 8, img: ImgExample, name: 'Long Sleeve Shirts', price: '$125'},
    {id: 9, img: ImgExample, name: 'Long Sleeve Shirts', price: '$125'},
    {id: 10, img: ImgExample, name: 'Long Sleeve Shirts', price: '$125'},
    {id: 11, img: ImgExample, name: 'Long Sleeve Shirts', price: '$125'},
    {id: 12, img: ImgExample, name: 'Long Sleeve Shirts', price: '$125'},
  ];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNavOne());
  }, []);
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
            <TouchableOpacity
              style={SearchScreenStyles.flatListBottomItem}
              onPress={() => {
                navigate({
                  screen: ScreenName.PRODUCT_DETAILS_SCREEN,
                  data: item,
                });
              }}>
              <Image
                source={item.img}
                style={SearchScreenStyles.flatListBottomItemImg}></Image>
              <Text style={SearchScreenStyles.flatListBottomItemName}>
                {item.name}
              </Text>
              <Text style={SearchScreenStyles.flatListBottomItemPrice}>
                {item.price}
              </Text>
            </TouchableOpacity>
          )}></FlatList>
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
