import React from 'react';
import {View, Text} from 'react-native';

import AppButton from './components/AppButton';

export default function Try2() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <AppButton
        styleText={{color: 'black'}}
        styleButton={{width: 200}}
        title="login"
        onPress={() => console.log('jibs')}
      />
    </View>
  );
}
