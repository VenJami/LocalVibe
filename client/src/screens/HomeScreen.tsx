import React from 'react';
import {
  View,
  TouchableOpacity,
  StatusBar,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';

type Props = {
  navigation: any;
};

const HomeScreen = ({navigation}: Props) => {
  const {user} = useSelector((state: any) => state.user);

  return (
    <SafeAreaView className="flex-1 bg-green-50">
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />

      <View className="flex flex-row p-2 justify-between bg-white">
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image source={require('../assets/wordlogo.png')} />
          </TouchableOpacity>
        </View>

        <View className="flex flex-row p-2 justify-between">
          <TouchableOpacity onPress={() => navigation.navigate('Search')} className="rounded-full p-2 mx-2 bg-green-50">
            <Image source={require('../assets/newsfeed/search.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image
              source={{uri: user?.avatar.url}}
              style={{width: 40, height: 40}}
              borderRadius={100}
            />
          </TouchableOpacity>
        </View>
      </View>


      <View className="flex-1 my-1">
        <TouchableOpacity
          className="w-full bg-white items-center p-2"
          onPress={() => navigation.navigate('Post')}
        >
          <Image source={require('../assets/newsfeed/post.png')} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
