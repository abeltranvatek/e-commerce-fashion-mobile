import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Animated,
} from 'react-native';
import {translate} from '../../../utils/language';
import {OnboardScreenStyles} from './style';
import {
  OnboardImg,
  ArrowRight1Icon,
  ArrowRight2Icon,
  ArrowRight3Icon,
} from '../../../../assets';
import {navigate} from '~utils/navigation';
import {ScreenName} from '../../navigation/screenName';
import Swiper from 'react-native-swiper';
import {useState} from 'react';

const data = [
  {
    id: 1,
    img: OnboardImg,
    title: translate('OnboardScreen.OnboardScreenTextChoseProduct'),
    desc: translate('OnboardScreen.OnboardScreenTextChoseProductDesc'),
    btn: ArrowRight1Icon,
  },
  {
    id: 2,
    img: OnboardImg,
    title: translate('OnboardScreen.OnboardScreenTextMakePayment'),
    desc: translate('OnboardScreen.OnboardScreenTextMakePaymentDesc'),
    btn: ArrowRight2Icon,
  },
  {
    id: 3,
    img: OnboardImg,
    title: translate('OnboardScreen.OnboardScreenTextOder'),
    desc: translate('OnboardScreen.OnboardScreenTextOderDesc'),
    btn: ArrowRight3Icon,
  },
];
const OnboardScreen = () => {
  const fadeImg = useRef(new Animated.Value(100)).current;
  const fadeDesc = useRef(new Animated.Value(100)).current;
  const fadeBtn = useRef(new Animated.Value(100)).current;
  const swiperRef = useRef(null);
  const [count, setCount] = useState(1);

  const next = item => {
    if (swiperRef) {
      swiperRef.current.scrollBy(1);
    }
    if (item.id === 3) {
      navigate({screen: ScreenName.LOGIN_SCREEN});
    }
  };
  return (
    <Swiper
      horizontal
      ref={swiperRef}
      dot={false}
      loop={false}
      showsPagination={false}
      scrollEnabled={ false }>
      {data.map(item => (
        <SafeAreaView key={item.id} style={OnboardScreenStyles.container}>
          <View style={OnboardScreenStyles.viewContainer}>
            <View style={OnboardScreenStyles.header}>
              <View style={OnboardScreenStyles.headerLeft}>
                <Text style={OnboardScreenStyles.headerLeftText}>
                  {item.id}
                </Text>
                <Text style={OnboardScreenStyles.headerText}>
                  {translate('OnboardScreen.OnboardScreenTextSlash')}
                </Text>
                <Text
                  style={
                    item.id === 3
                      ? OnboardScreenStyles.headerLeftText
                      : OnboardScreenStyles.headerText
                  }>
                  {translate('OnboardScreen.OnboardScreenTextThree')}
                </Text>
              </View>
              <Text style={OnboardScreenStyles.headerSkip}>
                {translate('OnboardScreen.OnboardScreenTextSkip')}
              </Text>
            </View>
            <Animated.View
              style={[OnboardScreenStyles.imgContainer, {opacity: fadeImg}]}>
              <Image source={item.img} style={OnboardScreenStyles.img}></Image>
            </Animated.View>
            <Animated.View
              style={[OnboardScreenStyles.descContainer, {opacity: fadeDesc}]}>
              <Text style={OnboardScreenStyles.title}>{item.title}</Text>
              <Text style={OnboardScreenStyles.desc}>{item.desc}</Text>
            </Animated.View>
            <Animated.View
              style={[OnboardScreenStyles.btnNext, {opacity: fadeBtn}]}>
              <TouchableOpacity
                style={OnboardScreenStyles.touchable}
                onPress={() => {
                  next(item);
                }}>
                <Text style={OnboardScreenStyles.btnNextText}>
                  {translate('OnboardScreen.OnboardScreenTextNext')}
                </Text>
                <Image
                  source={item.btn}
                  style={OnboardScreenStyles.btnNextIcon}></Image>
              </TouchableOpacity>
            </Animated.View>
          </View>
        </SafeAreaView>
      ))}
    </Swiper>
  );
};

export default OnboardScreen;
