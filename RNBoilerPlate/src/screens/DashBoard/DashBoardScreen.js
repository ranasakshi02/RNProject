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
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import data from '../../dummyData/UserList.json';
import UserListItem from '../../components/CustomCardComponents/UserListItem';
import {Color, PRIMARY_COLOR} from '../../utils/ColorConstants';
import {GET_USER_LIST, LOGOUT, REQUEST} from '../../models/Actions/Actions';
import {connect} from 'react-redux';
let countPage = 1;
const mapStateToProps = state => {
  return {state};
};
const mapDispatchToProps = dispatch => ({
  logout: callback => {
    dispatch({
      type: `${LOGOUT}_${REQUEST}`,
      callback,
    });
  },
  getUserList: (Token, page, callback) => {
    dispatch({
      type: `${GET_USER_LIST}_${REQUEST}`,
      Token,
      page,
      callback,
    });
  },
});

const DashBoardScreen = ({navigation, logout, getUserList, state}) => {
  let {Token} = state?.AuthReducer;
  var [userListData, setuserListData] = useState();

  const [count, setcount] = useState(-1);
  const onPressLogout = () => {
    // logout(() => {
    //   navigation.replace('SettingScreen');
    // });
    navigation.replace('SettingScreen');
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
            source={require('../../../assets/images/settings.png')}
            style={styles.image}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  const fetchUserData = () => {
    getUserList(Token, countPage, res => {
      userListData = userListData.concat(res?.data);
      setuserListData(userListData);
      setcount(res?.totalrecord);
    });
  };
  useEffect(() => {
    userListData = [];
    countPage = 1;
    fetchUserData();
  }, []);

  console.log('===', userListData);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar
        backgroundColor={Color.PRIMARY_COLOR}
        barStyle="dark-content"
      />
      <Text style={styles.textstyle}>User List</Text>
      <FlatList
        data={userListData}
        renderItem={item => <UserListItem item={item} />}
        onEndReached={() => {
          countPage++;
          if (count !== userListData?.length) {
            fetchUserData();
          }
        }}
      />
    </SafeAreaView>
  );
};

const connectComponent = connect(mapStateToProps, mapDispatchToProps);
export default connectComponent(DashBoardScreen);
