import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../src/screens/HomeScreen';
import ChatScreen from '../src/screens/ChatScreen';
import MapScreen from '../src/screens/MapScreen';
import NotifScreen from '../src/screens/NotifScreen';
import FriendScreen from '../src/screens/FriendScreen';
import {View, Image, StyleSheet} from 'react-native';

type Props = {};

const Tab = createBottomTabNavigator();
const homeIcon = require('../src/assets/navbar/home.png');
const bellIcon = require('../src/assets/navbar/bell.png');
const mapIcon = require('../src/assets/navbar/map.png');
const messageIcon = require('../src/assets/navbar/messages.png');
const usersIcon = require('../src/assets/navbar/users.png');

const Tabs = (props: Props) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={({route}) => ({
          tabBarIcon: ({focused}) => (
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image source={homeIcon} style={{width: 30, height: 30}} />
              {focused && <View style={styles.tabUnderline} />}
            </View>
          ),
        })}
      />
      <Tab.Screen
        name="Message"
        component={ChatScreen}
        options={({route}) => ({
          tabBarIcon: ({focused}) => (
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image source={messageIcon} style={{width: 30, height: 30}} />
              {focused && <View style={styles.tabUnderline} />}
            </View>
          ),
        })}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={({route}) => ({
          tabBarIcon: ({focused}) => (
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image source={mapIcon} style={{width: 30, height: 30}} />
              {focused && <View style={styles.tabUnderline} />}
            </View>
          ),
        })}
      />
      <Tab.Screen
        name="Notif"
        component={NotifScreen}
        options={({route}) => ({
          tabBarIcon: ({focused}) => (
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image source={bellIcon} style={{width: 30, height: 30}} />
              {focused && <View style={styles.tabUnderline} />}
            </View>
          ),
        })}
      />
      <Tab.Screen
        name="Friends"
        component={FriendScreen}
        options={({route}) => ({
          tabBarIcon: ({focused}) => (
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image source={usersIcon} style={{width: 30, height: 30}} />
              {focused && <View style={styles.tabUnderline} />}
            </View>
          ),
        })}
      />

    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabUnderline: {
    height: 2, // Set the height of the underline
    width: 20, // Set the width of the underline (adjust as needed)
    backgroundColor: '#017E5E', // Set the color of the underline
    marginTop: 4, // Adjust the spacing between the icon and the underline
  },
});

export default Tabs;
