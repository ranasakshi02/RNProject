import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import UserListItem from '../../components/CustomCardComponents/UserListItem';
import {GET_USER_LIST, REQUEST} from '../../models/Actions/Actions';
import {connect} from 'react-redux';
import TextComponent from '../../components/TextComponent';
import { ColorFunc } from '../../utils/ColorConstants';
let countPage = 1;
const mapStateToProps = state => {
  return {state};
};
const mapDispatchToProps = dispatch => ({
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
  let isDark = state.ThemeReducer.isDark;
  var [userListData, setuserListData] = useState();
  const [count, setcount] = useState(-1);
  const onPressSettings = () => {
    navigation.navigate('SettingScreen');
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
          onPress={() => onPressSettings()}>
          <Image
            source={require('../../../assets/images/settings.png')}
            style={styles.image(ColorFunc().isDark)}
          />
        </TouchableOpacity>
      ),
    });
  }, []);
  useEffect(() => {
    userListData = [];
    countPage = 1;
    fetchUserData();
  }, [Token]);
  const fetchUserData = () => {
    getUserList(Token, countPage, res => {
      userListData = userListData.concat(res?.data);
      setuserListData(userListData);
      setcount(res?.totalrecord);
    });
  };

  // console.log('===', userListData);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <TextComponent style={styles.textstyle}>User List</TextComponent>
      <FlatList
        data={userListData}
        renderItem={item => <UserListItem item={item} isDark={isDark} />}
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
