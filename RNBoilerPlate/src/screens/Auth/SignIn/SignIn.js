import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import CustomInput from '../../../components/CustomInput';
import CustomButton from '../../../components/CustomButton';

const SignIn = ({navigation}) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar backgroundColor={'#fff'} barStyle="dark-content" />
      <View style={styles.container}>
        <Text style={styles.textstyle}>Sign In</Text>
        <CustomInput placeholder="Enter Email" keyboardType={'email-address'} />
        <CustomInput placeholder="Enter Password" secureTextEntry={true} />
        <CustomButton
          lable="Sign In"
          onPress={() => navigation.navigate('DashBoardScreen')}
          activeOpacity={0.8}
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.signInTextStyle}>Don't Have Account? SignUp</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SignIn;
