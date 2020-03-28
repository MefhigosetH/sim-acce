import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from './components/WelcomeScreen';
import ScanScreen from './components/ScanScreen';
import ProfileScreen from './components/ProfileScreen';

const Stack = createStackNavigator();

export default class App extends React.Component {

  render() {

    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Inicio">
          <Stack.Screen name="Inicio" component={WelcomeScreen} />
          <Stack.Screen name="Scan" component={ScanScreen} options={{ title: 'Escanear DNI' }} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

