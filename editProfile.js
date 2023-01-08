import React, { useState } from "react";
import {TouchableOpacity ,TextInput,View, Text,Image,StyleSheet,ImageBackground, Touchable} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons' ;


function Editprofile(){
return(
    <View>
        <Text style={styles.text}>Edit Profile</Text> 
        <Ionicon name="md-person-circle-outline" style={{color:'#408C6A',marginLeft:140}} size={110}/>  
        <View>
            <TouchableOpacity><Text style={{color:'#F5F5F5',marginLeft:140}}>Add Profile photo</Text></TouchableOpacity>
        </View>    
        <View style={styles.view1}>
            <Ionicon name="at" style={{color:'#408C6A'}} size={28}/> 
            <TextInput placeholder="Username"></TextInput>
        </View>
        <View style={styles.view1}>
            <Ionicon name="mail-outline" style={{color:'#408C6A'}} size={28}/> 
            <TextInput placeholder="Email"></TextInput>
        </View>
        <View style={styles.view1}>
            <Ionicon name="key" style={{color:'#408C6A'}} size={28}/> 
            <TextInput placeholder="password"></TextInput>
        </View>
        <View style={styles.view1}>
            <Ionicon name="calendar" style={{color:'#408C6A'}} size={28}/> 
            <TextInput placeholder="Date of Birth"></TextInput>
        </View>
        <ImageBackground  resizeMode="cover" source={require('./images/g2.png')} style={styles.imageBackground} >
        <TouchableOpacity
          style={{
            alignSelf: 'center',
            borderRadius: 20,
            borderColor: 'rgba(0, 119, 72, 1)',
            width: 370,
            height: 45,
            backgroundColor: 'rgba(36, 114, 79, 1)',
            marginTop: 20,
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
            Save
          </Text>
        </TouchableOpacity>
        </ImageBackground>
        

    </View>
);
}
export{Editprofile}
const styles = StyleSheet.create({
    text: {
    color: 'rgb(255,255,255)',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize:25,
    fontWeight:'bold',
    textAlign:'center'
    },
    text2: {
        color: 'rgb(255,255,255)',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontSize:15,
        opacity:1,
        marginTop:7,
    },
    view1:{
        backgroundColor: '#8E8E93',
        flexDirection:'row',
        alignItems:'center',
        height:50,
        width:'90%',
        marginLeft:20,
        marginTop:30,
        borderRadius:21,
        padding:6

    },
    btn:{
        borderRadius:15,
        width:'90%',
        margin:24,
        height:'10%',
        textAlign:'center',
        backgroundColor: '#007748',

    },
    imageBackground: {
        width:'100%',
        height:'50%',
        opacity:1,
       
    },
})