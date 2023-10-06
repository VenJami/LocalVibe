import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './Tabs';
import OnBoarding from '../src/screens/OnBoarding';
import { getItem, setItem } from '../utils/asyncStorage';

type Props = {};

const Main = (props: Props) => {
  const Stack = createNativeStackNavigator();
  const [showOnboarding, setShowOnboarding] = useState<boolean | null>(null); // Set initial state as null

  useEffect(() => {
    checkIfAlreadyOnboarded();
  }, []);

  const checkIfAlreadyOnboarded = async () => {
    let onBoarded = await getItem('onBoarded');

    if (onBoarded === null) {
      setShowOnboarding(true);
    } else {
      setShowOnboarding(false);
    }
  };

  if (showOnboarding === null) {
    return null;
  }

  if (showOnboarding) {
    return (
      <Stack.Navigator
        initialRouteName="Onboarding"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="Home" component={Tabs} />
      </Stack.Navigator>
    );
  } else {
    return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="Home" component={Tabs} />
      </Stack.Navigator>
    );
  }
};

export default Main;
