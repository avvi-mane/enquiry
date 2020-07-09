// @flow

import React from 'react';
import {connect} from 'react-redux';
import {View, Text, StyleSheet} from 'react-native';
import {callUser} from '../../config/util';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import IconButton from '../IconButton';
import PhoneIcon from '../svg/PhoneIcon';
import {Avatar} from '../Avatar';
import Title from '../Title';
import stringify from 'json-stable-stringify';
const styles = StyleSheet.create({
  container: {flex: 1},
  itemWrapper: {
    backgroundColor: '#d4b5b0',
    borderBottomColor: 'rgba(0,0,0, .2)',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  listItemWrapper: {
    backgroundColor: '#fff',
    borderBottomColor: 'rgba(0,0,0, .2)',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 16,
  },
  infoWrapper: {marginVertical: 16, flex: 1, justifyContent: 'center'},
  actionWrapper: {margin: 16, flex: 1},
});

type Item = {
  enqId: number,
  name: string,
  isStarted: Boolean,
  phoneNumber: stringify,
  isFree: boolean,
  categoryName: string,
  classLocPref: string,
  createdOn: string,
  location: string,
  postedOn: string,
  providerType: string,
  tag: string,
};

type Props = {
  item: Item,
};

const EnquiryDetailsScreen: (Props) => React$Node = (props) => {
  const {item} = props;
  const {name, enqId, isStarted, phoneNumber, isFree} = item;
  const displayData = [
    {name: 'location', value: 'Location'},
    {name: 'categoryName', value: 'Category'},
    {name: 'classLocPref', value: 'Class Location Preference'},
    {name: 'createdOn', value: 'Created On'},
    {name: 'postedOn', value: 'Posted On'},
    {name: 'providerType', value: 'Provider'},
    {name: 'tag', value: 'Tag'},
  ];
  return (
    <View style={styles.container}>
      <View style={styles.itemWrapper}>
        <Avatar>{name}</Avatar>
        <View style={styles.infoWrapper}>
          <Title>{name}</Title>
        </View>
      </View>
      <View style={styles.itemWrapper}>
        <View style={styles.actionWrapper}>
          <Title>Enquiry Id: {enqId}</Title>
          <Text>{isStarted ? '' : 'Not'} Started</Text>
          <Text>{isFree ? 'Free' : 'Paid'}</Text>
        </View>
        <IconButton onPress={callUser(phoneNumber)}>
          <PhoneIcon width={32} height={32} />
        </IconButton>
      </View>
      <ScrollView>
        <TouchableOpacity
          style={styles.listItemWrapper}
          onPress={callUser(phoneNumber)}>
          <View style={styles.infoWrapper}>
            <Title>Phone Number</Title>
            <Text>{phoneNumber}</Text>
          </View>
        </TouchableOpacity>
        {displayData.map(({name: key, value}) => (
          <View style={styles.listItemWrapper} key={key}>
            <View style={styles.infoWrapper}>
              <Title>{value}</Title>
              <Text>{item[key]}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    item: state?.enquiryReducer?.item,
  };
};

export default connect(mapStateToProps)(EnquiryDetailsScreen);
