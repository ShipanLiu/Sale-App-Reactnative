import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import WelcomPage from './screen/WelcomePage';
import CardScreen from './screen/CardScreen';
import ListingDetailsScreen from './screen/ListingDetailsScreen';
import ViewImageScreen from './screen/ViewImageScreen';
import MessagesScreen from './screen/MessagesScreen';
import AccountScreen from './screen/AccountScreen';
import ListingScreen from './screen/ListingScreen';
import AppTextInput from './component/AppTextInput';
import AppPicker from './component/AppPicker';
import LoginScreen from './screen/LoginScreen';
import ListingEditScreen from './screen/ListingEditScreen';

const listData = [
  {label: 'Furniture', value: 1},
  {label: 'Clothing', value: 2},
  {label: 'Cameras', value: 3},
  {label: 'jibas', value: 4},
];
export default function App() {
  return (
    <View>
      <StatusBar backgroundColor="transparent" />
      {/* <WelcomPage /> */}
      {/* <CardScreen /> */}
      {/* <ListingDetailsScreen /> */}
      {/* <ViewImageScreen /> */}
      {/* <MessagesScreen /> */}
      {/* <AccountScreen /> */}
      {/* <ListingScreen /> */}
      {/* <AppTextInput placeholder="jiba" /> */}
      {/* <AppPicker
        items={listData}
        placeholder="jiba"
        icon="email"
        onSelectItem={selectedItem => console.log(selectedItem)}
      /> */}
      {/* <LoginScreen /> */}
      <ListingEditScreen />
    </View>
  );
}