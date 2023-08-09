import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {InputRangeStyles} from './style';

const RangeSlider = () => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(100);

  const handleMinValueChange = value => {
    setMinValue(value);
  };

  const handleMaxValueChange = value => {
    setMaxValue(value);
  };

  return (
    <View style={InputRangeStyles.container}>
      <Text style={InputRangeStyles.caption}>
        Min Value: {minValue} Max Value: {maxValue}
      </Text>

      <View style={InputRangeStyles.sliderContainer}>
        <TouchableOpacity
          style={[InputRangeStyles.rangeThumb, {left: minValue + '%'}]}
          onPress={() => console.log('Min Thumb Pressed')}
        />
        <TouchableOpacity
          style={[InputRangeStyles.rangeThumb, {left: maxValue + '%'}]}
          onPress={() => console.log('Max Thumb Pressed')}
        />
        <View
          style={[
            InputRangeStyles.rangeTrack,
            {left: minValue + '%', width: maxValue - minValue + '%'},
          ]}
        />
      </View>
    </View>
  );
};

export default RangeSlider;
