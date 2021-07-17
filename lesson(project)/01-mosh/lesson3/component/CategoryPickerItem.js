/*
  CategoryPickerItem 是 DIY 种类的 PickerItem
*/

import React from 'react';
import {View, Text} from 'react-native';
import styles from '../config/styles';
import AppIcon from './AppIcon';
import AppText from './AppText';

export default function CategoryPickerItem({item, onPress}) {
  return (
    <View style={styles.container}>
      <AppIcon
        backgroundColor={item.backgroundColor}
        name={item.icon}
        size={80}
      />
      <AppText>{item.label}</AppText>
    </View>
  );
}
