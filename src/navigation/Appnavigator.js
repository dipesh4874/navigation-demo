import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigation from './DrawerNavigation';

const stack = createStackNavigator();
const Appnavigator = () => {
  return (
    <NavigationContainer>
      <stack.Navigator
        initialRouteName="Drawer"
        screenOptions={{headerShown: false}}>
        <stack.Screen name="Drawer" component={DrawerNavigation} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default Appnavigator;
