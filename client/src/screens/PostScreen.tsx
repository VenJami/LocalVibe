import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import ImagePicker, {ImageOrVideo} from 'react-native-image-crop-picker';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import { createPostAction } from '../../redux/actions/postAction';

type Props = {
  navigation: any;
};

const PostScreen = ({navigation}: Props) => {
  const {user} = useSelector((state: any) => state.user);
  const {isSuccess, isLoading} = useSelector((state: any) => state.post);
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    if (
      replies.length === 1 &&
      replies[0].title === '' &&
      replies[0].image === ''
    ) {
      setReplies([]);
    }
    if (isSuccess) {
      navigation.goBack();
    }
    setReplies([]);
    setTitle('');
    setImage('');
  }, [isSuccess]);

  const [replies, setReplies] = useState([
    {
      title: '',
      image: '',
      user: '',
    },
  ]);

  const postImageUpload = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.8,
      includeBase64: true,
    }).then((image: ImageOrVideo | null) => {
      if (image) {
        setImage('data:image/jpeg;base64,' + image.data);
      }
    });
  };

  const createPost = () => {
    if (title !== '' || (image !== '' && !isLoading)) {
      createPostAction(title, image, user, replies)(dispatch);
    }
  };

  return (
    <SafeAreaView className="flex-1 justify-between bg-green-50">
      <View>
        <View className="w-full flex-row items-center bg-white">
          <TouchableOpacity className="p-2" onPress={() => navigation.goBack()}>
            <Image source={require('../assets/back.png')} />
          </TouchableOpacity>
          <Text className="pl-4 text-[20px] font-[500] text-emerald-700">
            Post Vibe
          </Text>
        </View>

        <View className="mt-1 flex-row bg-white">
          <Image
            source={{uri: user?.avatar.url}}
            style={{width: 50, height: 50}}
            className="m-2.5"
            borderRadius={100}
          />
          <View className="">
            <View className="w-[70%] flex-row justify-between">
              <Text className="text-[20px] mt-2 font-[600] text-black">
                {user?.name}
              </Text>
            </View>
            <TextInput
              placeholder="What is happening..."
              placeholderTextColor={'#000'}
              value={title}
              onChangeText={text => setTitle(text)}
              className="text-gray text-[16px]"
            />
            <TouchableOpacity className="my-2" onPress={postImageUpload}>
              <Image
                source={require('../assets/newsfeed/upload.png')}
                style={{width: 20, height: 20}}
              />
            </TouchableOpacity>
          </View>
        </View>
        {image && (
          <View className="m-2">
            <Image
              source={{uri: image}}
              width={200}
              height={300}
              resizeMethod="auto"
              alt=""
            />
          </View>
        )}

      </View>
      <View className="p-2 flex-row justify-between">
        <Text>Everyone will see this post</Text>
        <TouchableOpacity onPress={createPost}>
          <Text className="text-emerald-700">Post</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PostScreen;
