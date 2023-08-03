import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {translate} from '../../../../utils/language';
import {OnboardScreenOneStyles} from './style';
import {
  OnboardImg,
  ArrowRight1Icon,
} from '../../../../../assets';
import {navigate} from '~utils/navigation';
import {ScreenName} from '../../../navigation/screenName';

const OnboardScreenOne = () => {
  return (
    <View style={OnboardScreenOneStyles.container}>
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
        <Text style={OnboardScreenOneStyles.headerText}>
          {translate('OnboardScreen.OnboardScreenTextSkip')}
        </Text>
      </View>
      <Image source={OnboardImg} style={OnboardScreenOneStyles.img}></Image>
      <View style={OnboardScreenOneStyles.descContainer}>
        <Text style={OnboardScreenOneStyles.title}>
          {translate('OnboardScreen.OnboardScreenTextChoseProduct')}
        </Text>
        <Text style={OnboardScreenOneStyles.desc}>
          {translate('OnboardScreen.OnboardScreenTextChoseProductDesc')}
        </Text>
      </View>
      <TouchableOpacity
        style={OnboardScreenOneStyles.btnNext}
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
    </View>
  )
};

export default OnboardScreenOne;
