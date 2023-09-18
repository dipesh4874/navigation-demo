import {View, Text, Image, ImageBackground} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import Header from './Components/Header';

const First = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={{
        uri: 'https://cdn.pixabay.com/photo/2015/04/27/11/48/sign-741813_1280.jpg',
      }}
      style={{flex: 1}}
      resizeMode="cover"
      blurRadius={5}>
      <Header />

      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{flex: 1, marginRight: 150}}></View>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={{fontSize: 30, marginBottom: 370, fontWeight: 'bold'}}>
            First
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default First;
