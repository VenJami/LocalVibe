import {
  Alert,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import ImagePicker, {ImageOrVideo} from 'react-native-image-crop-picker';
import { useDispatch, useSelector } from 'react-redux';
import {registerUser} from '../../redux/actions/userAction';

type Props = {
  navigation: any;
  route: any;
};

const SignupScreen = ({ navigation, route }: Props) => {
  const backgroundImage = require('../assets/2ndbackground.png');
  const logo = require('../assets/logo.png');
  const dispatch = useDispatch();
  const {error, isAuthenticated} = useSelector((state: any) => state.user);

  useEffect(() => {
    if (error) {
        Alert.alert(error);
    }
    if(isAuthenticated){
      Alert.alert("Account Creation Successful!");
      navigation.navigate("Home")
    }
  }, [error, isAuthenticated]);

  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');

  const { email = useState(''), password = useState('') } = route.params;

  const uploadImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.8,
      includeBase64: true,
    }).then((image: ImageOrVideo | null) => {
      if (image) {
        
        setAvatar('data:image/jpeg;base64,' + image.data);
      } else {
        // Handle the case where image is null or undefined
        Alert.alert('No image selected');
      }
    })
    .catch((error) => {
      // Handle any errors that occur during image picking
      console.error('Image picking error:', error);
    });
  };


  const submitHandler = async (e: any) => {
    try {
      Alert.alert('Registration Successful!');
  
      await registerUser(name, email, password, avatar)(dispatch);
  
      navigation.navigate('Home');
    } catch (error) {
      // Handle the error here
      console.error('An error occurred:', error);
  
      // You can also show an error message to the user if needed
      Alert.alert('Error', 'An error occurred while processing your request.');
      navigation.navigate('Signup');

    }
  };
 

  return (
    <View className="w-full h-full flex-col justify-start items-center">
      <ImageBackground
        className="w-full h-full top-0 absolute top"
        source={backgroundImage}
      />
      <View className="self-stretch flex-col justify-center items-center">
        <View className="shadow-inner justify-center items-center">
          <Text className="w-[239px] text-center text-white text-[52px] font-bold font-['Roboto'] tracking-tight">
            LocalVibe
          </Text>

          <View className="w-56 h-56 relative">
            <Image className="w-[60.57px] h-[61px] relative" source={logo} />
          </View>
        </View>

        <View className="flex-col justify-center items-start gap-[5px] ">
          <View className="SettingIcon w-full h-[67] justify-start items-start flex-row ">
            <View className="GettingStarted flex-col justify-start items-start flex">
              <Text className="SettingUpProfile w-[165] text-black text-xl font-bold font-['Roboto'] tracking-tight">
                Setting up profile
              </Text>
              <Text className="JoinToExplore w-[148] text-black text-xs font-extralight font-['Roboto'] tracking-tight">
                Join to explore!
              </Text>
            </View>

              <TouchableOpacity className="Profileicon h-[67] justify-start items-center pl-6 gap-[20] flex-row" onPress={uploadImage}>
                <Image
                  className="w-[70] h-[70] rounded-[90px]"
                  source={{
                    uri: avatar
                      ? avatar
                      : 'https://cdn-icons-png.flaticon.com/512/8801/8801434.png',
                  }}
                />

                <Text
                  className="ProfileIcon text-black text-13 font-bold font-['Roboto'] tracking-tight"
                  onPress={uploadImage}>
                  Profile Icon
                </Text>
              </TouchableOpacity>
          </View>
          <View className="flex-col justify-center items-start gap-y-8">
            <View className="flex-row justify-between items-center gap-x-6">
              <View className="flex-col justify-center items-start gap-y-1.5">
                <Text className="text-black text-[13px] font-bold font-roboto tracking-tight">
                  Full name
                </Text>
                <TextInput
                  placeholder="First Name"
                  value={name}
                  onChangeText={text => setName(text)}
                  className="w-[356px] h-[39px] bg-white rounded-[10px] shadow border border-neutral-400 border-opacity-20"
                />
              </View>
            </View>
            <View className="flex-col justify-start items-start">
              <Text className="text-black text-[13px] font-bold font-roboto tracking-tight">
                Address
              </Text>
              <TextInput
                placeholder="Address"
                className="w-[356px] h-[39px] bg-white rounded-[10px] shadow border border-neutral-400 border-opacity-20"
              />
            </View>
            <View className="flex-row justify-between items-center gap-x-6">
              <View className="flex-col justify-center items-start gap-y-1.5">
                <Text className="text-black text-[13px] font-bold font-roboto tracking-tight">
                  Gender
                </Text>
                <TextInput
                  placeholder="Gender"
                  className="w-[166px] h-[39px] bg-white rounded-[10px] shadow border border-neutral-400 border-opacity-20"
                />
              </View>

              <View className="flex-col justify-center items-start gap-y-1.5">
                <Text className="text-black text-[13px] font-bold font-roboto tracking-tight">
                  Account Type
                </Text>
                <TextInput
                  placeholder="Account Type"
                  className="w-[166px] h-[39px] bg-white rounded-[10px] shadow border border-neutral-400 border-opacity-20"
                />
              </View>
            </View>
          </View>
          <View>
            <View className="TermsAgreementBox w-[353px] justify-end gap-y-2.5">
              <Text className="TermsAgreement w-full">
                <Text
                  style={{
                    color: 'black',
                    fontSize: 11,
                    fontWeight: 'normal',
                    fontFamily: 'Roboto',
                    letterSpacing: -0.5,
                  }}>
                  Agree to
                </Text>
                <Text
                  style={{
                    color: 'green',
                    fontSize: 11,
                    fontWeight: 'bold',
                    fontFamily: 'Roboto',
                    letterSpacing: -0.5,
                  }}
                  onPress={() => navigation.navigate('')}>
                  {' '}
                  Terms
                </Text>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 11,
                    fontWeight: 'normal',
                    fontFamily: 'Roboto',
                    letterSpacing: -0.5,
                  }}>
                  {' '}
                  and
                </Text>
                <Text
                  style={{
                    color: 'green',
                    fontSize: 11,
                    fontWeight: 'bold',
                    fontFamily: 'Roboto',
                    letterSpacing: -0.5,
                  }}
                  onPress={() => navigation.navigate('')}>
                  {' '}
                  Conditions
                </Text>
              </Text>
            </View>
          </View>
          <TouchableOpacity onPress={submitHandler} className="Frame19 w-[341px] h-[39px] px-[142px] bg-emerald-700 rounded-[10px] shadow justify-center items-center">
            <Text
              className="Finish w-full text-center text-white font-bold font-Roboto tracking-tight">
              Finish
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignupScreen;
