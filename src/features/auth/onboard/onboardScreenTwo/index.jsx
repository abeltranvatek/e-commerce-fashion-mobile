import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Animated,
} from 'react-native';
import {translate} from '../../../../utils/language';
import {OnboardScreenTwoStyles} from './style';
import {
  OnboardImg,
  ArrowRight1Icon,
  ArrowRight2Icon,
} from '../../../../../assets';
import {ScreenName} from '../../../navigation/screenName';
import {navigate} from '~utils/navigation';

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
    <SafeAreaView style={OnboardScreenTwoStyles.container}>
      <View style={OnboardScreenTwoStyles.header}>
        <View style={OnboardScreenTwoStyles.headerLeft}>
          <Text style={OnboardScreenTwoStyles.headerLeftText}>
            {translate('OnboardScreen.OnboardScreenTextTwo')}
          </Text>
          <Text style={OnboardScreenTwoStyles.headerText}>
            {translate('OnboardScreen.OnboardScreenTextSlash')}
          </Text>
          <Text style={OnboardScreenTwoStyles.headerText}>
            {translate('OnboardScreen.OnboardScreenTextThree')}
          </Text>
        </View>
        <Text style={OnboardScreenTwoStyles.headerSkip}>
          {translate('OnboardScreen.OnboardScreenTextSkip')}
        </Text>
      </View>
      <Animated.View style={[{opacity: fadeImg}]}>
        <Image source={OnboardImg} style={OnboardScreenTwoStyles.img}></Image>
      </Animated.View>
      <Animated.View
        style={[OnboardScreenTwoStyles.descContainer, {opacity: fadeDesc}]}>
        <Text style={OnboardScreenTwoStyles.title}>
          {translate('OnboardScreen.OnboardScreenTextMakePayment')}
        </Text>
        <Text style={OnboardScreenTwoStyles.desc}>
          {translate('OnboardScreen.OnboardScreenTextMakePaymentDesc')}
        </Text>
      </Animated.View>
      <Animated.View
        style={[OnboardScreenTwoStyles.btnNext, {opacity: fadeBtn}]}>
        <TouchableOpacity
          style={OnboardScreenTwoStyles.touchable}
          onPress={() => {
            navigate({screen: ScreenName.ONBOARD_SCREEN_THREE});
          }}>
          <Text style={OnboardScreenTwoStyles.btnNextText}>
            {translate('OnboardScreen.OnboardScreenTextNext')}
          </Text>
          <View style={OnboardScreenTwoStyles.iconContainer}>
            <Image
              source={ArrowRight2Icon}
              style={OnboardScreenTwoStyles.btnNextIcon}></Image>
            <Image
              source={ArrowRight1Icon}
              style={OnboardScreenTwoStyles.btnNextIconRight}></Image>
          </View>
        </TouchableOpacity>
      </Animated.View>
    </SafeAreaView>
  );
};

export default OnboardScreenOne;
