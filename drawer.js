import * as React from 'react';
import { FlatList ,TouchableOpacity, Button,TextInput,View, Text,Image,StyleSheet,ImageBackground, Touchable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicon from 'react-native-vector-icons/Ionicons' ;
import { auth, db } from './firebase';
import  { useState, useEffect } from "react";
import { Searchbar } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {onValue ,remove,database,getDatabase, ref, set, push, update, onChildChanged, onChildRemoved } from "firebase/database";
import { getAuth, deleteUser } from "firebase/auth";
import { StackActions } from '@react-navigation/native';

function Drawerscreen ({ navigation, route }){
  const[id,setId]=useState('');
  const[email,setEmail]=useState('');
  const fetchdata = async () => {
    setId(await AsyncStorage.getItem('userId'));
    
    setEmail(await AsyncStorage.getItem('useremail'));
  }
  
  useEffect(() => {
    setTimeout(() => {
      fetchdata();
      console.log('Data retrived');
  }, 1000);
  },[])
  
  
    const deleteItem=(id)=>{
      fetchdata();
     
const auth = getAuth();
const user = auth.currentUser;

deleteUser(user).then(() => {
}).catch((error) => {
  
  // ...
});
      const dbRef = ref(db, '/user/'+id);
      onValue(dbRef, (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          const childKey = id;
          console.log(childKey);
          const childData = childSnapshot.val();          
            
            remove(dbRef).then(()=>{
              alert('user Removed!');
              navigation.dispatch(StackActions.popToTop());
            })
          
        });
      }, {
        onlyOnce: true
      });
}
  return (
    <View>
    <Searchbar
     placeholder="Search" style={{
         alignSelf: 'center',
         backgroundColor: 'rgba(142, 142, 147, 0.33)' ,color: 'white', borderRadius: 20, width: 390,height:40
       }}
   /> 


<Ionicon name="md-person-circle-outline" style={{ marginTop:0,color:'white',marginLeft:20}} size={60}/>  
      <View style={{flexDirection:'row'}} >
      <View style={{flexDirection:'column'}} >
       <Text style={{color:'white',marginLeft:20,  marginTop:15, fontSize: 17}}>{email}</Text>
       <Text style={{color:'white',marginLeft:20,  marginTop:10, fontSize: 13}}></Text></View>
        
      <View style={{flexDirection:'column'}} >
      
       </View>
   

       <TouchableOpacity 
          style={{ marginTop:0,marginLeft:90, width: 90,height:40,backgroundColor: 'rgba(36, 114, 79, 1)',borderRadius:40}}>
          <Text
            style={{
              fontSize:16,
              alignSelf: 'center',
              color: 'white',
             marginTop:6
             
            }}>
            Edit
          </Text>
        </TouchableOpacity>
         </View> 

         <View >
        
        <TouchableOpacity  onPress={()=>navigation.navigate('notification')} style={{
            alignSelf: 'center',
            borderRadius: 20,
            borderColor: 'rgba(0, 119, 72, 1)',
            width: 390,
            height: 40,
            marginTop:10,
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            justifyContent: 'center',
          }}> 
          <Text
            style={{
              fontSize:16,
              fontWeight: 'bold',
              color: 'white',
              padding: 0,
              textAlign: 'center',
            }}>
            Notifications
          </Text>
        </TouchableOpacity>

        
        </View>
        <View >
        
        <TouchableOpacity    onPress={() => deleteItem(id)} style={{
            alignSelf: 'center',
            borderRadius: 20,
            borderColor: 'rgba(0, 119, 72, 1)',
            width: 390,
            height: 40,
            marginTop:10,
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            justifyContent: 'center',
          }}> 
          <Text
            style={{
              fontSize:16,
              fontWeight: 'bold',
              color: 'white',
              padding: 0,
              textAlign: 'center',
            }}>
            Deactivate Account
          </Text>
        </TouchableOpacity>

        
        </View>
        
        <View >
        
        <TouchableOpacity onPress={()=>navigation.navigate('learn')}
         style={{
            alignSelf: 'center',
            borderRadius: 20,
            borderColor: 'rgba(0, 119, 72, 1)',
            width: 390,
            height: 40,marginTop:15,
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            justifyContent: 'center',
          }}> 
          <Text
            style={{
              fontSize:16,
              fontWeight: 'bold',
              color: 'white',
              
              textAlign: 'center',
            }}>
            Learn ASL
          </Text>
        </TouchableOpacity>

        
        </View>
        <View >
        
        <TouchableOpacity onPress={()=>navigation.navigate('feedback')}
        style={{
            alignSelf: 'center',
            borderRadius: 20,
            borderColor: 'rgba(0, 119, 72, 1)',
            width: 390,
            height: 40,marginTop:15,
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            justifyContent: 'center',
          }}> 
          <Text
            style={{
              fontSize:16,
              fontWeight: 'bold',
              color: 'white',
              
              textAlign: 'center',
            }}>
           Feedback
          </Text>
        </TouchableOpacity>

        
        </View>
        <View >
        
        <TouchableOpacity style={{
            alignSelf: 'center',
            borderRadius: 20,
            borderColor: 'rgba(0, 119, 72, 1)',
            width: 390,
            height: 40,marginTop:15,
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            justifyContent: 'center',
          }}> 
          <Text
            style={{
              fontSize:16,
              fontWeight: 'bold',
              color: 'white',
              
              textAlign: 'center',
            }}>
            Your Activity
          </Text>
        </TouchableOpacity>

        
        </View>
        <View >
        
        <TouchableOpacity style={{
            alignSelf: 'center',
            borderRadius: 20,
            borderColor: 'rgba(0, 119, 72, 1)',
            width: 390,
            height: 40,marginTop:15,
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            justifyContent: 'center',
          }}> 
          <Text
            style={{
              fontSize:16,
              fontWeight: 'bold',
              color: 'white',
              
              textAlign: 'center',
            }}>
           About Us
          </Text>
        </TouchableOpacity>

        
        </View>
        <View >
        
        <TouchableOpacity style={{
            alignSelf: 'center',
            borderRadius: 20,
            borderColor: 'rgba(0, 119, 72, 1)',
            width: 390,
            height: 40,marginTop:15,
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            justifyContent: 'center',
          }}> 
          <Text
            style={{
              fontSize:16,
              fontWeight: 'bold',
              color: 'white',
              
              textAlign: 'center',
            }}>
            Terms of use
          </Text>
        </TouchableOpacity>

        
        </View>
<View>
<ImageBackground resizeMode="cover"   
source={require('./madimages/screen1/circles.png')}      
 style={{ height: 370, width: 290, marginLeft: -150, }}>
     
        <TouchableOpacity
        onPress={()=>navigation.navigate('login')}
          style={{
            alignSelf: 'center',
            borderRadius: 20,
            borderColor: 'rgba(0, 119, 72, 1)',
            width: 390,
            height: 45,
            backgroundColor: 'rgba(36, 114, 79, 1)',
            marginTop: 30,
            marginLeft: 420,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: 'white',
              padding: 0,
              textAlign: 'center',
            }}>
            Sign Out
          </Text>
        </TouchableOpacity>
        </ImageBackground>
        </View></View>
       
  

  );
}
export {Drawerscreen}