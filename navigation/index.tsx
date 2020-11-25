import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import NavOptions from '../constants/Navigation';
import SplashScreen from '../screens/SplashScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import SignScreen from '../screens/SignScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import NotificationScreen from '../screens/NotificationScreen';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Notification">
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{title: 'Welcome'}} />
      <Stack.Screen name="Splash" component={SplashScreen} options={{title: 'Telemedicine'}} />
      <Stack.Screen name="Sign" component={SignScreen} options={{title: 'Sign In'}} />
      <Stack.Screen name="Register" component={RegisterScreen} options={{...NavOptions, title: 'Register', headerShown: true}} />
      <Stack.Screen name="Home" component={HomeScreen} options={{...NavOptions, title: 'Home', headerShown: true}} />
      <Stack.Screen name="Notification" component={NotificationScreen} options={{...NavOptions, title: 'Notification', headerShown: true}} />
      <Stack.Screen name="Root" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
}
