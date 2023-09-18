import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import Header from './Components/Header';

const Screen1 = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={{
        uri: 'https://static.vecteezy.com/system/resources/previews/024/652/499/non_2x/watercolor-indian-independence-day-flag-with-transparent-background-free-png.png',
      }}
      style={{flex: 1}}
      resizeMode="cover"
      blurRadius={8}>
      <Header />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{flex: 1, marginRight: 150}}></View>
        <TouchableOpacity onPress={() => navigation.navigate('setting')}>
          <Text style={{fontSize: 30, marginBottom: 370,fontWeight:"bold"}}>Second</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Screen1;
