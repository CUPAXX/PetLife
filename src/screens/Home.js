import {View, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome5';
import Color from '../components/themes/Color';
import BannerCard from '../components/card/BannerCard';
import ImageAsset from '../components/themes/ImageAsset';

export default function Home(props) {
  console.log(props);
  return (
    <View style={style.container}>
      <View style={style.parentSearch}>
        <TouchableOpacity>
          <Icon name="info-circle" size={24} color={Color.GreyDark} />
        </TouchableOpacity>
        <TouchableOpacity style={style.search}>
          <Icon name="search" size={20} color={'black'} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="phone" size={21} color={Color.GreyDark} />
        </TouchableOpacity>
      </View>
      <BannerCard.BannerSlider
        title="royal canin"
        date="30.01.22 - 12.05.22"
        disc="25"
        image={ImageAsset.cat2}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 25,
    backgroundColor: Color.GreyLight,
  },
  parentSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  search: {
    backgroundColor: 'white',
    flex: 1,
    marginHorizontal: 30,
    borderRadius: 100,
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'flex-end',
  },
});
