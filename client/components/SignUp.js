import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {Styles} from '../../public/stylesheets/allScreens';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

const SignUpStack = createStackNavigator();

const SignUp = ({navigation}) => {
  return (
    <View style={Styles.center}>
      <Text>Sign up</Text>
      <Button title="Sign up" onPress={() => navigation.navigate('HeatMap')} />
    </View>
  );
};

export class SignUpScreen extends Component {
  constructor({navigation}) {
    super();
  }

  render() {
    return (
      <SignUpStack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#009387',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <SignUpStack.Screen
          name="Sign up"
          component={SignUp}
          options={{
            headerLeft: () => (
              <Icon.Button
                name="ios-menu"
                size={25}
                backgroundColor="#009387"
                onPress={() => this.props.navigation.openDrawer()}
              />
            ),
          }}
        />
      </SignUpStack.Navigator>
    );
  }
}
