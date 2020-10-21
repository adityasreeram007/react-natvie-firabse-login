import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View,Image, Button } from 'react-native';
// import  firebase from "firebase";
// const firebaseConfig = {
//   apiKey: "AIzaSyCR7vyHJeTOcHyvjhsq7qJm4WbEkdSeldo",
//   authDomain: "fir-chatapp-c0c8b.firebaseapp.com",
//   databaseURL: "https://fir-chatapp-c0c8b.firebaseio.com",
//   projectId: "fir-chatapp-c0c8b",
//   storageBucket: "fir-chatapp-c0c8b.appspot.com",
//   messagingSenderId: "369550551103",
//   appId: "1:369550551103:web:a83e1c7b529389c95ff08a",
//   measurementId: "G-PGWLJJ7QEZ"
// };

export default class ChatBox extends React.Component {



render(){
    return (
        <View style = {styles.container}>
            <View style={styles.head}>
        <Text >ChatX</Text>
       <TouchableOpacity style={styles.logout}><Text>logout</Text></TouchableOpacity></View>
       
        
      </View>
    );
}
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
     },
     logout:{
         backgroundColor:'red',
         
     },
     head:{
         
     }



})
