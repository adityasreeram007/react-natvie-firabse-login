
import React from 'react';

import { StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View,Image, Systrace} from 'react-native';
import  firebase from "firebase";
import ChatBox from './ChatBox';
import data from './store.json'


const firebaseConfig = {
  apiKey: "AIzaSyCR7vyHJeTOcHyvjhsq7qJm4WbEkdSeldo",
  authDomain: "fir-chatapp-c0c8b.firebaseapp.com",
  databaseURL: "https://fir-chatapp-c0c8b.firebaseio.com",
  projectId: "fir-chatapp-c0c8b",
  storageBucket: "fir-chatapp-c0c8b.appspot.com",
  messagingSenderId: "369550551103",
  appId: "1:369550551103:web:a83e1c7b529389c95ff08a",
  measurementId: "G-PGWLJJ7QEZ"
};
try{
firebase.initializeApp(firebaseConfig)}
catch(error)
{}
export default class App extends React.Component {
  
   state={
     username:"",
     password:"",
     loggedin:false
   }
  
   async login(email,pass){
    try {
      let x=await firebase.auth()
      .signInWithEmailAndPassword(email, pass);
      
      this.setState({loggedin:true})
      
     

  } catch (error) {
      console.log(error.toString())
  }
    
   }
 
   handleEmail=(text)=>{
    this.setState({username:text})   
    console.log(data)
  }
  handlePass=(text)=>{
    this.setState({password:text})   
  }
   render() {
    
     if ((this.state.loggedin)){
      return (
         <View style = {styles.container}>
           <Text style={styles.head}>ChatX</Text>
          <Image source ={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Caution_UFO.svg/768px-Caution_UFO.svg.png'}} style={{  width: 140, height: 140  }}/>
          
          <TextInput style={styles.input} placeholder="Username" id="username" autoCapitalize="none" onChangeText={this.handleEmail}/>
          <TextInput style={styles.input} placeholder="Password" autoCapitalize="none" onChangeText={this.handlePass}/>
           <TouchableOpacity style={styles.submit} onPress={
             ()=>this.login(this.state.username,this.state.password)
           }>
             <Text style={styles.submitText}>Auth</Text>
           </TouchableOpacity>
         </View>
      );
   }
   else{
     return (
     <ChatBox/>
     )
   }
  }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
   },
   head:{
     fontSize:40,
   },
   input:{
     fontSize:25,
     marginTop:40,
     height:40,
     width:240,
     borderStyle:'solid',
     borderWidth:1,
     borderRadius:5,
     borderColor:'black',
     textAlign:"center"
     
   },
   submit:{
     marginTop:40,
     backgroundColor:'#0275d8',
     borderRadius:5,
     width:90,
     height:42,
     textAlign:"center",
     padding:3
     
    
     
   },
   submitText:{
    fontSize:25,
    textAlign:"center"

    
   }
});