import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Animated,
} from 'react-native';
import {translate} from '../../../../utils/language';
import {OnboardScreenThreeStyles} from './style';
import {OnboardImg, ArrowRight3Icon} from '../../../../../assets';
import {useRef} from 'react';
import {useEffect} from 'react';
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
    <SafeAreaView style={OnboardScreenThreeStyles.container}>
      <View style={OnboardScreenThreeStyles.header}>
        <View style={OnboardScreenThreeStyles.headerLeft}>
          <Text style={OnboardScreenThreeStyles.headerLeftText}>
            {translate('OnboardScreen.OnboardScreenTextThree')}
          </Text>
          <Text style={OnboardScreenThreeStyles.headerText}>
            {translate('OnboardScreen.OnboardScreenTextSlash')}
          </Text>
          <Text style={OnboardScreenThreeStyles.headerText}>
            {translate('OnboardScreen.OnboardScreenTextThree')}
          </Text>
        </View>
        <Text style={OnboardScreenThreeStyles.headerSkip}>
          {translate('OnboardScreen.OnboardScreenTextSkip')}
        </Text>
      </View>
      <Animated.View style={[{opacity: fadeImg}]}>
        <Image source={OnboardImg} style={OnboardScreenThreeStyles.img}></Image>
      </Animated.View>
      <Animated.View
        style={[OnboardScreenThreeStyles.descContainer, {opacity: fadeDesc}]}>
        <Text style={OnboardScreenThreeStyles.title}>
          {translate('OnboardScreen.OnboardScreenTextOder')}
        </Text>
        <Text style={OnboardScreenThreeStyles.desc}>
          {translate('OnboardScreen.OnboardScreenTextOderDesc')}
        </Text>
      </Animated.View>
      <Animated.View
        style={[OnboardScreenThreeStyles.btnNext, {opacity: fadeBtn}]}>
        <TouchableOpacity
          style={OnboardScreenThreeStyles.touchable}
          onPress={() => {
            navigate({screen: ScreenName.LOGIN_SCREEN});
          }}>
          <Text style={OnboardScreenThreeStyles.btnNextText}>
            {translate('OnboardScreen.OnboardScreenTextNext')}
          </Text>
          <Image
            source={ArrowRight3Icon}
            style={OnboardScreenThreeStyles.btnNextIcon}></Image>
        </TouchableOpacity>
      </Animated.View>
    </SafeAreaView>
  );
};

export default OnboardScreenOne;
