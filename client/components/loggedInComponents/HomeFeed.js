import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {Styles} from '../../../public/stylesheets/allScreens';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import {BottomTabs} from './BottomTabs';

const HomeStack = createStackNavigator();

const HomeFeedScreen = ({navigation}) => {
  return (
    <View style={Styles.center}>
      <Text>This is the home screen.</Text>
    </View>
  );
};

export const HomeFeed = ({navigation}) => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <HomeStack.Screen
        name="Home"
        component={HomeFeedScreen}
        options={{
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={25}
              backgroundColor="#009387"
              onPress={() => navigation.openDrawer()}
            />
          ),
        }}
      />
    </HomeStack.Navigator>
  );
};
