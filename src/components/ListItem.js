import React from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import {timeSince, getDateObject, callUser} from '../config/util';
import PhoneIcon from './svg/PhoneIcon';
import IconButton from './IconButton';
import {Avatar} from './Avatar';
import Title from './Title';

const styles = StyleSheet.create({
  itemWrapper: {
    backgroundColor: '#fff',
    borderBottomColor: 'rgba(0,0,0, .2)',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  infoWrapper: {marginVertical: 16, flex: 1},
  actionWrapper: {margin: 16, minWidth: 100},
});

const ListItem = ({data, onPress}) => {
  const {
    name,
    postedOn,
    categoryName,
    location,
    classLocPref,
    phoneNumber,
  } = data;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.itemWrapper}>
        <Avatar>{name}</Avatar>
        <View style={styles.infoWrapper}>
          <Title>{name}</Title>
          <Text>{categoryName}</Text>
          <Text>{location}</Text>
          <Text>{classLocPref}</Text>
        </View>
        <View style={styles.actionWrapper}>
          <Text>{timeSince(getDateObject(postedOn))} ago</Text>
          <IconButton onPress={callUser(phoneNumber)}>
            <PhoneIcon width="32" height="32" />
          </IconButton>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
