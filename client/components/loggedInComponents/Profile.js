import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {Styles} from '../../../public/stylesheets/allScreens';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import {BottomTabs} from './BottomTabs';

const ProfileStack = createStackNavigator();

const ProfileFeedScreen = ({navigation}) => {
  return (
    <View style={Styles.center}>
      <Text>This is the Profile screen.</Text>
    </View>
  );
};

export const ProfileFeed = ({navigation}) => {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <ProfileStack.Screen
        name="Profile"
        component={ProfileFeedScreen}
        options={{
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={25}
              backgroundColor="Transparent"
              color="#000"
              onPress={() => navigation.openDrawer()}
            />
          ),
        }}
      />
    </ProfileStack.Navigator>
  );
};
