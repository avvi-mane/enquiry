import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {stringToColour} from '../config/util';

const styles = StyleSheet.create({
  avatarWarpper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 50,
    margin: 16,
  },
  avatarText: {color: '#FFF'},
});

export const Avatar = ({children}) => {
  return (
    <View
      style={{
        ...styles.avatarWarpper,
        ...{backgroundColor: stringToColour(children)},
      }}>
      <Text style={styles.avatarText}>{children?.substr(0, 1)}</Text>
    </View>
  );
};
