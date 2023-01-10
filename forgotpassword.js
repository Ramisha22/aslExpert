import { StyleSheet, Text, View , Image, TouchableOpacity, TextInput, Pressable, Alert} from 'react-native';
import React, {useState} from 'react';
import { auth,db } from './firebase';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
function Forgotpass({ navigation, route }) {
    const [email, setemail] = useState('');
    const [error, setError] = useState('');
    const getData =()=>{
        sendPasswordResetEmail(auth, email)
        .then(() => {
            // Password reset email sent!
            // ..
            console.log('done!');
            alert('reset link sent');
            navigation.navigate('login')
        })
        .catch((error) => {
            console.log(error.code);
            // ..
        });
    }
    return (
      <View
        style={{
          backgroundColor: 'rgba(52, 58, 64, 1)',
          height: 700,
          width: 450,
        }}>
        <View
          style={{
            backgroundColor: 'rgba(70, 75, 80, 1)',
            height: 510,
            width: 420,
            marginTop: 10,
            borderRadius: 60,
          }}>
          <View style={{ marginTop: 10, alignSelf: 'center', width: 450 }}>
            <Image
              source={require('./images/forgotpassword.png')}
              style={{ height: 200, width: 200, alignSelf: 'center' }}
            />
          </View>
  
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'white',
              alignSelf: 'center',
              marginTop: 13,
            }}>
            Forgot Password
          </Text>
          <Text></Text>
          <Text
            style={{
              fontSize: 13,
              fontWeight: 'regular',
              color: 'white',
              padding: 0,
              textAlign: 'center',
            }}>
            Please enter your email to request a password reset.
          </Text>
          <TextInput
            placeholder="Email" placeholderTextColor={'grey'}
            value={email} onChangeText={setemail}
            style={{
              color: 'white',
              alignSelf: 'center',
              borderRadius: 20,
              borderColor: 'rgba(0, 119, 72, 1)',
              width: 380,
              height: 50,
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              marginTop: 30,
              justifyContent: 'center',
              fontSize: 17,
              paddingLeft: 10,
            }}></TextInput>
  
          <TouchableOpacity
            style={{
              alignSelf: 'center',
              borderRadius: 20,
              borderColor: 'rgba(0, 119, 72, 1)',
              width: 370,
              height: 50,
              backgroundColor: 'rgba(36, 114, 79, 1)',
              marginTop: 30,
              justifyContent: 'center',
            }}
            onPress={getData}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: 'white',
                padding: 0,
                textAlign: 'center',
              }}>
              Send Code
            </Text>
          </TouchableOpacity>
        </View>
  
        <Image
          source={require('./images/circles.png')}
          style={{ height: 370, width: 290, marginLeft: -150, }}
        />
  
      </View>
    );
  }
export {Forgotpass}