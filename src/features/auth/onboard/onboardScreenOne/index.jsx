import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Animated,
} from 'react-native';
import {translate} from '../../../../utils/language';
import {OnboardScreenOneStyles} from './style';
import {OnboardImg, ArrowRight1Icon} from '../../../../../assets';
import {navigate} from '~utils/navigation';
import {ScreenName} from '../../../navigation/screenName';

const OnboardScreenOne = () => {
  const fadeImg = useRef(new Animated.Value(0)).current;
  const fadeDesc = useRef(new Animated.Value(0)).current;
  const fadeBtn = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fadeImg, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
    Animated.timing(fadeDesc, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
    Animated.timing(fadeBtn, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, []);
  return (
    <SafeAreaView style={OnboardScreenOneStyles.container}>
      <View style={OnboardScreenOneStyles.header}>
        <View style={OnboardScreenOneStyles.headerLeft}>
          <Text style={OnboardScreenOneStyles.headerLeftText}>
            {translate('OnboardScreen.OnboardScreenTextOne')}
          </Text>
          <Text style={OnboardScreenOneStyles.headerText}>
            {translate('OnboardScreen.OnboardScreenTextSlash')}
          </Text>
          <Text style={OnboardScreenOneStyles.headerText}>
            {translate('OnboardScreen.OnboardScreenTextThree')}
          </Text>
        </View>
        <Text style={OnboardScreenOneStyles.headerSkip}>
          {translate('OnboardScreen.OnboardScreenTextSkip')}
        </Text>
      </View>
      <Animated.View style={[{opacity: fadeImg}]}>
        <Image source={OnboardImg} style={OnboardScreenOneStyles.img}></Image>
      </Animated.View>
      <Animated.View
        style={[OnboardScreenOneStyles.descContainer, {opacity: fadeDesc}]}>
        <Text style={OnboardScreenOneStyles.title}>
          {translate('OnboardScreen.OnboardScreenTextChoseProduct')}
        </Text>
        <Text style={OnboardScreenOneStyles.desc}>
          {translate('OnboardScreen.OnboardScreenTextChoseProductDesc')}
        </Text>
      </Animated.View>
      <Animated.View style={[OnboardScreenOneStyles.btnNext,{opacity:fadeBtn}]}>
        <TouchableOpacity
          style={OnboardScreenOneStyles.touchable}
          onPress={() => {
            navigate({screen: ScreenName.ONBOARD_SCREEN_TWO});
          }}>
          <Text style={OnboardScreenOneStyles.btnNextText}>
            {translate('OnboardScreen.OnboardScreenTextNext')}
          </Text>
          <Image
            source={ArrowRight1Icon}
            style={OnboardScreenOneStyles.btnNextIcon}></Image>
        </TouchableOpacity>
      </Animated.View>
    </SafeAreaView>
  );
};

export default OnboardScreenOne;
