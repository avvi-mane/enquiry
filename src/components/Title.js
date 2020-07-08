// @flow

import React from 'react';
import {Text, StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

type Props = {
  children: React$Node,
};

const Title: (Props) => React$Node = ({children}) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;
