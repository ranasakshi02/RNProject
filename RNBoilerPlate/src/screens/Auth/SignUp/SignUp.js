import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import CustomInput from '../../../components/CustomInput';
import CustomButton from '../../../components/CustomButton';
import {styles} from './styles';

const SignUp = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar backgroundColor={'#fff'} barStyle="dark-content" />
      <View style={styles.container}>
        <Text style={styles.textstyle}>Sign Up</Text>

        <CustomInput placeholder="Enter Name" />
        <CustomInput placeholder="Enter Email" keyboardType={'email-address'} />
        <CustomInput placeholder="Enter Password" secureTextEntry={true} />
        <CustomButton
          lable="Sign Up"
          onPress={() => navigation.navigate('DashBoardScreen')}
          activeOpacity={0.8}
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.signInTextStyle}>Already Have Account? SignIn</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SignUp;
