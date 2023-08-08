import React from 'react';
import {Image, TextInput, View} from 'react-native';
import {inputStyles} from './style';

// import { Container } from './styles';

const InputCustom = props => {
  const {icon, placeholder, onChangeText, value} = props;
  return (
    <View style={inputStyles.inputContainer}>
      <View style={inputStyles.iconContainer}>
        <Image source={icon} style={inputStyles.icon}></Image>
      </View>
      <TextInput
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={inputStyles.textInput}></TextInput>
    </View>
  );
};

export default InputCustom;
