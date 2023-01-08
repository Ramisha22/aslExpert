import React, { useState } from "react";
import {TouchableOpacity ,TextInput,View, Text,Image,StyleSheet,ImageBackground, Touchable} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons' ;

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth,db } from './firebase';
import { ref } from "firebase/database";

import { set } from 'firebase/database';

function SignUp(){
  const [password, setPassword] = useState('');
  const [email, setemail]= useState('');
  const [name, setname] = useState('');
  const [show, setShow] = useState(false);
	const [error, setError] = useState('');
  const showPass = () => {
		if (show === false) {
			setShow(true);
			return;
		}
		setShow(false);
	};
    const registerUser=()=>{
            const a=1;
           createUserWithEmailAndPassword(auth, email, password)
          .then(() => {
            // Signed in 
            writeUserData(email,name);
            console.log('done!!!!');
            a=2;
            console.log(a);
            //const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            if (err.code === 'auth/invalid-email')
					      setError('Invalid Email entered.');
				    else if (err.code === 'auth/weak-password')
					      setError('Weak password entered.');
            // ..
          });
          
          
        }
        function writeUserData(email,name) {
    
          set(ref(db, 'user/' + "123"), {
            name: name,
            email: email,
            
          });
        }
return(
    <View>
        <Text style={styles.text}>Get Started!</Text>    
        <Text style={styles.text2} >Create an account to continue</Text>     
        <TouchableOpacity style={styles.view1}>
            <Ionicon name="at" style={{color:'#408C6A'}} size={28}/> 
            <TextInput  placeholder="Username" value={name} onChangeText={setname}></TextInput>
        </TouchableOpacity>
        <TouchableOpacity style={styles.view1}>
            <Ionicon name="mail-outline" style={{color:'#408C6A'}} size={28}/> 
            <TextInput value={email} onChangeText={setemail} placeholder="Email"></TextInput>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.view1}>
            <Ionicon name="key" style={{color:'#408C6A'}} size={28}/> 
            <TextInput value={password} onChangeText={setPassword } placeholder="Password"></TextInput>
        </TouchableOpacity>
        <TouchableOpacity style={styles.view1}>
            <Ionicon name="key" style={{color:'#408C6A'}} size={28}/> 
            <TextInput placeholder="Confirm Password"></TextInput>
        </TouchableOpacity>
        < TouchableOpacity style={styles.view1}>
            <Ionicon name="calendar" style={{color:'#408C6A'}} size={28}/> 
            <TextInput placeholder="Date of Birth"></TextInput>
        </TouchableOpacity>
        <ImageBackground  resizeMode="cover" source={require('./images/g2.png')} style={styles.imageBackground} >
        <TouchableOpacity  onPress={registerUser} style={styles.btn}>
                <Text style={{color: 'rgb(255,255,255)',textAlign:'center',fontSize:17,marginTop:10}} >SignUp</Text>
        </TouchableOpacity>
        </ImageBackground>
        

    </View>
);
}
export{SignUp}

const styles = StyleSheet.create({
    text: {
    color: 'rgb(255,255,255)',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize:25,
    fontWeight:'bold',
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