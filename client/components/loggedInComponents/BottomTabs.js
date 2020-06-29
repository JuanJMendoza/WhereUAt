import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {HomeFeed} from './HomeFeed';
import {HeatMap} from './HeatMap';

const Tab = createMaterialBottomTabNavigator();

export const BottomTabs = () => {
  return (
    <Tab.Navigator activeColor="#fff" style={{backgroundColor: 'tomato'}}>
      <Tab.Screen
        name="HomeFeed"
        component={HomeFeed}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={HeatMap}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="compass" color={color} size={26} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      /> */}
      {/* <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};
