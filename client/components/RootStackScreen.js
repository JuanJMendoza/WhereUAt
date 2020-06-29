import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {SplashScreen} from './SplashScreen';
import {SignUpScreen} from './SignUp';
import {LogInScreen} from './Login';

const RootStack = createStackNavigator();

export const RootStackScreen = ({navigation}) => {
  return (
    <RootStack.Navigator headerMode="none">
      {/* <RootStack.Screen name="SplashScreen" component={SplashScreen} /> */}
      <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
      <RootStack.Screen name="LogInScreen" component={LogInScreen} />
    </RootStack.Navigator>
  );
};
