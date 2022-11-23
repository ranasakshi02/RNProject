import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import CustomImageComponent from '../../components/CustomImageComponent';
import {
  GET_USER_DETAILS,
  LOGOUT,
  REQUEST,
  TOGGLE_THEME,
} from '../../models/Actions/Actions';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import ToggleSwitch from 'toggle-switch-react-native';
const mapStateToProps = state => {
  return {state};
};
const mapDispatchToProps = dispatch => ({
  getUserDetails: (uid, Token, callback) => {
    dispatch({
      type: `${GET_USER_DETAILS}_${REQUEST}`,
      uid,
      Token,
      callback,
    });
  },
  logout: callback => {
    dispatch({
      type: `${LOGOUT}_${REQUEST}`,
      callback,
    });
  },
  toggleTheme: (isDark, callback) => {
    dispatch({
      type: `${TOGGLE_THEME}_${REQUEST}`,
      isDark,
      callback,
    });
  },
});
const SettingScreen = ({
  getUserDetails,
  state,
  logout,
  navigation,
  toggleTheme,
}) => {
  const [loginUserData, setloginUserData] = useState({});

  const nav = useNavigation();
  let {Id, Token} = state?.AuthReducer;
  let {isDark} = state?.ThemeReducer;
  const apiHelper = () => {
    getUserDetails(Id, Token, res => setloginUserData(res));
  };
  useEffect(() => {
    apiHelper();
  }, []);

  const onPressLogout = () => {
    logout(() => {
      navigation.navigate('AuthRoute', {screen: 'SignIn'});
    });
  };
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            marginEnd: 10,
            alignItems: 'center',
          }}
          onPress={() => onPressLogout()}>
          <Image
            source={require('../../../assets/images/logout.png')}
            style={styles.image}
          />
        </TouchableOpacity>
      ),
    });
  }, []);

  const onPressToggle = isOn => {
    toggleTheme(isOn, res => {});
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <CustomImageComponent source={loginUserData?.profilepicture} />
        <Text style={styles.textstyle}>{loginUserData?.name}</Text>
        <View style={{marginTop: '10%'}}>
          <ToggleSwitch
            isOn={isDark}
            onColor="green"
            offColor="grey"
            label="Dark Theme"
            labelStyle={styles.toggleSwitchLabel(isDark)}
            size="medium"
            onToggle={isOn => onPressToggle(isOn)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const connectComponent = connect(mapStateToProps, mapDispatchToProps);
export default connectComponent(SettingScreen);
