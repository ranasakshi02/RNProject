import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import CustomInput from '../../../components/CustomInput';
import CustomButton from '../../../components/CustomButton';
import {BLACK_COLOR, Color, WHITE_COLOR} from '../../../utils/ColorConstants';
import {REQUEST, SIGN_IN} from '../../../models/Actions/Actions';
import {connect} from 'react-redux';

const mapStateToProps = state => {
  return {state};
};
const mapDispatchToProps = dispatch => ({
  signIn: (payload, callback) => {
    dispatch({
      type: `${SIGN_IN}_${REQUEST}`,
      payload,
      callback,
    });
  },
});

const SignIn = ({navigation, signIn}) => {
  const [userData, setuserData] = useState({
    email: '',
    password: '',
  });

  const onPressSignIn = () => {
    signIn(userData, res => {
      if (res?.code === 1) {
        alert(res?.message);
      } else {
        navigation.navigate('DashBoardScreen');
      }
    });
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.textstyle}>Sign In</Text>
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
          lable="Sign In"
          onPress={() => onPressSignIn()}
          disabled={userData.email && userData.password ? false : true}
          opacity={userData.email && userData.password ? 1 : 0.5}
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.signInTextStyle}>Don't Have Account? SignUp</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const connectComponent = connect(mapStateToProps, mapDispatchToProps);
export default connectComponent(SignIn);
