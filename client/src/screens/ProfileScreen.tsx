import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Dimensions} from 'react-native';
import {logoutUser} from '../../redux/actions/userAction';

type Props = {
  navigation: any;
};

const {width} = Dimensions.get('window');

const ProfileScreen = ({navigation}: Props) => {
  const [active, setActive] = useState(0);
  const {user} = useSelector((state: any) => state.user);
  const {posts} = useSelector((state: any) => state.post);
  const [data, setData] = useState([]);
  const [repliesData, setRepliesData] = useState([]);
  const dispatch = useDispatch();
  const logoutHandler = async () => {
    console.log('logout submitted');
    logoutUser()(dispatch);
  };

  useEffect(() => {
    if (posts && user) {
      const myPosts = posts.filter((post: any) => post.user._id === user._id);
      setData(myPosts);
    }
  }, [posts, user]);

  useEffect(() => {
    if (posts && user) {
      const myReplies = posts.filter((post: any) =>
        post.replies.some((reply: any) => reply.user._id === user._id),
      );
      setRepliesData(myReplies.filter((post: any) => post.replies.length > 0));
    }
  }, [posts, user]);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView className="relative">
        <View
          className="flex-row justify-between"
          style={{width: width, padding: 10}}>
          <View>
            <Text className="text-[#000] text-[30px]">{user?.name}</Text>
            <Text className="text-[#0000009d] text-[20px]">
              {user?.userName}
            </Text>
          </View>
          <Image
            source={{uri: user.avatar.url}}
            height={80}
            width={80}
            borderRadius={100}
          />
        </View>
        <Text className="p-3 mt-[-20] text-[#000] font-sans leading-6 text-[18px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
          voluptatibus molestias soluta non commodi placeat quidem repudiandae
          eos eius possimus blanditiis, veniam temporibus harum sunt vel tenetur
          rem rerum inventore!
        </Text>
        <View className="p-3">
          <Text className="text-[16px]">
            {user?.followers.length} followers
          </Text>
        </View>
        <View className="px-5 py-3 flex-row w-full items-center">
          <TouchableOpacity>
            <Text
              className="w-[100] pt-1 text-center h-[30px] text-[#000]"
              style={{
                borderColor: '#333',
                borderWidth: 1,
                backgroundColor: 'transparent',
              }}>
              Edit Profile
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="ml-5" onPress={logoutHandler}>
            <Text
              className="w-[100] pt-1 text-center h-[30px] text-[#000]"
              style={{
                borderColor: '#333',
                borderWidth: 1,
                backgroundColor: 'transparent',
              }}>
              Log out
            </Text>
          </TouchableOpacity>
        </View>
        <View
          className="border-b border-b-[#00000032] px-4 py-3"
          style={{width: '100%'}}>
          <View className="w-[80%] m-auto flex-row justify-between">
            <TouchableOpacity onPress={() => setActive(0)}>
              <Text
                className="text-[18px] pl-3 text-[#000]"
                style={{opacity: active === 0 ? 1 : 0.6}}>
                Posts
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActive(1)}>
              <Text
                className="text-[18px] pl-3 text-[#000]"
                style={{opacity: active === 1 ? 1 : 0.6}}>
                Media
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        
        {/* 
                    {active === 0 && (
                      <>
                        {postData &&
                          postData.map((item: any) => (
                            <PostCard
                              navigation={navigation}
                              key={item._id}
                              item={item}
                            />
                          ))}
                        {postData.length === 0 && (
                          <Text className="text-black py-10 text-center text-[18px]">
                            No Post yet!
                          </Text>
                        )}
                      </>
                    )}
    
                    {active === 1 && (
                      <>
                        {repliesData &&
                          repliesData.map((item: any) => (
                            <PostCard
                              navigation={navigation}
                              key={item._id}
                              item={item}
                              replies={true}
                            />
                          ))}
                        {active !== 1 && postData.length === 0 && (
                          <Text className="text-black py-10 text-center text-[18px]">
                            No Post yet!
                          </Text>
                        )}
                      </>
                    )} */}

        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

export default ProfileScreen;
