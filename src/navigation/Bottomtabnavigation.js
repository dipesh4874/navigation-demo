import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Home';
import First from '../First';
import Screen1 from '../screen1';
import {Image} from 'react-native';

const Tab = createBottomTabNavigator();

const Bottomtabnavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown:false,
        tabBarIcon: ({focused, color}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? require('../../assets/icons/home.png')
              : require('../../assets/icons/home.png');
            color = focused ? 'blue' : 'black';
          } else if (route.name === 'setting') {
            iconName = focused
              ? require('../../assets/icons/setting.png')
              : require('../../assets/icons/setting.png');
              
          } else if (route.name === 'phon') {
            iconName = focused
              ? require('../../assets/icons/phon.png')
              : require('../../assets/icons/phon.png');
          }

          return (
            <Image
              source={iconName}
              style={{height: 25, width: 25}}
              tintColor={color}
            />
          );
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="setting" component={First} />
      <Tab.Screen name="phon" component={Screen1} />
    </Tab.Navigator>
  );
};

export default Bottomtabnavigation;
