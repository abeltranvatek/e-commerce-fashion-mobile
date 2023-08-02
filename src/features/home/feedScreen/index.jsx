import React from 'react';
import {View, SafeAreaView, Image, Text} from 'react-native';
import {FeedScreenStyles} from './style';
import {translate} from '../../../utils/language';
import {LogoIcon, InviteIcon, NotifIcon} from 'assets';

const FeedScreen = () => {
  return (
    <SafeAreaView style={FeedScreenStyles.container}>
      <View style={FeedScreenStyles.header}>
        <View style={FeedScreenStyles.headerLeft}>
          <Image source={LogoIcon} style={FeedScreenStyles.logo}></Image>
          <Text style={FeedScreenStyles.title}>
            {translate('FeedScreenEmpty.FeedScreenTitleFashionCommerce')}
          </Text>
        </View>
        <View style={FeedScreenStyles.headerRight}>
          <Image source={InviteIcon} style={FeedScreenStyles.icon}></Image>
          <Image source={NotifIcon} style={FeedScreenStyles.icon}></Image>
        </View>
      </View>
      <View style={FeedScreenStyles.content}>
        <Text style={FeedScreenStyles.textNoEvent}>
          {translate('FeedScreenEmpty.FeedScreenTextNoEvent')}
        </Text>
        <Text style={FeedScreenStyles.textCreate}>
          {translate('FeedScreenEmpty.FeedScreenTextCreate')}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default FeedScreen;
