import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {translate} from '../../../../utils/language';
import {OnboardScreenThreeStyles} from './style';
import {OnboardImg, ArrowRight3Icon} from '../../../../../assets';
const OnboardScreenOne = () => {
  return (
    <View style={OnboardScreenThreeStyles.container}>
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
        <Text style={OnboardScreenThreeStyles.headerText}>
          {translate('OnboardScreen.OnboardScreenTextSkip')}
        </Text>
      </View>
      <Image source={OnboardImg} style={OnboardScreenThreeStyles.img}></Image>
      <View style={OnboardScreenThreeStyles.descContainer}>
        <Text style={OnboardScreenThreeStyles.title}>
          {translate('OnboardScreen.OnboardScreenTextOder')}
        </Text>
        <Text style={OnboardScreenThreeStyles.desc}>
          {translate('OnboardScreen.OnboardScreenTextOderDesc')}
        </Text>
      </View>
      <TouchableOpacity
        style={OnboardScreenThreeStyles.btnNext}>
        <Text style={OnboardScreenThreeStyles.btnNextText}>
          {translate('OnboardScreen.OnboardScreenTextNext')}
        </Text>
        <Image
          source={ArrowRight3Icon}
          style={OnboardScreenThreeStyles.btnNextIcon}></Image>
      </TouchableOpacity>
    </View>
  );
};

export default OnboardScreenOne;
