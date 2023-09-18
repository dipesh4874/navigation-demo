import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerComponent from '../DrawerComponent';
import Bottomtabnavigation from './Bottomtabnavigation';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Bottom"
      screenOptions={{
        headerShown: false,
        drawerType: 'front',
      }}
      drawerContent={props => <DrawerComponent {...props} />}>
      <Drawer.Screen name="Bottom" component={Bottomtabnavigation} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({});
