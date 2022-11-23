import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TextComponent from '../TextComponent';
import {ColorFunc} from '../../utils/ColorConstants';

const UserListItem = ({item, isDark}) => {
  return (
    <View style={styles.listViewStyle(isDark)}>
      <View style={styles.containerView}>
        <View style={styles.imgView}>
          <Image
            source={{uri: item?.item?.profilepicture}}
            style={styles.img}
          />
        </View>
        <View style={styles.textView}>
          <TextComponent style={styles.listTextStyle}>
            {item?.item?.name}
          </TextComponent>
          <TextComponent style={styles.listTextStyle}>
            {item?.item?.email}
          </TextComponent>
          <TextComponent style={styles.listTextStyle}>
            {item?.item?.location}
          </TextComponent>
        </View>
      </View>
    </View>
  );
};

export default UserListItem;

const styles = StyleSheet.create({
  listViewStyle: isDark => ({
    borderRadius: 5,
    borderWidth: 1,
    marginHorizontal: 10,
    marginVertical: 10,
    borderColor: isDark ? ColorFunc().LBC : ColorFunc().LIGHT_GREY,
    backgroundColor: isDark ? ColorFunc().BLACK : ColorFunc().DIM_WHITE,
  }),
  listTextStyle: {
    marginStart: 7,
    fontSize: 15,
    fontWeight: '500',
    marginTop: 3,
  },
  imgView: {flex: 0.3, alignItems: 'center', marginTop: 3, marginBottom: 3},
  img: {height: 70, width: 70, borderRadius: 50},
  containerView: {flexDirection: 'row'},
  textView: {flex: 0.7},
});
