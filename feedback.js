import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getDatabase, ref, onValue,set, push, update, onChildChanged, onChildRemoved,database } from "firebase/database";
import { auth, db } from './firebase';
import { TouchableOpacity, Button, TextInput, View, Text, Image, StyleSheet, ImageBackground, Touchable } from 'react-native';
import { debugErrorMap } from "firebase/auth/react-native";
const Feedback = ({ navigation, route }) => {
  const[id, setId ] = useState('');
  const [review,setReview] = useState('');
  const [list,setList] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      console.log(await AsyncStorage.getItem('userId'));
      setId(await AsyncStorage.getItem('userId'));
    }

  });
  const store1 = async () => { 
    const store = ref(db, 'user/'+await AsyncStorage.getItem('userId')+'/feedback');
    const itemsRef = ref(db, 'user/'+await AsyncStorage.getItem('userId')+'/feedback');
    onValue(itemsRef, snapshot => {
      const itemList = Object.values(snapshot.val());
      setList(itemList);
    });
    update(store, {
      [list.length]: review,
    });
    
    alert('feedback sent');
    setReview('');
  }

  return (
    <View
      style={{

        alignSelf: 'center',
        width: 300,
        height: 150,
      }}>
      <Image
        source={require('./images/logo1.png')}
        style={{ alignSelf: 'center' , width:174 ,height:100}}
      />

      <View>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            color: 'white',
            width: 350,
            marginLeft: 16,
            marginTop: 10
          }}>
          Help us improve through your feedback!
        </Text>
        <TextInput
          placeholder="Email" placeholderTextColor={'grey'}
          style={{
            color: 'white',
            alignSelf: 'center',
            borderRadius: 20,
            borderColor: 'rgba(0, 119, 72, 1)',
            width: 380,
            height: 45,
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            marginTop: 20,
            justifyContent: 'center',
            fontSize: 17,

          }}></TextInput>


        <TextInput value={review} onChangeText={setReview}
          multiline={true} placeholderTextColor={'grey'} placeholder="Enter text here...."
          style={{
            marginTop: 17, color: 'white',
            alignSelf: 'center',
            borderRadius: 20,
            width: 380,
            height: 200
            , backgroundColor: 'rgba(255, 255, 255, 0.1)',
          }}></TextInput>


      </View>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          onPress={store1}
          style={{ marginLeft: -40, marginTop: 23, width: 180, height: 50, backgroundColor: 'rgba(36, 114, 79, 1)', borderRadius: 50 }}>
          <Text
            style={{
              fontSize: 16,
              alignSelf: 'center',
              color: 'white',
              marginTop: 13,
              fontWeight: 'bold'
            }}>
            Send Feeback
          </Text>

        </TouchableOpacity>

        <TouchableOpacity
          onPress={()=>{
            setReview('');
          }}
          style={{ marginLeft: 20, marginTop: 23, width: 180, height: 50, backgroundColor: 'rgba(36, 114, 79, 1)', borderRadius: 50 }}>
          <Text
            style={{
              fontSize: 16,
              alignSelf: 'center',
              color: 'white',
              marginTop: 13,
              fontWeight: 'bold'
            }}>
            Delete Feedback
          </Text>
        </TouchableOpacity>

      </View>
      <View>
        <ImageBackground resizeMode="cover"
          source={require('./images/circles.png')}
          style={{ height: 370, width: 290, marginLeft: -200, }}></ImageBackground>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  c_text: {
    color: 'rgb(255,255,255)',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize: 28,
    opacity: 1,
    marginTop: 30,
    fontWeight: 'bold',
  },
  c_text2: {
    color: 'rgb(255,255,255)',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize: 18,
    opacity: 1,
    marginTop: 2,
    fontWeight: 'bold',
  },
  c_box: {
    backgroundColor: 'rgb(142,147,147)',
    margin: 20,
    width: '95%',
    height: 200,
    marginLeft: 10,
    borderRadius: 15,
  },
  c_imageBackground: {
    width: '100%',
    height: '85%',
    opacity: 1,
    marginTop: 50,

  },
  c_btn: {
    borderRadius: 15,
    width: '80%',
    marginLeft: 40,
    height: '30%',
    textAlign: 'center',
    backgroundColor: '#007748',

  },
})


export { Feedback }