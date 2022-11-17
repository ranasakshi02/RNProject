import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../../components/CustomInput';
import CustomButton from '../../../components/CustomButton';
import {styles} from './styles';
import {WHITE_COLOR} from '../../../utils/ColorConstants';
import {connect} from 'react-redux';

const mapStateToProps = state => {
  console.log(state);

  return {state};
};
const mapDispatchToProps = dispatch => ({
  // signIn: (payload, callback) => {
  //   dispatch({
  //     type: `${SIGN_IN}_${REQUEST}`,
  //     payload,
  //     callback,
  //   });
  // },
});
const SignUp = ({naviagtion}) => {
  const [userData, setuserData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const onPressSignUp = () => {
    console.log(userData);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar backgroundColor={WHITE_COLOR} barStyle="dark-content" />
      <View style={styles.container}>
        <Text style={styles.textstyle}>Sign Up</Text>

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
          lable="Sign Up"
          onPress={() => onPressSignUp()}
          activeOpacity={0.8}
          disabled={
            userData?.email && userData?.password && userData?.name
              ? false
              : true
          }
          opacity={
            userData?.email && userData?.password && userData?.name ? 1 : 0.8
          }
        />
        {/* <CustomButton
          lable="Sign In"
          onPress={() => onPressSignIn()}
          activeOpacity={0.8}
          disabled={userData?.email && userData?.password ? false : true}
          opacity={userData?.email && userData?.password ? 1 : 0.8}
        /> */}
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.signInTextStyle}>Already Have Account? SignIn</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const connectComponent = connect(mapStateToProps, mapDispatchToProps);
export default connectComponent(SignUp);
