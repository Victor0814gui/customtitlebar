import * as React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/home-screen';
import { ListScreen } from '../screens/list-screen';
import { enableScreens } from "react-native-screens";


const UserStack = createNativeStackNavigator();

export function UserRoute() {
  enableScreens(true)
  return (
    <UserStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <UserStack.Screen name="Home" component={HomeScreen} />
      <UserStack.Screen name="List" component={ListScreen} />
    </UserStack.Navigator>
  );
}