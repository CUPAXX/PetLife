import * as Yup from 'yup';

const Login = Yup.object().shape({
  phoneNumber: Yup.string()
    .matches(/^[0-9]+$/, ' Must be Only a Number')
    .min(10, ' At Least 10 Number')
    .max(13, ' Maximum 13 Number')
    .required('Phone Number is Required'),
});

const AuthValidator = {
  Login,
};

export default AuthValidator;
