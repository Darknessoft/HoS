import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import CreateScreen from '../Screens/Create';
import ActivityScreen from '../Screens/Activity';
// import ChannelScreen from '../screens/Chat';
import ProfileScreen from '../Screens/Profile';

export const AppTabNavigator = createBottomTabNavigator({  
  Create: {
    screen: CreateScreen,
    navigationOptions :{
      tabBarLabel : "Emergency",
      tabBarIcon  : <Image source={require("../assets/Emer.png")} style={{width:20, height:20}}/>
    }    
  },
  Activity: {
    screen: ActivityScreen,
    navigationOptions :{
      tabBarLabel : "Nearby",
      tabBarIcon  : <Image source={require("../assets/Nearby.png")} style={{width:20, height:20}}/>
    }
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions :{
      tabBarLabel : "Profile",
      tabBarIcon  : <Image source={require("../assets/Profile.png")} style={{width:20, height:20}}/>
    }
  },
  
});
