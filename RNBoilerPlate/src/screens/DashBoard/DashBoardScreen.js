import {
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from './styles';
import data from '../../dummyData/UserList.json';
import UserListItem from '../../components/CustomCardComponents/UserListItem';
import {Color, PRIMARY_COLOR} from '../../utils/ColorConstants';
import {LOGOUT, REQUEST} from '../../models/Actions/Actions';
import { connect } from 'react-redux';
const mapStateToProps = state => {
  console.log(state);

  return {state};
};
const mapDispatchToProps = dispatch => ({
  logout: callback => {
    dispatch({
      type: `${LOGOUT}_${REQUEST}`,
      callback,
    });
  },
});

const DashBoardScreen = ({navigation, logout}) => {
  //   var data = ['1', '1', '1', '1', '1', '1', '1', '1'];
  const onPressLogout = () => {
    logout(() => {
      navigation.replace('AuthRoute', {screen: 'SignIn'});
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
  }, [navigation]);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar
        backgroundColor={Color.PRIMARY_COLOR}
        barStyle="dark-content"
      />
      <Text style={styles.textstyle}>User List</Text>
      <FlatList data={data} renderItem={item => <UserListItem item={item} />} />
    </SafeAreaView>
  );
};

const connectComponent = connect(mapStateToProps, mapDispatchToProps);
export default connectComponent(DashBoardScreen);
