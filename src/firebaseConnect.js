import firebase from 'firebase';
var config = {
    apiKey: "AIzaSyA6m013U4SEVYPNjclPuI-KapB18e1N4Ls",
    authDomain: "react-20b00.firebaseapp.com",
    databaseURL: "https://react-20b00.firebaseio.com",
    projectId: "react-20b00",
    storageBucket: "react-20b00.appspot.com",
    messagingSenderId: "580652231514"
  };
  //khoi tao 1 firebase voi cau hinh la config
  firebase.initializeApp(config);

  
 export const firebaseData = firebase.database();
//  var data = firebase.database().ref('dataForNote/')
//   data.set({
//     id:1,
//     title:"Ngay 20/12",
//     content:"demo content1"
//   })
//  data.once('value').then(function(snapshot){
//     console.log(snapshot.val());
//  })