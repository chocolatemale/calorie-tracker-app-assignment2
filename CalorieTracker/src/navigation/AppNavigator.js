import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AllEntriesScreen from '../screens/AllEntriesScreen';
import OverLimitEntriesScreen from '../screens/OverLimitEntriesScreen';
import AddEntryScreen from '../screens/AddEntryScreen';
import EditEntryScreen from '../screens/EditEntryScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const EntriesTabNavigator = ({ navigation }) => ( // Pass navigation as a prop
  <Tab.Navigator>
    <Tab.Screen
      name="All Entries"
      component={AllEntriesScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="coffee" size={size} color={color} />
        ),
        headerRight: () => (
          <TouchableOpacity
            style={{ marginRight: 15 }}
            onPress={() => navigation.navigate('AddEntry')} // Use the navigation prop here
          >
            <MaterialCommunityIcons name="plus" size={30} color="black" />
          </TouchableOpacity>
        ),
      }}
    />
    <Tab.Screen
      name="Over-limit Entries"
      component={OverLimitEntriesScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="exclamation" size={size} color={color} />
        ),
        headerRight: () => (
          <TouchableOpacity
            style={{ marginRight: 15 }}
            onPress={() => navigation.navigate('AddEntry')} // Use the navigation prop here
          >
            <MaterialCommunityIcons name="plus" size={30} color="black" />
          </TouchableOpacity>
        ),
      }}
    />
  </Tab.Navigator>
);

const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Entries"
      component={EntriesTabNavigator}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen name="AddEntry" component={AddEntryScreen} options={{ title: 'Add An Entry' }} />
    <Stack.Screen name="EditEntry" component={EditEntryScreen} options={{ title: 'Edit Entry' }} />
  </Stack.Navigator>
);

export default AppNavigator;
