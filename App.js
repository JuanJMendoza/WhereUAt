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

import {HeatMap} from './client/components/HeatMap';

export default class App extends Component {
  render() {
    const Stack = createStackNavigator();

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HeatMap" component={HeatMap} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
