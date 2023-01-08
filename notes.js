import * as React from 'react';
import { Button,TextInput,View, Text,Image,StyleSheet,ImageBackground, Touchable} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicon from 'react-native-vector-icons/Ionicons' ;

function NotesScreen() {
    return (
      <View>    
        
        <ImageBackground  resizeMode="cover" source={require('./images/Ellipse1.png')} style={styles.imageBackground} >
            <Text style={styles.text}>
                Notes</Text> 
            <View style={styles.box}>
            <TextInput multiline={true} autoFocus={true} placeholder="Enter text here" >
            </TextInput>
            </View>        
            <TouchableOpacity
          style={{
            alignSelf: 'center',
            borderRadius: 15,
            borderColor: 'rgba(0, 119, 72, 1)',
            width: 135,
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
            Add Note
          </Text>
        </TouchableOpacity>
        <Ionicon name='trash-outline' style={{marginLeft:90,marginTop:-35}}  size={28}/> 
        <Ionicon name="bookmark-outline" style={{marginLeft:275,marginTop:-30}}   size={28}/>
        </ImageBackground>
        
      </View>
    );
  }
  const styles = StyleSheet.create({
    text: {
    color: 'rgb(255,255,255)',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize:28,
    opacity:1,
    marginLeft:13,
    fontWeight:'bold',
    },
    text2: {
        color: 'rgb(255,255,255)',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontSize:18,
        opacity:1,
        marginTop:2,
        fontWeight:'bold',
    },
    box: {
        backgroundColor: 'rgb(142,147,147)',
        margin:20,
        width:'95%',
        height: 490,
        marginLeft:10,
        borderRadius:15,
    },
    imageBackground: {
        width:'100%',
        height:'80%',
        opacity:1,
        marginTop:30,
       
    },

  })
export {NotesScreen}