import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 50,
    margin: 16,
  },
});

const IconButton = ({children, onPress}) => (
  <TouchableOpacity style={styles.wrapper} onPress={onPress}>
    {children}
  </TouchableOpacity>
);

export default IconButton;
