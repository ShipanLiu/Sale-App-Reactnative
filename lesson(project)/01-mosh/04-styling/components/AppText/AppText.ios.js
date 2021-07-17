//  因为style 没有继承性。 如何保证所有的 style都一样
//   所以写一个text 的高阶组件.  use Platform.select 选择组件

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function AppText({children}) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: 'tomato',
    fontSize: 20,
    fontFamily: 'Avenir',
  },
});
