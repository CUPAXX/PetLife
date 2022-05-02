import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Color from './themes/Color';

const Header = ({navigation, scene}) => {
  return (
    <React.Fragment>
      <View style={style.header}>
        <TouchableOpacity>
          <Icon name="chevron-left" size={23} color={Color.GreyDark} />
        </TouchableOpacity>
        <Text style={style.route}>{scene.route.name}</Text>
      </View>
    </React.Fragment>
  );
};

const style = StyleSheet.create({
  header: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  route: {
    color: 'black',
    fontFamily: 'Raleway-Bold',
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
  },
});

export default Header;
