// @flow

import {Platform, Linking, Alert} from 'react-native';

export const stringToColour: (string) => string = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    /*eslint-disable no-bitwise*/
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let colour = '#';
  for (let i = 0; i < 3; i++) {
    /*eslint-disable no-bitwise*/
    let value = (hash >> (i * 8)) & 0xff;
    colour += ('00' + value.toString(16)).substr(-2);
  }
  return colour;
};

export const timeSince: (Date) => string = (date) => {
  const seconds = Math.floor((new Date() - date) / 1000);

  let interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return interval + ' years';
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + ' months';
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + ' days';
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + ' hours';
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + ' minutes';
  }
  return Math.floor(seconds) + ' seconds';
};

export const getDateObject: (string) => Date = (strDate) => {
  const arrDate = strDate.split('/');
  return new Date(`${arrDate[2]}-${arrDate[1]}-${arrDate[0]}`);
};

export const callNumber: (string) => void = (phone) => {
  let phoneNumber = phone;
  if (Platform.OS !== 'android') {
    phoneNumber = `telprompt:${phone}`;
  } else {
    phoneNumber = `tel:${phone}`;
  }
  Linking.canOpenURL(phoneNumber)
    .then((supported) => {
      if (!supported) {
        Alert.alert(`Unable to call ${phone}`);
      } else {
        Linking.openURL(phoneNumber);
      }
    })
    .catch(console.log);
};

export const callUser: (string) => () => void = (phone) => () => {
  callNumber(phone);
};
