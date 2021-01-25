import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
// import ActivityScreen from '../Screens/Activities';
// import ActivityDetailsScreen  from '../Screens/ActivityDetailsScreen';




export const AppStackNavigator = createStackNavigator({
  Activities : {
    screen : ActivityScreen,
    navigationOptions:{
      headerShown : false
    }
  },
  ActivityDetails : {
    screen : ActivityDetailsScreen,
    navigationOptions:{
      headerTitle:"About"
    }
    
  }
},
  {
    initialRouteName: 'Activities'
  }
);
