import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Header from './Components/Header';

const Home = ({navigation}) => {
  //   const navigation = useNavigation();
  return (
    <ImageBackground
      source={{
        uri: 'https://img.freepik.com/premium-vector/technology-abstract-welcome-banner-background-website-landing-page-template-design_633079-80.jpg',
      }}
      style={{flex: 1}}
      resizeMode="cover"
      blurRadius={3}>
      <Header />
      <View style={{marginTop: 350}}>
        <TouchableOpacity onPress={() => navigation.navigate('First')}>
          <Text
            style={{
              fontSize: 30,
              justifyContent: 'center',
              alignSelf: 'center',
              color: 'black',
              fontWeight: 'bold',
            }}>
            Welcome
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({});
