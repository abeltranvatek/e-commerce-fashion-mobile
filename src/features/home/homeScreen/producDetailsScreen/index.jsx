import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  ArrowLeftIcon,
  HeartIcon,
  HeartRedIcon,
  ImgExample,
  ProductImg,
} from 'assets';
import {translate} from '~utils/language';
import {useState} from 'react';
import {ProductDetailScreenStyle} from './style';
import {goBack} from '~utils/navigation';
import {ScreenName} from '../../../navigation/screenName';
// import { Container } from './styles';

const data = [
  {id: 1, color: '#BEE8EA'},
  {id: 2, color: '#141B4A'},
  {id: 3, color: '#CEE3F5'},
  {id: 4, color: '#F4E5C3'},
];
const ProductDetailScreen = () => {
  const [heart, setHeart] = useState(true);
  const [id, setId] = useState(2);
  return (
    <SafeAreaView style={ProductDetailScreenStyle.container}>
      <ImageBackground
        source={ProductImg}
        resizeMode="contain"
        style={ProductDetailScreenStyle.imgBg}>
        <View style={ProductDetailScreenStyle.header}>
          <TouchableOpacity
            onPress={() => {
              goBack({screen: ScreenName.SEARCH_SCREEN});
            }}>
            <Image
              source={ArrowLeftIcon}
              style={ProductDetailScreenStyle.headerIconLeft}></Image>
          </TouchableOpacity>
          {heart ? (
            <View style={ProductDetailScreenStyle.containerImage}>
              <Image
                source={HeartRedIcon}
                style={ProductDetailScreenStyle.headerIconRight}></Image>
            </View>
          ) : (
            <View style={ProductDetailScreenStyle.containerImage}>
              <Image
                source={HeartIcon}
                style={ProductDetailScreenStyle.headerIconRight}></Image>
            </View>
          )}
        </View>
        {/* <Image
          source={ProductImg}
          style={ProductDetailScreenStyle.product}></Image> */}
      </ImageBackground>
      <View style={ProductDetailScreenStyle.bottom}>
        <View style={ProductDetailScreenStyle.bottomHeader}>
          <View style={ProductDetailScreenStyle.bottomHeaderLeft}>
            <Text style={ProductDetailScreenStyle.bottomHeaderLeftText}>
              {'Casual Henley'}
            </Text>
            <Text style={ProductDetailScreenStyle.bottomHeaderLeftText}>
              {'Shirt'}
            </Text>
          </View>
          <Text style={ProductDetailScreenStyle.bottomHeaderRightText}>
            {'$175'}
          </Text>
        </View>
        <Text style={ProductDetailScreenStyle.bottomDesc}>
          {
            'A Henley shirt is a collarless pullover shirt, by a round neckline and a placket about 3 to 5 inches (8 to 13 cm) long and usually having 2–5 buttons.'
          }
        </Text>
        <Text style={ProductDetailScreenStyle.bottomTextColor}>
          {translate('ProductDetailScreen.ProductDetailScreenTextColor')}
        </Text>
        <View style={ProductDetailScreenStyle.bottomSelectContainer}>
          {data.map(item => (
            <TouchableOpacity
              key={item.id}
              onPress={() => {
                setId(item.id);
              }}>
              {id === item.id ? (
                <View style={ProductDetailScreenStyle.bottomSelectActive}>
                  <View
                    style={[
                    ProductDetailScreenStyle.bottomSelectActiveItem,
                    {backgroundColor: item.color},
                    ]}></View>
                </View>
              ) : (
                <View
                  style={[
                    ProductDetailScreenStyle.bottomSelect,
                    {backgroundColor: item.color},
                  ]}></View>
              )}
            </TouchableOpacity>
          ))}
          {/* <TouchableOpacity
            style={ProductDetailScreenStyle.bottomSelect1}></TouchableOpacity>
          <TouchableOpacity
            style={ProductDetailScreenStyle.bottomSelect2}></TouchableOpacity>
          <TouchableOpacity
            style={ProductDetailScreenStyle.bottomSelect3}></TouchableOpacity>
          <TouchableOpacity
            style={ProductDetailScreenStyle.bottomSelect4}></TouchableOpacity> */}
        </View>
        <TouchableOpacity style={ProductDetailScreenStyle.btn}>
          <Text style={ProductDetailScreenStyle.bottomTextbtn}>
            {translate('ProductDetailScreen.ProductDetailScreenTextbtn')}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetailScreen;
