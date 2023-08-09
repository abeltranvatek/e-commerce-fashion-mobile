import React from 'react';
import {View} from 'react-native';
import {InputRangeStyles} from './style';
import Animated, {
  useAnimatedStyle,
  useAnimatedGestureHandler,
  useSharedValue,
} from 'react-native-reanimated';
import {PanGestureHandler} from 'react-native-gesture-handler';

const styline = useAnimatedStyle(() => {
  return {
    backgroundColor: ' #F67952',
    height: 3,
    marginTop: -3,
    borderRadius: 3,
  };
});
const xkonb1 = useSharedValue(0);
const gestureHandle1 = useAnimatedGestureHandler({
  onStart: (_, ctx) => {
    ctx.startX = xkonb1.value;
  },
  onActive: (e, ctx) => {
    xkonb1.value =
      e.translationX + ctx.startX < 0 ? 0 : e.translationX + ctx.startX;
  },
  onEnd: () => {},
});
const styleKnob1 = useAnimatedStyle(() => {
  return {
    transform: [{translateX: xkonb1.value}],
  };
});
const InputRange = props => {
  const {min, max} = props;
  return (
    <View style={InputRangeStyles.container}>
      <View style={InputRangeStyles.priceContainer}>
        <Text style={InputRangeStyles.priceText}>
          {translate('FilterScreen.FilterScreenTextPrice')}
        </Text>
        <Text style={InputRangeStyles.priceSelect}>{'$50-$200'}</Text>
      </View>
      <View style={InputRangeStyles.lableContainer}>
        <Text>{min}</Text>
        <Text>{max}</Text>
      </View>
      <View style={InputRangeStyles.track}></View>
      <Animated.View style={styline}></Animated.View>
      <View>
        <PanGestureHandler onGestureEvent={gestureHandle1}>
          <Animated.View
            style={[InputRangeStyles.knob, styleKnob1]}></Animated.View>
        </PanGestureHandler>
      </View>
    </View>
  );
};

export default InputRange;
