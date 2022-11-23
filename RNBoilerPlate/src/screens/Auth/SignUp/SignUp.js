import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../../components/CustomInput';
import CustomButton from '../../../components/CustomButton';
import {styles} from './styles';
import {connect} from 'react-redux';
import {REQUEST, SIGN_UP} from '../../../models/Actions/Actions';
import TextComponent from '../../../components/TextComponent';

const mapStateToProps = state => {
  return {state};
};
const mapDispatchToProps = dispatch => ({
  signUp: (payload, callback) => {
    dispatch({
      type: `${SIGN_UP}_${REQUEST}`,
      payload,
      callback,
    });
  },
});
const SignUp = ({navigation, signUp}) => {
  const [userData, setuserData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const onPressSignUp = () => {
    signUp(userData, res => {
      if (res?.code === 1) {
        alert(res?.message);
      } else {
        navigation.replace('AuthRoute', {screen: 'SignIn'});
      }
    });
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <TextComponent style={styles.textstyle}>Sign Up</TextComponent>

        <CustomInput
          placeholder="Enter Name"
          onChangeText={value => setuserData({...userData, name: value})}
        />
        <CustomInput
          placeholder="Enter Email"
          keyboardType={'email-address'}
          onChangeText={value => setuserData({...userData, email: value})}
        />
        <CustomInput
          placeholder="Enter Password"
          secureTextEntry={true}
          onChangeText={value => setuserData({...userData, password: value})}
        />
        <CustomButton
          label="Sign Up"
          onPress={() => onPressSignUp()}
          disabled={
            userData?.email && userData?.password && userData?.name
              ? false
              : true
          }
          opacity={
            userData?.email && userData?.password && userData?.name ? 1 : 0.5
          }
        />
        {/* <CustomButton
          label="Sign In"
          onPress={() => onPressSignIn()}
          activeOpacity={0.8}
          disabled={userData?.email && userData?.password ? false : true}
          opacity={userData?.email && userData?.password ? 1 : 0.8}
        /> */}
      </View>
      <TouchableOpacity onPress={() => navigation.replace('SignIn')}>
        <TextComponent style={styles.signInTextStyle} modify={true}>Already Have Account? SignIn</TextComponent>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const connectComponent = connect(mapStateToProps, mapDispatchToProps);
export default connectComponent(SignUp);
