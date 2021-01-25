import React, { useState, useEffect, Component } from 'react';
import { Text, View, StyleSheet,Alert,Button,Dimensions,ScrollView } from 'react-native';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import firebase from 'firebase';
import db from '../config';



export default class ActivityScreen extends Component{
  constructor(){
    super();
    this.state={
      lat:null,
      lon:null,
      result:'',
      inProgress:null,
      coords:'',
      error:'',
      docId:'',
      email:'',
      hasLocationPerm: null,
      region:null,
    }
  }

  getUserProfile=()=>{
    var email = firebase.auth().currentUser.email;
    db.collection('UserInfo').where('EmailId','==',email).get()
    .then(snapshot => {
      snapshot.forEach(doc => {
      var data = doc.data()
        this.setState({
          email   : data.EmailId,
          docId     : doc.id
        })
      });
    })
    
  }

  getLocationPermissions = async ()=>{
    const { status } = await Permissions.askAsync(Permissions.LOCATION)

    this.setState({
      hasLocationPerm:status === "granted"
    })
    if(status === "granted"){
      this.getLocation()
    }
    else{
      Alert.alert('Location Services was not granted')
    }
  }

  getLocation= async ()=>{
      var location = await Location.getCurrentPositionAsync({});
      var currentLat = JSON.stringify(location.coords.latitude)
      var currentLng = JSON.stringify(location.coords.longitude)
      var correctLat = Math.round(currentLat);
      var correctLng = Math.round(currentLng);
      var coords = currentLat + ','+ currentLng
      this.setState({        
        lat:currentLat,
        lon:currentLng,
        coords:coords,
        region: { latitude: location.coords.latitude, longitude: location.coords.longitude, latitudeDelta: 0.01, longitudeDelta: 0.01}
      })
      var mylat = this.state.lat;
      var mylon = this.state.lon
    fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + mylat + ',' + mylon + '&key=AIzaSyBCVPshQTsf-ifNwZBsdsW3Yf5nS8kNe1U')
        .then((response) => response.json())
        .then((responseJson) => {
          var add = JSON.stringify(responseJson.results[0].formatted_address)
            this.setState({
              result:add
            })
          })
        }
  
UpdateLocation = ()=>{
db.collection('UserInfo').doc(this.state.docId).update({
  Location:this.state.result
})
}



  componentDidMount(){
    // this.getLocation();
    this.getUserProfile();
    setInterval(this.UpdateLocation,10000);
    setInterval(this.getLocation,1000)
    this.getLocationPermissions()
  }
  
    
render(){
  return(
    <View style={{marginTop:'5%'}}>

      <Text>{"Lat: "+this.state.lat +'\n'+"Long: "+this.state.lon +'\n'+this.state.coords}</Text>
      <Text>{"Result: "+this.state.result}</Text>   
      
    </View>
    
  )
}
 
}