import {
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {
  followUserAction,
  getAllUsers,
  unfollowUserAction,
} from '../../redux/actions/userAction';
import Loader from '../common/Loader';

type Props = {
  navigation: any;
};

const SearchScreen = ({navigation}: Props) => {
  const [data, setData] = useState([
    {
      name: '',
      userName: '',
      avatar: {url: ''},
      followers: [],
    },
  ]);
  const {users, user, isLoading} = useSelector((state: any) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    getAllUsers()(dispatch);
  }, [dispatch]);

  useEffect(() => {
    if (users) {
      setData(users);
    }
  }, [users]);

  const handleSearchChange = (e: any) => {
    if (e.length !== 0) {
      const filteredUsers =
        users &&
        users.filter((i: any) =>
          i.name.toLowerCase().includes(e.toLowerCase()),
        );
      setData(filteredUsers);
    } else {
      setData(users);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <SafeAreaView>
          <View className="p-3">
            <View className="w-full flex-row items-center bg-white">
              <TouchableOpacity
                className="p-2"
                onPress={() => navigation.goBack()}>
                <Image source={require('../assets/back.png')} />
              </TouchableOpacity>
              <Text className="pl-4 text-[20px] font-[500] text-emerald-700">
                Search
              </Text>
            </View>
            <View className="relative">
              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/2811/2811806.png',
                }}
                height={20}
                width={20}
                className="absolute top-[20px] left-2"
              />
              <TextInput
                onChangeText={e => handleSearchChange(e)}
                placeholder="Search"
                placeholderTextColor="#000"
                className="w-full h-[38px] bg-[#0000000e] rounded-[8px] pl-8 text-[#000] mt-[10px]"
              />
            </View>
            {isLoading ? (
              <Loader />
            ) : (
              <FlatList
                data={data}
                renderItem={({item}) => {
                  const handleFollowUnfollow = async (e: any) => {
                    try {
                      if (e.followers.find((i: any) => i.userId === user._id)) {
                        await unfollowUserAction({
                          userId: user._id,
                          users,
                          followUserId: e._id,
                        })(dispatch);
                      } else {
                        await followUserAction({
                          userId: user._id,
                          users,
                          followUserId: e._id,
                        })(dispatch);
                      }
                    } catch (error) {
                      console.log(error, 'error');
                    }
                  };
                  return (
                    <TouchableOpacity
                      onPress={() => navigation.navigate('UserProfile',{
                        item: item,
                      })}>
                      <View className="flex-row my-3">
                        <Image
                          source={{uri: item.avatar.url}}
                          width={30}
                          height={30}
                          borderRadius={100}
                        />
                        <View className="w-[90%] flex-row justify-between border-b border-[#00000020] pb-2">
                          <View className="">
                            <Text className="pl-3 text-[18px] text-black">
                              {item.name}
                            </Text>
                            <Text className="pl-3 text-[18px] text-black">
                              {item.userName}
                            </Text>
                            <Text className="pl-3 mt-1 text-[16px] text-[#444]">
                              {item.followers.length} followers
                            </Text>
                          </View>
                          <View>
                            <TouchableOpacity
                              className="rounded-[8px] w-[100px] flex-row justify-center items-center h-[35px] border border-[#0000004b]"
                              onPress={() => handleFollowUnfollow(item)}>
                              <Text className="text-black">
                                {item.followers.find(
                                  (i: any) => i.userId === user._id,
                                )
                                  ? 'Following'
                                  : 'Follow'}
                              </Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>
                  );
                }}
              />
            )}
          </View>
        </SafeAreaView>
      )}
    </>
  );
};

export default SearchScreen;
