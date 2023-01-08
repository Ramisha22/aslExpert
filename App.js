import * as React from 'react';
import {ConversionScreen} from './conversion';
import {NotificationsScreen} from './notification';
import {NotesScreen} from './notes';
import {SignUp} from './signup';
import {Editprofile} from './editProfile';
import { NavigationContainer ,DarkTheme  } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import {Button, Text, View, StyleSheet, TextInput } from 'react-native';

const Stack = createNativeStackNavigator();
const MyTheme = {
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(52, 58, 64)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(255, 255,255)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};
export default function App() {
  
  return (
    <NavigationContainer  theme={MyTheme} styles={styles.container}>
      <Stack.Navigator>
      <Stack.Screen 
        options={{
          title: '',
          headerStyle: {
          backgroundColor: 'rgb(52, 58, 64)',
          }
        }} 
      name="Home" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(52,58,64)'
  }
})



