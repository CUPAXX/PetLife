import {TextInput, StyleSheet} from 'react-native';
import React from 'react';

function Underline({
  value,
  onChangeText,
  onFocus,
  onBlur,
  type,
  borderBottomColor,
  placeHolder,
  colorText,
}) {
  return (
    <TextInput
      placeholder={placeHolder}
      value={value}
      onChangeText={onChangeText}
      onBlur={onBlur}
      onFocus={onFocus}
      keyboardType={type}
      style={[
        styles.input,
        {borderBottomColor: borderBottomColor},
        {color: colorText},
      ]}
    />
  );
}

const InputOutline = {
  Underline,
};

export default InputOutline;

const styles = StyleSheet.create({
  input: {
    fontSize: 20,
    fontFamily: 'Raleway-SemiBold',
    width: '100%',
    borderBottomWidth: 1,
  },
});
