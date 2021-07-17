import React from 'react';
import {View, Text} from 'react-native';

export default function Lesson2() {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        alignContent: 'center', // alignContent only works with wrapping
        flexWrap: 'wrap',
      }}>
      <View
        style={{
          backgroundColor: 'dodgerblue',
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: 'pink',
          flexBasis: 100, // same as width or height
          flexGrow: 1, // like flex: 1
          // width: 100,
          height: 100,
          // alignSelf: 'flex-start',
        }}
      />
      <View
        style={{
          backgroundColor: 'yellow',
          width: 100,
          height: 100,
          position: 'absolute',
          left: 20,
          top: 20, // doesn't work
          // flexShrink: 1,  // like flex: -1  even though with huge width let other boxes show o the screen.
        }}
      />
      <View style={{backgroundColor: 'red', width: 100, height: 100}} />
      <View style={{backgroundColor: 'red', width: 100, height: 100}} />
    </View>
  );
}
