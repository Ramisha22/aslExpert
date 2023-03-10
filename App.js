import * as React from 'react';
import { ConversionScreen } from './conversion';
import { NotificationsScreen } from './notification';
import { NotesScreen } from './notes';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { SignUp } from './signup';
import { Login } from './SignIn';
import { Feedback } from './feedback';
import { Splash } from './Splash';
import { Welcome } from './welcome';
import { Forgotpass } from './forgotpassword';
import { Drawerscreen } from './drawer';
import { LearnASL } from './learn';
import { Notes } from './displayNotes';
import { Editprofile } from './editProfile';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { Button, Text, View, StyleSheet, TextInput } from 'react-native';


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
    <NavigationContainer theme={MyTheme} styles={styles.container}>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false
          }}
          name="splash" component={Splash} />
      <Stack.Screen
          options={{
            title: '',
            headerStyle: {
              backgroundColor: 'rgb(52, 58, 64)',
            }
          }}
          name='drawer' component={Drawerscreen} />
      <Stack.Screen
          options={{
            title: '',
            headerStyle: {
              backgroundColor: 'rgb(52, 58, 64)',
            }
          }}
          name="dnotes" component={Notes} />
      
        <Stack.Screen
          options={{
            title: '',
            headerStyle: {
              backgroundColor: 'rgb(52, 58, 64)',
            }
          }}
          name="learn" component={LearnASL} />
        <Stack.Screen
          options={{
            title: '',
            headerStyle: {
              backgroundColor: 'rgb(52, 58, 64)',
            }
          }}
          name="notes" component={NotesScreen} />
        
        
        <Stack.Screen
          options={{
            title: '',
            headerStyle: {
              backgroundColor: 'rgb(52, 58, 64)',
            }
          }}
          name="feedback" component={Feedback} />
        <Stack.Screen
          options={{
            title: '',
            headerStyle: {
              backgroundColor: 'rgb(52, 58, 64)',
              headerBackVisible: false,
            }
            , headerLeft: () => <></>,
          }}
          name="welcome" component={Welcome} />
        <Stack.Screen
          options={{
            title: '',
            headerStyle: {
              backgroundColor: 'rgb(52, 58, 64)',
              headerBackVisible: false,
            }
          }}
          name="signup" component={SignUp} />
        <Stack.Screen
          options={{
            title: '',
            headerStyle: {
              backgroundColor: 'rgb(52, 58, 64)',
            }
          }}
          name="notification" component={NotificationsScreen} />


        <Stack.Screen
          options={{
            title: '',
            headerStyle: {
              backgroundColor: 'rgb(52, 58, 64)',
            }
          }}
          name="login" component={Login} />

        <Stack.Screen
          options={{
            title: '',
            headerStyle: {
              backgroundColor: 'rgb(52, 58, 64)',
            }
          }}
          name='ForgotPassword' component={Forgotpass} />
        
        <Stack.Screen
          options={({ navigation }) => ({

            title: '',
            headerStyle: {
              backgroundColor: 'rgb(52, 58, 64)',
            },
            headerRight: () => (
              <Ionicon name="settings-outline" style={{ color: 'rgba(36, 114, 79, 1)' }} size={28}
                onPress={() => { navigation.navigate('drawer') }}
              />
            ),
          })}
          name='conversion' component={ConversionScreen} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(52,58,64)'
  }
})



