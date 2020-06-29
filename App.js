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
import MapView, {PROVIDER_GOOGLE, Marker, Heatmap} from 'react-native-maps';
import {CustomMarker} from './source/CustomMarker';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

import {HeatMap} from './client/components/HeatMap';
import {SignUpScreen} from './client/components/SignUp';

export default class App extends Component {
  render() {
    const Drawer = createDrawerNavigator();

    return (
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Sign up" component={SignUpScreen} />
          <Drawer.Screen name="HeatMap" component={HeatMap} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}
