import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';

type Props = {
    navigation: any;
}

const ProfileScreen = ({ navigation }: Props) => {
    const [active, setActive] = useState(0);
    const {user} = useSelector((state: any) => state.user);
    const {posts} = useSelector((state: any) => state.post);
    const [data, setData] = useState([]);
    const [repliesData, setRepliesData] = useState([]);
    const dispatch = useDispatch();

    return (
        <ScrollView className='flex-1'>
          <View className='p-4'>
            <Image
              source={{uri: user?.avatar.url}}
              className='w-32 h-32 rounded-full'
            />
            <Text className='text-xl font-bold my-2'>{user?.name}</Text>
            <Text className='text-gray-500 mb-4'>@{user?.name}</Text>
    
            <View className='flex-row justify-between'>
              <Text className='text-lg font-semibold'>Posts</Text>
              <Text className='text-lg font-semibold'>Followers</Text>
              <Text className='text-lg font-semibold'>Following</Text>
            </View>
    
            <View className='flex-row justify-between'>
              <Text className='text-xl font-bold'>0</Text>
              <Text className='text-xl font-bold'>0</Text>
              <Text className='text-xl font-bold'>0</Text>
            </View>
          </View>
          <Text onPress={() => navigation.navigate("Home")}>Return</Text>
        </ScrollView>
      );
}

export default ProfileScreen
