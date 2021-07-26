/*
  useNavigation + useRoute + setting headers

*/

import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {
  NavigationContainer,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const Jiba1 = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="jiba3">
      <Stack.Screen name="subjiba1" component={SubJiba1} />
      <Stack.Screen name="jiba3" component={Jiba3} />
    </Stack.Navigator>
  );
};

const Jiba2 = ({navigation}) => {
  const route = useRoute();
  console.log(route);
  return (
    <View style={styles.container}>
      <Button
        title="go to Jiba1"
        onPress={() => navigation.navigate('jiba1')}
      />
    </View>
  );
};

// jiba3 在 jiba1 下面
const Jiba3 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>jiba3</Text>
      <Button
        title="go to Jiba2"
        onPress={() => navigation.navigate('jiba2', {id: 3})}
      />
      <Button
        title="go to SubJiba1"
        onPress={() => navigation.navigate('subjiba1', {id: 3})}
      />
    </View>
  );
};

// SubJiba1 在 Jiba1下面
const SubJiba1 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>SubJiba1</Text>
      <Button
        title="go to Jiba2"
        onPress={() => navigation.navigate('jiba2', {id: 2})}
      />
    </View>
  );
};

export default function Learn01(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="jiba2"
        screenOptions={{
          headerStyle: {backgroundColor: 'tomato'},
          headerTintColor: '#fff',
        }}>
        <Stack.Screen
          name="jiba1"
          component={Jiba1}
          options={() => ({
            title: '几把1',
            // headerShown: false,
          })}
        />
        <Stack.Screen name="jiba2" component={Jiba2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
