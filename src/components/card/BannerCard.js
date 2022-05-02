import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import React from 'react';

import Color from '../themes/Color';

function BannerSlider({onPress, title, date, disc, image}) {
  return (
    <TouchableOpacity onPress={onPress} style={style.parentImage}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        imageStyle={style.imageStyle}
        style={style.image}>
        <View style={style.parentTextImage}>
          <Text style={style.text}>{title}</Text>
          <Text style={style.date}>{date}</Text>
          <View style={style.bgTextDisc}>
            <Text style={style.textDisc}>{disc}%</Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const BannerCard = {
  BannerSlider,
};

export default BannerCard;

const style = StyleSheet.create({
  parentImage: {
    borderRadius: 35,
    overflow: 'hidden',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 200,
  },
  parentTextImage: {
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    borderTopRightRadius: 150,
    borderBottomRightRadius: 150,
    marginTop: -55,
    justifyContent: 'center',
    height: '150%',
    width: '55%',
    paddingHorizontal: 30,
  },
  text: {
    fontFamily: 'Raleway-ExtraBold',
    fontSize: 35,
    lineHeight: 35,
    textTransform: 'uppercase',
  },
  textDisc: {
    fontFamily: 'Raleway-Bold',
    fontSize: 25,
    color: 'white',
    marginTop: -10,
  },
  bgTextDisc: {
    backgroundColor: Color.GreenDark,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 40,
    marginTop: 10,
    marginLeft: -15,
  },
  date: {
    fontFamily: 'Raleway-SemiBold',
    color: Color.GreyDark,
  },
});
