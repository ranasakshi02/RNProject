import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import data from '../../dummyData/UserList.json';
import UserListItem from '../../components/CustomCardComponents/UserListItem';
import { PRIMARY_COLOR } from '../../utils/ColorConstants';
const DashBoardScreen = () => {
  //   var data = ['1', '1', '1', '1', '1', '1', '1', '1'];
  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar backgroundColor={PRIMARY_COLOR} barStyle="dark-content" />
      <Text style={styles.textstyle}>User List</Text>
      <FlatList data={data} renderItem={item => <UserListItem item={item} />} />
    </SafeAreaView>
  );
};

export default DashBoardScreen;
