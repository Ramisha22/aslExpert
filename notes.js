import React, { useState, useEffect } from "react";
import { Button, TouchableOpacity, TextInput, View, Text, Image, StyleSheet, ImageBackground, Touchable, Pressable } from 'react-native';

import AsyncStorage from "@react-native-async-storage/async-storage";
import { getDatabase, ref, onValue, set, push, update, onChildChanged, onChildRemoved, database } from "firebase/database";
import { auth, db } from './firebase';
import Ionicon from 'react-native-vector-icons/Ionicons';

function NotesScreen() {
  const [review, setReview] = useState('');
  const [list, setList] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      console.log(await AsyncStorage.getItem('userId'));

    }

  });
  const store1 = async () => {

    const store = ref(db, 'user/' + await AsyncStorage.getItem('userId') + '/notes');
    const itemsRef = ref(db, 'user/' + await AsyncStorage.getItem('userId') + '/notes');
    onValue(itemsRef, snapshot => {
      const itemList = Object.values(snapshot.val());
      setList(itemList);
    });
    update(store, {
      [list.length++]: review,
    });
    alert('Note saved');
    setReview('');
  }

  return (
    <View>

      <ImageBackground resizeMode="cover" source={require('./images/Ellipse1.png')} style={styles.imageBackground} >
        <Text style={styles.text}>
          Notes</Text>
        <View style={styles.box}>
          <TextInput multiline={true} value={review} onChangeText={setReview} placeholder="Enter text here" >
          </TextInput>
        </View>
        <TouchableOpacity 
          onPress={store1}
         style={{
          color: 'rgb(255,255,255)', borderRadius: 15,
          width: '35%',
          margin: 24,
          height: '8%',
          textAlign: 'center',
          marginLeft: 30,
          marginTop: 17,
          backgroundColor: 'rgba(64, 154, 114, 1)'
        }}>
          <Text style={styles.text2}>
            Add notes</Text>

          <Ionicon name="bookmark-outline" style={{marginTop:-23}} size={28} />
        </TouchableOpacity>
        <TouchableOpacity 
        style={{
          color: 'rgb(255,255,255)', borderRadius: 15,
          width: '35%',
          margin: 24,
          height: '8%',
          textAlign: 'center',
          marginLeft: 240,
          marginTop: -65,
          backgroundColor: 'rgba(64, 154, 114, 1)'
        }}>
          <Text style={styles.text2}>
            Delete </Text>
          <Ionicon name='trash-outline' style={{ marginTop:-23}} size={28} />
        </TouchableOpacity>

      </ImageBackground>

    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    color: 'rgb(255,255,255)',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize: 28,
    opacity: 1,
    marginLeft: 13,
    fontWeight: 'bold',
  },
  text2: {
    color: 'rgb(255,255,255)',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize: 18,
    opacity: 1,
    marginTop: 2,
    marginLeft:10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  box: {
    backgroundColor: 'rgb(100,100,100)',
    margin: 20,
    width: '95%',
    height: 490,
    marginLeft: 10,
    borderRadius: 15,
  },
  imageBackground: {
    width: '100%',
    height: '80%',
    opacity: 1,
    marginTop: 30,

  },

})
export { NotesScreen }