import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AllEntriesScreen from '../screens/AllEntriesScreen';
import OverLimitEntriesScreen from '../screens/OverLimitEntriesScreen';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="All Entries" component={AllEntriesScreen} />
      <Tab.Screen name="Over-limit Entries" component={OverLimitEntriesScreen} />
    </Tab.Navigator>
  );
}

export default TabNavigator;