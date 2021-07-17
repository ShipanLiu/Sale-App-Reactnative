import React from 'react';
import {View, Text} from 'react-native';
import Try1 from './Try1';
import Try2 from './Try2-exercise';

export default function App() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {/* <Try1 /> */}
      <Try2 />
    </View>
  );
}
