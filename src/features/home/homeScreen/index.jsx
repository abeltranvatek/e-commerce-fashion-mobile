import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {
  BarIcon,
  LocationIcon,
  NotifiIcon,
  SearchIcon,
  FilterIcon,
  TshirtIcon,
  PantsIcon,
  ShirtIcon,
  DressIcon,
  ImgExample,
} from 'assets';
import {HomeScreenStyles} from './style';
import {translate} from '~utils/language';
import Header from './header';
import Search from './search';

const dataIcon = [
  {
    id: 1,
    icon: DressIcon,
    text: translate('HomeScreen.HomeScreenTextDress'),
  },
  {
    id: 2,
    icon: ShirtIcon,
    text: translate('HomeScreen.HomeScreenTextShirt'),
  },
  {
    id: 3,
    icon: PantsIcon,
    text: translate('HomeScreen.HomeScreenTextPants'),
  },
  {
    id: 4,
    icon: TshirtIcon,
    text: translate('HomeScreen.HomeScreenTextTshirt'),
  },
];
const dataFlatlist = [ {id: 1}, {id: 2}, {id: 3}, {id: 4}];
const HomeScreen = () => {
  const [active, setActive] = useState(true);
  const [id, setId] = useState(2);
  return (
    <SafeAreaView style={HomeScreenStyles.container}>
      <View style={HomeScreenStyles.viewContainer}>
        <Header></Header>
        <View style={HomeScreenStyles.textContainer}>
          <Text style={HomeScreenStyles.textExplore}>
            {translate('HomeScreen.HomeScreenTextExplore')}
          </Text>
          <Text style={HomeScreenStyles.textBest}>
            {translate('HomeScreen.HomeScreenTextBest')}
          </Text>
        </View>
        <Search></Search>
        <View style={HomeScreenStyles.flatListTop}>
          {dataIcon.map(item => (
            <TouchableOpacity
              onPress={() => {
                setActive(true);
                setId(item.id);
              }}
              key={item.id}>
              <View
                style={
                  active && id === item.id
                    ? HomeScreenStyles.bgActive
                    : HomeScreenStyles.flatListTopContainer
                }>
                <Image
                  source={item.icon}
                  style={HomeScreenStyles.flatListTopImage}></Image>
                <Text
                  style={
                    active && id === item.id
                      ? HomeScreenStyles.flatListTopTextActive
                      : HomeScreenStyles.flatListTopText
                  }>
                  {item.text}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <View style={HomeScreenStyles.flatListBottom}>
          <View style={HomeScreenStyles.flatListBottomHeader}>
            <Text style={HomeScreenStyles.flatListBottomHeaderTextNew}>
              {translate('HomeScreen.HomeScreenTextNew')}
            </Text>
            <TouchableOpacity>
              <Text style={HomeScreenStyles.flatListBottomHeaderTextSee}>
                {translate('HomeScreen.HomeScreenTextSeeAll')}
              </Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={dataFlatlist}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            horizontal
            renderItem={({item}) => (
              <View style={HomeScreenStyles.flatListBottomItem}>
                <Image
                  source={ImgExample}
                  style={HomeScreenStyles.flatListBottomItemImg}></Image>
                <Text style={HomeScreenStyles.flatListBottomItemName}>
                  {'Long Sleeve Shirts'}
                </Text>
                <Text style={HomeScreenStyles.flatListBottomItemPrice}>
                  {'$175'}
                </Text>
              </View>
            )}></FlatList>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const Item = props => {
  const {icon, ItemText} = props;
  return (
    <View style={HomeScreenStyles.flatListTopContainer}>
      <Image source={icon} style={HomeScreenStyles.flatListTopImage}></Image>F
      <Text style={HomeScreenStyles.flatListTopText}>{}</Text>
    </View>
  );
};
