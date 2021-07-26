/*
  bottom tabs  +  nesting navigators

*/

import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  createBottomTabNavigator,
  useNavigation,
  useRoute,
} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Detail1 = () => (
  <View>
    <Text>detail1</Text>
  </View>
);
const Detail2 = () => (
  <View>
    <Text>detail2</Text>
  </View>
);

const FeedNavigator = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="jiba3">
      <Stack.Screen name="detail1" component={Detail1} />
      <Stack.Screen name="detail2" component={Detail2} />
    </Stack.Navigator>
  );
};

const AccountNavigator = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="jiba3">
      <Stack.Screen name="detail1" component={Detail1} />
      <Stack.Screen name="detail2" component={Detail2} />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: 'tomato',
        activeTintColor: 'white',
        inactiveBackgroundColor: 'gray',
        inactiveTintColor: 'black',
      }}>
      <Tab.Screen
        name="Feed"
        component={FeedNavigator}
        options={{
          // {size} 是系统自动建议, color是根据tabBarOptions 来的。
          tabBarIcon: ({size, color}) => (
            <MIcon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen name="Account" component={AccountNavigator} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
