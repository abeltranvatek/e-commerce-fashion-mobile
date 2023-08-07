import React from 'react';
import {Image, View} from 'react-native';
import {HeaderStyles} from './style';
import {Text} from 'react-native';
import {BarIcon, LocationIcon, NotifiIcon} from 'assets';

const Header = () => {
  return (
    <View style={HeaderStyles.header}>
      <Image source={BarIcon} style={HeaderStyles.icon}></Image>
      <View style={HeaderStyles.locationContainer}>
        <Image source={LocationIcon} style={HeaderStyles.iconLocation}></Image>
        <Text style={HeaderStyles.locationText}>{'15/2 New Texas'}</Text>
      </View>
      <Image source={NotifiIcon} style={HeaderStyles.icon}></Image>
    </View>
  );
};

export default Header;
