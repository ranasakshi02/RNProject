import {SafeAreaView, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import CustomInput from '../../../components/CustomInput';
import CustomButton from '../../../components/CustomButton';
import TextComponent from '../../../components/TextComponent';
import {REQUEST, SIGN_IN} from '../../../models/Actions/Actions';
import {connect} from 'react-redux';
import {CommonActions} from '@react-navigation/native';

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
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: 'DashBoardScreen'}],
          }),
        );
      }
    });
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <TextComponent style={styles.textstyle}>Sign In</TextComponent>
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
          label="Sign In"
          onPress={() => onPressSignIn()}
          disabled={userData.email && userData.password ? false : true}
          opacity={userData.email && userData.password ? 1 : 0.5}
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <TextComponent style={styles.signInTextStyle} modify={true}>
          Don't Have Account? SignUp
        </TextComponent>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const connectComponent = connect(mapStateToProps, mapDispatchToProps);
export default connectComponent(SignIn);
