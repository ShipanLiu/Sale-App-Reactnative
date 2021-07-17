import React from 'react';
import {View, Text} from 'react-native';
//  会自动检测 到 AppText.android.js  or  AppText.ios.js
import AppText from './components/AppText/AppText';

export default function Try1() {
  return (
    // <View
    //   style={{
    //     // @@@ borders
    //     backgroundColor: 'pink',
    //     width: 100,
    //     height: 100,
    //     borderWidth: 10,
    //     borderColor: 'royalblue',
    //     borderRadius: 50,

    //     // @@@  shadows
    //     //ios:
    //     shadowColor: 'grey',
    //     shadowOffset: {width: 10, height: 10},
    //     shadowOpacity: 0.7,
    //     shadowradius: 10,
    //     // android
    //     elevation: 20,

    //     // @@@ paddings and Margins

    //     // paddingHorizontal: 10,
    //     // paddingVertical: 10
    //   }}></View>

    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {/* <Text
        style={{
          // @@@ text
          // sometimes doen't work for ios
          // fontFamily: 'Roboto',
          fontSize: 30,
          fontStyle: 'italic',
          fontWeight: '600',
          color: 'tomato',
          textTransform: 'capitalize',
          textAlign: 'center',
          lineHeight: 30,
        }}>
        I love React Native
      </Text> */}
      {/* HOC text  */}
      <AppText>here is HOC Text</AppText>
    </View>
  );
}
