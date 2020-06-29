import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {Styles} from '../../public/stylesheets/allScreens';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import {HomeFeed} from './loggedInComponents/HomeFeed';
import {TextInput} from 'react-native-paper';

import {GreetingStyles} from '../../public/stylesheets/allScreens';

const LogInStack = createStackNavigator();

const LogIn = ({navigation}) => {
  return (
    <View style={GreetingStyles.container}>
      <View style={GreetingStyles.header}>
        <Text style={GreetingStyles.text_header}>Welcome!</Text>
      </View>
      <View style={GreetingStyles.footer}>
        <Text style={GreetingStyles.text_footer}>Email</Text>
        <View style={GreetingStyles.action}>
          <TextInput
            placeholder="Email"
            style={GreetingStyles.textInput}
            autoCapitalize="none"
          />
        </View>
        <Text style={[GreetingStyles.text_footer, {marginTop: 35}]}>
          Password
        </Text>
        <View style={GreetingStyles.action}>
          <TextInput
            placeholder="Password"
            style={GreetingStyles.textInput}
            autoCapitalize="none"
          />
        </View>
      </View>
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
          name="Log in"
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
