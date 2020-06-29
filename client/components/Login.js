import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {Styles} from '../../public/stylesheets/allScreens';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import {HomeFeed} from './loggedInComponents/HomeFeed';

const LogInStack = createStackNavigator();

const LogIn = ({navigation}) => {
  return (
    <View style={Styles.center}>
      <Text>Sign up</Text>
      <Button title="Sign up" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export class LogInScreen extends Component {
  constructor({navigation}) {
    super();
  }

  render() {
    return (
      <LogInStack.Navigator
        screenOptions={{
          // headerStyle: {
          //   backgroundColor: '#009387',
          // },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <LogInStack.Screen
          name="Sign up"
          component={LogIn}
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
      </LogInStack.Navigator>
    );
  }
}
