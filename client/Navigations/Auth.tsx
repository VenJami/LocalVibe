import React, {useEffect, useState} from 'react';
import LoginScreen from '../src/screens/LoginScreen';
import SignUpScreen from '../src/screens/SignupScreen';
import SignUpInfo from '../src/screens/SignupInfo';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Auth = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignUpScreen} />
      <Stack.Screen name="Signinfo" component={SignUpInfo} />
    </Stack.Navigator>
  );
};

export default Auth;
