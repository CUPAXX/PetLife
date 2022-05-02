import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Animated,
} from 'react-native';
import React, {useRef, useEffect} from 'react';

import BtnOutline from '../components/button/BtnOutline';
import BtnNoOutline from '../components/button/BtnNoOutline';
import Color from '../components/themes/Color';

const image = require('../assets/corgi.png');

const FadeInView = props => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2500,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnim,
      }}>
      {props.children}
    </Animated.View>
  );
};

export default function LandingPage({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.parentImage}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.parentText}>
        <Text style={styles.text}>PetLife</Text>
        <Text style={styles.subText}>All Your Pet Needed In Here !</Text>
      </View>
      <FadeInView style={styles.parentBtn}>
        <BtnOutline.Outline
          title="Sign Up"
          onPress={() => navigation.navigate('Sign', {type: 'Sign Up'})}
          colorText="white"
          borderColor="white"
        />
        <BtnNoOutline.Main
          title="Log In"
          onPress={() => navigation.navigate('Sign', {type: 'Log In'})}
          backgroundColor="white"
          colorText={Color.GreenDark}
        />
      </FadeInView>
      <FadeInView>
        <TouchableOpacity>
          <Text style={styles.textSkip}>Skip</Text>
        </TouchableOpacity>
      </FadeInView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Color.GreenDark,
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    overflow: 'hidden',
    backgroundColor: '#ffff',
  },
  parentImage: {
    margin: 50,
    width: 220,
    height: 220,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(206, 235, 219, 0.2)',
    borderRadius: 50,
  },
  parentText: {
    alignItems: 'center',
  },
  text: {
    fontSize: 50,
    letterSpacing: 3,
    color: '#ffff',
    fontFamily: 'Raleway-Black',
  },
  subText: {
    fontFamily: 'Raleway-SemiBold',
    color: '#ffff',
    fontSize: 15,
  },
  parentBtn: {
    marginTop: 50,
    width: '80%',
  },
  textSkip: {
    fontFamily: 'Raleway-SemiBold',
    fontSize: 15,
    color: '#ffff',
    marginTop: 20,
  },
});
