import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const TabComponents = () => {
  return (
    <View
      style={{
        height: 80,
        backgroundColor: 'white',
      }}>
      <TouchableOpacity>
        <Text>HOME</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TabComponents;
