import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Header = () => {
    const navigation = useNavigation();
  return (
    <View
    style={{
      justifyContent: 'space-between',
      marginTop: 50,
      flexDirection: 'row',
      alignItems: 'center',
    }}>
    <TouchableOpacity onPress={() => navigation.openDrawer()}>
      <Image
        source={require('../../assets/icons/home.png')}
        style={{height: 30, width: 30, tintColor: 'black'}}
        resizeMode="contain"
      />
    </TouchableOpacity>

   
  </View>
  )
}

export default Header

const styles = StyleSheet.create({})