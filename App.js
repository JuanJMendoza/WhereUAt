/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

import {Locations} from './DummyData/Data';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: 40.6871849,
            longitude: -73.90964883252957,
            latitudeDelta: 0.4,
            longitudeDelta: 0.5,
          }}>
          {Locations.map((location, idx) => (
            <Marker
              key={idx}
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude,
                title: location.title,
              }}
            />
          ))}
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  map: {
    flex: 1,
  },
});
