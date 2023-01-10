import * as React from 'react';
import { TouchableOpacity, Button,TextInput,View, Text,Image,StyleSheet,ImageBackground, Touchable} from 'react-native';


function LearnASL  ({ navigation,route}) {
    return (
      <View >     
       
            <Text style={styles.c_text}>LearnASL</Text>    
            <Text style={styles.c_text2 } >Learn ASL alphabets, solve quizzes, </Text>  
            <Text style={styles.c_text2 } >make notes and much more!  </Text>  
            <View style={{flexDirection: 'row'}}>
            
        
        <TouchableOpacity
          style={{marginLeft: 15,marginTop:23, width: 180,height:200,   backgroundColor: 'rgba(36, 114, 79, 1)',borderRadius:10}}>
          <Text
            style={{
               
              fontSize:16,
              alignSelf: 'center',
              color: 'white',
             marginTop:80,
             fontWeight:'bold'
            }}>
            Send Feeback
          </Text>
 
        </TouchableOpacity>
 
        <TouchableOpacity
          style={{ marginLeft:20,marginTop:23, width: 180,height:200,  backgroundColor: 'rgba(36, 114, 79, 1)',borderRadius:10}}>
          <Text
            style={{
              fontSize:16,
              alignSelf: 'center',
              color: 'white',
             marginTop:13,
             marginTop:80,
             fontWeight:'bold'
            }}>
            Delete Feedback
          </Text>
        </TouchableOpacity>
               </View>
        </View>
    
    );
  } 
  export{LearnASL}
   const styles = StyleSheet.create({
    c_text: {
        alignSelf: 'center',
    color: 'rgb(255,255,255)',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize:28,
    opacity:1,
    fontWeight:'bold',
    },
    c_text2: {
        alignSelf: 'center',
        color: 'rgb(255,255,255)',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontSize:18,
        opacity:1,
        marginTop:5,
        fontWeight:'bold',
    },
    c_box: {
        backgroundColor: 'rgb(142,147,147)',
        margin:20,
        width:'95%',
        height: 200,
        marginLeft:10,
        borderRadius:15,
    },
    c_imageBackground: {
        width:'100%',
        height:'85%',
        opacity:1,
        marginTop:50,
       
    },
    c_btn:{
        borderRadius:15,
        width:'80%',
        marginLeft:40,
        height:'30%',
        textAlign:'center',
        backgroundColor: '#007748',

    },
  })