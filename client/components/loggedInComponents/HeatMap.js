import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker, Heatmap} from 'react-native-maps';
import {Locations} from '../../../DummyData/Data';
import Icon from 'react-native-vector-icons/Ionicons';

import {createStackNavigator} from '@react-navigation/stack';

const HeatMapStack = createStackNavigator();

const HeatMapScreen = ({navigation}) => {
  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.map}
      initialRegion={{
        latitude: 40.6871849,
        longitude: -73.90964883252957,
        latitudeDelta: 0.4,
        longitudeDelta: 0.5,
      }}>
      <Heatmap points={Locations} radius={50} />
      {/* {Locations.map((location, idx) => (
            <Marker
              key={idx}
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude,
                // title: location.title,
              }}>
              <CustomMarker item={location} />
            </Marker>
          ))} */}
    </MapView>
  );
};

export class HeatMap extends Component {
  render() {
    return (
      <HeatMapStack.Navigator
        screenOptions={{
          headerTransparent: true,
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <HeatMapStack.Screen
          name="Explore"
          component={HeatMapScreen}
          options={{
            headerLeft: () => (
              <Icon.Button
                name="ios-menu"
                size={25}
                backgroundColor="Transparent"
                color="#000"
                onPress={() => this.props.navigation.openDrawer()}
              />
            ),
          }}
        />
      </HeatMapStack.Navigator>
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
