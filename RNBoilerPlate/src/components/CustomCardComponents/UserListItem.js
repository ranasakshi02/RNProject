import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const UserListItem = ({item}) => {
  // "id": 1,
  // "name": "ashish thapliyal",
  // "email": "Ashulive6123@gmail.com",
  // "profilepicture": "https://www.adequatetravel.com/ATMultimedia/Images/1a30600f-3b07-4797-b883-981b455f2e84.png",
  // "location": "USA",
  // "createdat": "2020-04-26T12:21:05.7103885"
  return (
    <View style={styles.listViewStyle}>
      <View style={styles.containerView}>
        <View style={styles.imgView}>
          <Image
            source={{uri: item?.item?.profilepicture}}
            style={styles.img}
          />
        </View>
        <View style={styles.textView}>
          <Text style={styles.listTextStyle}>{item?.item?.name}</Text>
          <Text style={styles.listTextStyle}>{item?.item?.email}</Text>
          <Text style={styles.listTextStyle}>{item?.item?.location}</Text>
        </View>
      </View>
    </View>
  );
};

export default UserListItem;

const styles = StyleSheet.create({
  listViewStyle: {
    borderRadius: 5,
    borderWidth: 1,
    marginHorizontal: 10,
    marginVertical: 10,
    borderColor: '#c4c4c4',
    backgroundColor: '#FAFAFA',
  },
  listTextStyle: {
    marginStart: 7,
    color: '#4f4f4f',
    fontSize: 15,
    fontWeight: '500',
    marginTop: 3,
  },
  imgView: {flex: 0.3, alignItems: 'center', marginTop: 3, marginBottom: 3},
  img: {height: 70, width: 70, borderRadius: 50, backgroundColor: '#c4c4c4'},
  containerView: {flexDirection: 'row'},
  textView: {flex: 0.7},
});
