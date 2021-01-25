import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCmmuuSFu8znGRmEnMjyViTIqZW2QiCI7g",
    authDomain: "emergency-5e731.firebaseapp.com",
    databaseURL: "https://emergency-5e731.firebaseio.com",
    projectId: "emergency-5e731",
    storageBucket: "emergency-5e731.appspot.com",
    messagingSenderId: "667076932661",
    appId: "1:667076932661:web:91445dfdfacc8e24196d7c"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
