import React from 'react';
import {View, Text, Image, StyleSheet, Button} from 'react-native';
import NetInfo, {useNetInfo} from '@react-native-community/netinfo';

export default function NetInfo(props) {
  const netInfo = useNetInfo();
  console.log(netInfo);
  return (
    <Button
      title="mute if without internet"
      disabled={!netInfo.isInternetReachable}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
