import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import EditEntryScreen from '../screens/EditEntryScreen';
import AddEntryScreen from '../screens/AddEntryScreen';

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={TabNavigator} />
      <Stack.Screen name="Edit Entry" component={EditEntryScreen} />
      <Stack.Screen name="Add Entry" component={AddEntryScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigator;