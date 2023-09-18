import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const DrawerComponent = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: 100,
        backgroundColor: 'white',
      }}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={{
          flexDirection: 'row',
        }}>
        <Text style={styles.box}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('setting')}
        style={{
          flexDirection: 'row',
        }}>
        <Text style={styles.box}>setting</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('phon')}
        style={{
          flexDirection: 'row',
          }}>
        <Text style={styles.box}>phone</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DrawerComponent;

const styles = StyleSheet.create({
  box: {
    fontSize: 20,
    margin: 10,
    color: 'black',
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
});
