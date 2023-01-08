import * as React from 'react';
import { Button,TextInput,View, Text,Image,StyleSheet,ImageBackground, Touchable} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function ConversionScreen() {
    return (
      <View>    
        
        <ImageBackground  resizeMode="cover" source={require('./images/Ellipse1.png')} style={styles.imageBackground} >
            <Text style={styles.text}>Convert</Text>    
            <Text style={styles.text2 } >Text Into Sign Language</Text>     
            <TextInput multiline={true} autoFocus={true} placeholder="Enter text here" style={styles.box}>
            </TextInput>
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
            Convert
          </Text>
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
    fontSize:28,
    opacity:1,
    marginTop:30,
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
        height: 200,
        marginLeft:10,
        borderRadius:15,
    },
    imageBackground: {
        width:'100%',
        height:'85%',
        opacity:1,
        marginTop:50,
       
    },
  })
export {ConversionScreen}