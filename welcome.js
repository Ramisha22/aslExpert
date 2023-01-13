import React, { useState, useEffect } from "react";
import { TouchableOpacity, TextInput, View, Text, Image, StyleSheet, ImageBackground, } from 'react-native';

function Welcome({ navigation, route }) {
    return(
    <View>
      <View
        style={{
          alignSelf: 'center',
          backgroundColor: 'rgba(52, 58, 64, 1)',
          height: 700,
          width: 450,
        }}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            color: 'white',
            alignSelf: 'center',
            marginTop: 15,
          }}>
          Welcome to ASL Expert
        </Text>

        <View style={{ marginTop: 50, alignSelf: 'center', width: 350 }}>
          <Image

            source={require('./images/vectr.png')}
            style={{ width:'80%',height: '70%',alignSelf: 'center'}}
          />
        </View>

        <TouchableOpacity
          style={{
            alignSelf: 'center',
            borderRadius: 20,
            borderColor: 'rgba(0, 119, 72, 1)',
            width: 370,
            height: 50,
            backgroundColor: 'rgba(36, 114, 79, 1)',
            marginTop: -60,
            justifyContent: 'center',
          }}
          onPress={() => navigation.navigate('login')}>
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

        <TouchableOpacity
          style={{
            alignSelf: 'center',
            borderRadius: 20,
            borderColor: 'rgba(0, 119, 72, 1)',
            width: 370,
            height: 50,
            backgroundColor: 'rgba(36, 114, 79, 1)',
            marginTop: 20,
            justifyContent: 'center',
          }}
          onPress={() => navigation.navigate('signup')}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: 'white',
              padding: 0,
              textAlign: 'center',
            }}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export {Welcome}