import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  StatusBar,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {loadUser, loginUser} from '../../redux/actions/userAction';

type Props = {
  navigation: any;
};

const LoginScreen = ({navigation}: Props) => {
  const {error,isAuthenticated} = useSelector((state:any) => state.user);
  const backgroundImage = require('../assets/background.png');
  const logo = require('../assets/logo.png');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const submitHandler = (e: any) => {
    console.log("login submitted");
    loginUser(email, password)(dispatch);
  };

  useEffect(() =>{
    if(error){
      Alert.alert("Login failed!!");
      Alert.alert(error);
    }
    if(isAuthenticated){ 
      Alert.alert("Login Successful!");
      navigation.navigate('Home');
      loadUser()(dispatch);
    }
  }, [isAuthenticated])

  return (
    <View className="bg-teal-50 justify-center items-center flex-1">
      <StatusBar backgroundColor="#017E5E" barStyle="dark-content" />
      <Image
      
        className="absolute top-0	 w-full h-full"
        source={backgroundImage}
      />
      <View className="body flex-col justify-center items-center gap-y-[140px]">
        <View className="Logo h-[179px] shadow-inner flex-col justify-center items-center ">
          <View className="LoginLogo justify-center items-center flex">
            <View className="Frame16 justify-center items-center flex">
              <View className="Frame15 justify-center items-center flex">
                <View className="Frame12 justify-center items-center flex">
                  <View className="Rectangle23 w-[177.73px] h-[179px] bg-gradient-to-b from-white to-white rounded-[22.50px] shadow" />
                </View>
              </View>
            </View>
            <View className="Frame14 justify-center items-center gap-2.5 flex">
              <View className="Frame13 justify-center items-center gap-2.5 flex">
                <Image className="w-[163.77px] h-[163.77px]" source={logo} />
              </View>
            </View>
          </View>
        </View>
        <View className="GettingStarterBlock flex-col justify-center items-start gap-y-[18px]">
          <View className="Forms flex-col justify-center items-start gap-y-1">
            <View className="LoginBlock flex-col justify-center items-start gap-y-[20px]">
              <View className="GettingStarted flex-col justify-start items-start">
                <Text className="GettingStarted w-[148px] text-black text-xl font-bold font-Roboto tracking-tight">
                  Getting Started
                </Text>
                <Text className="JoinToExplore w-[148px] text-black text-xs font-light font-Roboto tracking-tight">
                  Join to explore!
                </Text>
              </View>

              <View className="LoginPass flex-col justify-center items-start gap-y-[30px]">
                <View className="Email h-[60px] flex-col justify-center items-start gap-y-1.5">
                  <Text className="EmailOrPhoneNumber w-[148px] h-[15px] text-black text-[13px] font-bold font-Roboto tracking-tight">
                    Email or Phone Number
                  </Text>
                  <TextInput
                    placeholder="Email or Phone Number"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    className="Rectangle25 w-[341px] h-[39px] bg-white rounded-[10px] shadow-2xl border border-neutral-400 border-opacity-20"
                  />
                </View>

                <View className="Pasword h-[60px] flex-col justify-center items-start gap-y-1.5">
                  <Text className="Password w-[148px] h-[15px] text-black text-[13px] font-bold font-Roboto tracking-tight">
                    Password
                  </Text>
                  <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    className="Rectangle25 w-[341px] h-[39px] bg-white rounded-[10px] shadow border border-neutral-400 border-opacity-20"
                    secureTextEntry={true}
                  />
                </View>
              </View>
            </View>
            <View className="ForgotPassword w-[353px] justify-end items-end gap-y-2.5">
              <Text
                className="ForgotPassword w-[92px] text-center text-emerald-700 text-[11px] font-normal font-Roboto tracking-tight"
                onPress={() => navigation.navigate('')}>
                Forget Password?
              </Text>
            </View>
          </View>
          <View className="SignInSignup flex-col justify-center items-start gap-y-[13px]">
            <TouchableOpacity onPress={submitHandler}>
              <View className="Frame19 w-[341px] h-[39px] px-[142px] bg-emerald-700 rounded-[10px] shadow justify-center items-center">
                <Text className="SignIn text-center text-white text-sm font-bold font-Roboto tracking-tight">
                  Sign In
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <View className="Frame20 w-[341px] h-[39px] bg-white rounded-[10px] shadow justify-center items-center">
                <Text className="SignUp text-center text-emerald-700 text-sm font-bold font-Roboto tracking-tight">
                  Sign Up
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
