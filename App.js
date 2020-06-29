/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {CustomMarker} from './source/CustomMarker';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {SignUpScreen} from './client/components/SignUp';

import {BottomTabs} from './client/components/loggedInComponents/BottomTabs';
import {DrawerContent} from './client/components/loggedInComponents/DrawerContent';

export default class App extends Component {
  render() {
    const Drawer = createDrawerNavigator();

    return (
      <NavigationContainer>
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
          {/* Use check here to see if user has auth token, if so show Home, else show Sign up  */}
          <Drawer.Screen name="Home" component={BottomTabs} />
          <Drawer.Screen name="Sign up" component={SignUpScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}
