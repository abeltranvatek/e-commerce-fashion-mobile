import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
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
  return (
    <View style={OnboardScreenTwoStyles.container}>
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
        <Text style={OnboardScreenTwoStyles.headerText}>
          {translate('OnboardScreen.OnboardScreenTextSkip')}
        </Text>
      </View>
      <Image source={OnboardImg} style={OnboardScreenTwoStyles.img}></Image>
      <View style={OnboardScreenTwoStyles.descContainer}>
        <Text style={OnboardScreenTwoStyles.title}>
          {translate('OnboardScreen.OnboardScreenTextMakePayment')}
        </Text>
        <Text style={OnboardScreenTwoStyles.desc}>
          {translate('OnboardScreen.OnboardScreenTextMakePaymentDesc')}
        </Text>
      </View>
      <TouchableOpacity
        style={OnboardScreenTwoStyles.btnNext}
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
    </View>
  );
};

export default OnboardScreenOne;
