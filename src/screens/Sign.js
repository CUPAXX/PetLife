/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {showMessage} from 'react-native-flash-message';
import {useFormik} from 'formik';

import AuthValidator from '../helpers/validation/AuthForm';

import BtnOutline from '../components/button/BtnOutline';
import BtnNoOutline from '../components/button/BtnNoOutline';
import InputOutline from '../components/input/InputOutline';
import Icons from '../components/themes/Icons';
import Color from '../components/themes/Color';
import {isEmpty} from 'lodash';

const PhoneCode = [
  {
    label: '+62',
    value: '+62',
  },
  {
    label: '+21',
    value: '+21',
  },
  {
    label: '+11',
    value: '+11',
  },
  {
    label: '+933',
    value: '+933',
  },
];

const dummyLogin = [
  {
    phone: '+6289636597045',
  },
  {
    phone: '+6285266724523',
  },
  {
    phone: '+2189636597045',
  },
  {
    phone: '+933123123123',
  },
];

export default function Sign({navigation, route}) {
  const {type} = route.params;
  const [openPicker, setOpenPicker] = useState(false);
  const [pickerValue, setPickerValue] = useState('+62');
  const [pickerItem, setPickerItem] = useState(PhoneCode);
  const [onFocusValue, setOnFocusValue] = useState(false);
  const [errMsg, setErrMsg] = useState(false);

  const formik = useFormik({
    validateOnChange: true,
    validationSchema: AuthValidator.Login,
    initialValues: {phoneNumber: ''},
    onSubmit: value => {
      if (type === 'Log In') {
        onLogin(value);
      } else {
        onSignup(value);
      }
    },
  });

  const onLogin = values => {
    const finalData = {
      phone: '',
    };

    if (values.phoneNumber.charAt(0) === '0') {
      const newValue = values.phoneNumber.slice(1);
      Object.assign(finalData, {phone: `${pickerValue}${newValue}`});
    } else {
      Object.assign(finalData, {phone: `${pickerValue}${values.phoneNumber}`});
    }

    if (!isEmpty(finalData.phone)) {
      const findLogin = dummyLogin.find(res => {
        return res.phone === finalData.phone;
      });
      if (findLogin) {
        showMessage({
          message: `Verification code sent to ${finalData.phone}`,
          type: 'default',
          backgroundColor: Color.GreenDark,
          color: 'white',
        });
        navigation.navigate('Otp', {phoneNumber: finalData.phone, type: type});
      } else {
        showMessage({
          message: 'Login Failed "Phone Number Not Found"',
          type: 'default',
          backgroundColor: Color.RedDark,
          color: 'white',
        });
        setErrMsg(true);
      }
    }
  };

  const onSignup = values => {
    const finalData = {
      phone: '',
    };

    if (values.phoneNumber.charAt(0) === '0') {
      const newValue = values.phoneNumber.slice(1);
      Object.assign(finalData, {phone: `${pickerValue}${newValue}`});
    } else {
      Object.assign(finalData, {phone: `${pickerValue}${values.phoneNumber}`});
    }

    if (!isEmpty(finalData.phone)) {
      const findSignup = dummyLogin.find(res => {
        return res.phone === finalData.phone;
      });
      if (!findSignup) {
        showMessage({
          message: `Verification code sent to ${finalData.phone}`,
          type: 'default',
          backgroundColor: Color.GreenDark,
          color: 'white',
        });
        navigation.navigate('Otp', {phoneNumber: finalData.phone, type: type});
      } else {
        showMessage({
          message: 'Sign Up Failed "Phone Number Already Exist"',
          type: 'default',
          backgroundColor: Color.RedDark,
          color: 'white',
        });
        setErrMsg(true);
      }
    }
  };

  const onInputFocus = () => {
    setOnFocusValue(true);
  };
  const onInputBlur = () => {
    setOnFocusValue(false);
  };

  const handleChangePhone = value => {
    formik.setFieldValue('phoneNumber', value);
    setErrMsg(false);
  };

  return (
    <View style={styles.container}>
      <React.Fragment>
        <View style={styles.parentTagline}>
          <Text style={styles.route}>{type}</Text>
          {formik.errors.phoneNumber && (
            <Text style={styles.errmsg}>{formik.errors.phoneNumber}</Text>
          )}
        </View>
        <View style={styles.parentTop}>
          <View style={styles.parentPicker}>
            <DropDownPicker
              open={openPicker}
              value={pickerValue}
              items={pickerItem}
              setOpen={setOpenPicker}
              setValue={setPickerValue}
              setItems={setPickerItem}
              style={styles.picker}
            />
          </View>
          <View style={styles.parentInput}>
            <InputOutline.Underline
              value={formik.values.phoneNumber}
              placeHolder={'Phone Number'}
              onChangeText={value => handleChangePhone(value)}
              onFocus={onInputFocus}
              onBlur={onInputBlur}
              type="numeric"
              borderBottomColor={errMsg ? Color.RedDark : Color.GreyDark}
              colorText={errMsg ? Color.RedDark : 'black'}
            />
          </View>
        </View>
        <View style={styles.parentLogin}>
          <BtnNoOutline.Main
            title={type}
            onPress={formik.handleSubmit}
            colorText={formik.isValid ? 'white' : Color.GreenDark}
            backgroundColor={
              !formik.isValid ? Color.GreenLight : Color.GreenDark
            }
            disabled={!formik.isValid}
          />
        </View>
      </React.Fragment>
      <View
        style={[
          styles.parentOr,
          onFocusValue ? {marginTop: 100} : {marginTop: 0},
        ]}>
        <View style={styles.line} />
        <Text style={styles.textOr}>or</Text>
        <View style={styles.line} />
      </View>
      <View style={styles.parentBot}>
        <BtnOutline.OutlineIcon
          icon={Icons.google}
          title="Google"
          colorText="black"
          borderColor="black"
        />
        <BtnOutline.OutlineIcon icon={Icons.facebook} title="Facebook" />
      </View>
      <TouchableOpacity>
        <Text style={styles.textSkip}>Skip</Text>
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
  errmsg: {
    fontSize: 15,
    fontFamily: 'Raleway-semiBold',
    color: Color.Red,
  },
  route: {
    fontSize: 30,
    fontFamily: 'Raleway-Bold',
  },
  parentPicker: {
    width: '25%',
    marginRight: 20,
  },
  picker: {
    borderWidth: 0,
    backgroundColor: Color.Grey,
    borderRadius: 100,
  },
  parentInput: {
    width: '65%',
  },
  parentTop: {
    flexDirection: 'row',
    marginTop: 20,
  },
  parentLogin: {
    marginVertical: 25,
  },
  parentOr: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    borderBottomWidth: 2,
    borderColor: Color.GreyMedium,
    width: '30%',
  },
  textOr: {
    paddingHorizontal: 10,
    marginTop: -8,
    fontSize: 18,
    fontFamily: 'Raleway-Bold',
    color: Color.GreyDark,
  },
  parentBot: {
    marginTop: 40,
    width: '100%',
  },
  textSkip: {
    fontFamily: 'Raleway-SemiBold',
    fontSize: 15,
    color: Color.GreyDark,
    textAlign: 'center',
    marginTop: 30,
  },
});
