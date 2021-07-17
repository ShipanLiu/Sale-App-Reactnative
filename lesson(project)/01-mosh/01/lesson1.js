import React from 'react';
import {
  View,
  Text,
  Image,
  Button,
  Alert,
  Platform,
  StyleSheet,
  Dimensions,
  StatusBar,
  SafeAreaView,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

// everytime rotate device, the App will be recalled
import {
  useDimensions,
  useDeviceOrientation,
} from '@react-native-community/hooks';

export default function App() {
  // console.log(Dimensions.get('screen'));
  // console.log(useDimensions());
  const {landscape} = useDeviceOrientation();

  const handlePress = () => {
    console.log('code with mosh');
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity>
        <Text numberOfLines={1} onPress={handlePress}>
          Hello React Native Hello React Native Hello React Native Hello React
          Native Hello React Native Hello React Native
        </Text>
      </TouchableOpacity>
      {/* <Image source={require('./assets/jiba.jpg')} /> */}
      <TouchableHighlight onPress={() => console.log('image tabbed')}>
        {/* 网络图片 */}
        <Image
          fadeDuration={2000}
          blurRadius={0}
          source={{
            uri: 'https://picsum.photos/200/300',
            width: 200,
            height: 300,
          }}
        />
      </TouchableHighlight>
      <TouchableNativeFeedback>
        <View
          style={{
            width: 200,
            height: 70,
            backgroundColor: 'dodgerblue',
          }}></View>
      </TouchableNativeFeedback>
      <Button
        color="orange"
        title="click me "
        onPress={() =>
          Alert.alert('hereis the title', 'here is the message', [
            {text: 'yes', onPress: () => console.log('yes')},
            {text: 'no', onPress: () => console.log('no'), style: 'cancel'},
          ])
        }></Button>
      <View
        style={{
          backgroundColor: 'green',
          width: '100%',
          height: landscape ? '100%' : '30%',
        }}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'hotpink',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
