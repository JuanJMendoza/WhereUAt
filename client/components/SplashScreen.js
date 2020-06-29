import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {Styles} from '../../public/stylesheets/allScreens';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import {HomeFeed} from './loggedInComponents/HomeFeed';

const SplashStack = createStackNavigator();

const Splash = ({navigation}) => {
  return (
    <View style={Styles.center}>
      <Text>Sign up</Text>
      <Button title="Sign up" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export class SplashScreen extends Component {
  constructor({navigation}) {
    super();
  }

  render() {
    return (
      <SplashStack.Navigator
        screenOptions={{
          // headerStyle: {
          //   backgroundColor: '#009387',
          // },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <SplashStack.Screen
          name="Sign up"
          component={Splash}
          options={{
            headerLeft: () => (
              <Icon.Button
                name="ios-menu"
                size={25}
                backgroundColor="#fff"
                color="#000"
                onPress={() => this.props.navigation.openDrawer()}
              />
            ),
          }}
        />
      </SplashStack.Navigator>
    );
  }
}
