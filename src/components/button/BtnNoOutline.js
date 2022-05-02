import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

function Main({title, onPress, colorText, backgroundColor, disabled}) {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: backgroundColor}]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={[styles.buttonText, {color: colorText}]}>{title}</Text>
    </TouchableOpacity>
  );
}

const BtnOutline = {
  Main,
};

export default BtnOutline;

const styles = StyleSheet.create({
  button: {
    width: '100%',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Raleway-Bold',
    fontSize: 18,
  },
});
