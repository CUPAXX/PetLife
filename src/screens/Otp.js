/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {showMessage} from 'react-native-flash-message';
import {isEmpty} from 'lodash';
import OpenCall from '../helpers/OpenCall';

import BtnNoOutline from '../components/button/BtnNoOutline';
import InputOutline from '../components/input/InputOutline';
import Color from '../components/themes/Color';

const dummyOtp = [
  {
    phone: '+6289636597045',
    otp: '123456',
  },
  {
    phone: '+6285266724523',
    otp: '654321',
  },
  {
    phone: '+6289636597044',
    otp: '123456',
  },
  {
    phone: '+6285266724524',
    otp: '654321',
  },
];

export default function Otp({navigation, route}) {
  const {phoneNumber, type} = route.params;
  const [otpCode, setOtpCode] = useState('');
  const [errMsg, setErrMsg] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    setTimeout(() => {
      setIsWaiting(true);
    }, 60000);
    StartCountdown();
  }, []);

  const StartCountdown = () => {
    let interval = setInterval(() => {
      setTimer(lastTimerCount => {
        lastTimerCount === 1 && clearInterval(interval);
        return lastTimerCount - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  };

  const OnSubmit = () => {
    if (!isEmpty(otpCode)) {
      const findOtp = dummyOtp.find(
        item => item.phone === phoneNumber && item.otp === otpCode,
      );
      if (findOtp) {
        showMessage({
          message: `${type} Success`,
          type: 'default',
          backgroundColor: type === 'Log In' ? Color.GreenDark : 'white',
          color: type === 'Log In' ? 'white' : Color.GreenDark,
        });
        if (type === 'Log In') {
          navigation.navigate('Home');
        } else {
          navigation.navigate('Landing Page');
        }
      } else {
        showMessage({
          message: `${type} Failed "Wrong OTP"`,
          type: 'default',
          backgroundColor: Color.RedDark,
          color: 'white',
        });
        setErrMsg(true);
      }
    }
  };

  const handleChangeOtp = value => {
    setOtpCode(value);
    setErrMsg(false);
  };

  const onResend = () => {
    setTimer(30);
    StartCountdown();
    showMessage({
      message: 'New OTP has been send',
      type: 'default',
      backgroundColor: Color.GreenDark,
      color: 'white',
    });
  };

  const onCall = () => {
    OpenCall('089636597045');
  };

  return (
    <View style={styles.container}>
      <View style={styles.parentTagline}>
        <Text style={styles.route}>{type}</Text>
      </View>
      <View style={styles.parentTop}>
        <View style={styles.parentInput}>
          <InputOutline.Underline
            value={otpCode}
            onChangeText={value => handleChangeOtp(value)}
            type="numeric"
            onFocus={() => setErrMsg(false)}
            placeHolder="Enter OTP Code"
            borderBottomColor={errMsg ? Color.RedDark : Color.GreyDark}
            colorText={errMsg ? Color.RedDark : 'black'}
          />
        </View>
      </View>
      <TouchableOpacity disabled={timer > 0} onPress={onResend}>
        <Text
          style={[
            styles.textResend,

            errMsg ? {marginBottom: 0} : {marginBottom: 60},
          ]}>
          {`Send OTP code again ${timer}`}
        </Text>
      </TouchableOpacity>
      <View style={styles.parentLogin}>
        <BtnNoOutline.Main
          title={type}
          onPress={OnSubmit}
          colorText={isEmpty(otpCode) ? Color.GreenDark : 'white'}
          backgroundColor={
            !isEmpty(otpCode) ? Color.GreenDark : Color.GreenLight
          }
          disabled={isEmpty(otpCode) ? true : false}
        />
      </View>
      <Text
        style={[styles.textBottom, isWaiting ? {opacity: 100} : {opacity: 0}]}>
        Code problem?
      </Text>
      <TouchableOpacity onPress={onCall}>
        <Text
          style={[
            styles.textContact,
            isWaiting ? {opacity: 100} : {opacity: 0},
          ]}>
          Contact technical support
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: 25,
    marginVertical: 40,
  },
  parentTagline: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    justifyContent: 'space-between',
  },
  route: {
    fontSize: 30,
    fontFamily: 'Raleway-Bold',
  },
  parentInput: {
    width: '100%',
  },
  parentTop: {
    flexDirection: 'row',
    marginTop: 20,
  },
  parentLogin: {
    marginVertical: 25,
  },
  textResend: {
    fontFamily: 'Raleway-SemiBold',
    fontSize: 15,
    color: Color.GreyDark,
    textAlign: 'center',
    marginTop: 30,
  },
  textBottom: {
    fontFamily: 'Raleway-SemiBold',
    fontSize: 15,
    color: Color.GreyDark,
    textAlign: 'center',
    marginTop: -5,
  },
  textContact: {
    fontFamily: 'Raleway-SemiBold',
    color: Color.GreenDark,
    marginTop: 15,
    textAlign: 'center',
    fontSize: 17,
  },
});
