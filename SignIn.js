import React, { useState, useEffect } from "react";
import { TouchableOpacity, TextInput, View, Text, Image, StyleSheet, ImageBackground, } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth,db } from './firebase';
import { ref } from "firebase/database";
import DatePicker from 'react-native-date-picker'
import LearnASL from './learn';

import { set } from 'firebase/database';

function Login({ navigation, route }) {
  const [password, setPassword] = useState('');
  const [email, setemail] = useState('');
  const [error, setError] = useState('');
  const [error1, setError1] = useState('');
  const [show, setShow] = useState(false);
  const showPass = () => {
    if (show === false) {
      setShow(true);
      return;
    }
    setShow(false);
  };
  const storeData = async value => {
		try {
      console.log('j');
			await AsyncStorage.setItem('userId', value);
      console.log(await AsyncStorage.getAllKeys());
		} catch (e) {
			throw e;
		}
	};

  const getData =()=>{
    setError('');
    setError1('');
  signInWithEmailAndPassword(auth, email, password)
  .then(userCredential => {
    storeData(userCredential.user.uid);
    navigation.navigate('learn');
  })
  .catch(err => {
    console.log(err.code)
    if (err.code === 'auth/invalid-email')
      setError('Invalid Email entered .');
    else if (err.code ==='auth/wrong-password')
      setError1('Wrong password')
    else if (err.code ==='auth/user-not-found'){
      setError('User not found plz try again')
      setemail('')
      setPassword('')
    }
      
  });}
    return (
      <View>
        <View
          style={{
            alignSelf: 'center',
            backgroundColor: 'rgba(52, 58, 64, 1)',
            height: 700,
            width: 450,
          }}>
          <View
            style={{
              marginTop: 50,
              alignSelf: 'center',
              width: 300,
              height: 150,
            }}>
            <Image
              source={require('./images/logo1.png')}
              style={{ alignSelf: 'center' ,height:100,width:180 }}
            />
          </View>
  
          <View style={styles.view1}>
            <Ionicon name="mail-outline" style={{ color: 'rgba(36, 114, 79, 1)' }} size={28} />
            <TextInput placeholderTextColor={'grey'} style={{ color: 'white' }}
              placeholder="Email"value={email} onChangeText={text=>{setemail(text)}}
            ></TextInput>
          </View>
          {error !== '' ? (
						<Text
							style={{
								color: 'rgba(64, 154, 114, 1)',
                textAlign:"right",
								fontSize: 11,
                marginRight:34
							}}>
							{error}
						</Text>
					) : null}
          <View style={styles.view1}>
            <Ionicon name="key" style={{ color: 'rgba(36, 114, 79, 1)' }} size={28} />
            <TextInput  style={{ width: 270 }} secureTextEntry={show ? false : true} value={password} onChangeText={text => setPassword(text) } placeholderTextColor={'grey'}
              placeholder="Password"
            ></TextInput>
            <Ionicon
              size={18}
              style={{ marginLeft:35 }}
              name='eye-outline'
              onPress={() => showPass()}
            />
          </View>
          {error1 !== '' ? (
						<Text
							style={{
								color:'rgba(64, 154, 114, 1)',
                textAlign:"right",
								fontSize: 11,
                marginRight:34
							}}>
							{error1}
						</Text>
					) : null}
          <View>
            <TouchableOpacity
              style={{
                width: 480,
                height: 50,
                marginTop: 5,
                justifyContent: 'center',
              }}
              onPress={() => navigation.navigate('ForgotPassword')}>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: 'Regular',
                  color: 'rgba(64, 154, 114, 1)',
                  padding: 0,
                  textAlign: 'center',
                  marginLeft: 200,
                }}>
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>
  
          <TouchableOpacity onPress={getData}
            style={{
              alignSelf: 'center',
              borderRadius: 20,
              borderColor: 'rgba(0, 119, 72, 1)',
              width: 370,
              height: 50,
              backgroundColor: 'rgba(36, 114, 79, 1)',
              marginTop: 70,
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
              Login
            </Text>
          </TouchableOpacity>
  
          <View style={{ marginLeft: 120, marginTop: 6, flexDirection: 'row' }}>
            <Text style={{ fontSize: 13, fontWeight: 'Regular', color: 'white' }}>
              Don't have an account?{' '}
            </Text>
  
            <TouchableOpacity onPress={() => navigation.navigate('signup')}>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: 'Regular',
                  color: 'rgba(64, 154, 114, 1)',
                  padding: 0,
                }}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
  export { Login }


const styles = StyleSheet.create({

  view1: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    width: '86%',
    marginLeft: 30,
    marginTop: 30,
    borderRadius: 21,
    padding: 6,
    color: 'white'
  }})