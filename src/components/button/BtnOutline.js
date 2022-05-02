import {Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';

function Outline({title, onPress, colorText, borderColor}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, {borderColor: borderColor}]}>
      <Text style={[styles.buttonText, {color: colorText}]}>{title}</Text>
    </TouchableOpacity>
  );
}

function OutlineIcon({title, icon, onPress, colorText, borderColor}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.buttonIcon, {borderColor: borderColor}]}>
      <Image source={icon} style={styles.icon} />
      <Text style={[styles.buttonTextIcon, {color: colorText}]}>{title}</Text>
    </TouchableOpacity>
  );
}

const BtnOutline = {
  Outline,
  OutlineIcon,
};

export default BtnOutline;

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 30,
    marginVertical: 10,
  },
  buttonText: {
    fontFamily: 'Raleway-Bold',
    fontSize: 18,
  },
  buttonIcon: {
    borderWidth: 2,
    paddingVertical: 15,
    borderRadius: 30,
    marginVertical: 10,
    flexDirection: 'row',
  },
  buttonTextIcon: {
    fontFamily: 'Raleway-Bold',
    fontSize: 18,
    flex: 1,
    marginLeft: -35,
    textAlign: 'center',
  },
  icon: {
    marginLeft: 20,
    width: 25,
    height: 25,
  },
});
