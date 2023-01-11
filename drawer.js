import * as React from 'react';
import { TouchableOpacity, Button,TextInput,View, Text,Image,StyleSheet,ImageBackground, Touchable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicon from 'react-native-vector-icons/Ionicons' ;
import { Searchbar } from 'react-native-paper';

 const Drawer= ({ navigation, route })=> {

  return (
    <View>
    <Searchbar
     placeholder="Search" style={{
         alignSelf: 'center',
         backgroundColor: 'rgba(142, 142, 147, 0.33)' ,color: 'white', borderRadius: 20, width: 390,height:40
        
       }}

   /> 
 
      <View style={{flexDirection:'row'}} >
      <Ionicon name="md-person-circle-outline" style={{ marginTop:0,color:'white',marginLeft:20}} size={60}/>  
      <View style={{flexDirection:'column'}} >
       <Text style={{color:'white',marginLeft:20,  marginTop:15, fontSize: 17}}>Rukayya Kulsoom</Text>
       <Text style={{color:'white',marginLeft:20,  marginTop:10, fontSize: 13}}>rukayyakulsoom@gmail.com</Text></View>
     

       <TouchableOpacity
          style={{ marginTop:25,marginLeft:73, width: 90,height:40,   backgroundColor: 'rgba(36, 114, 79, 1)',borderRadius:40}}>
          <Text
            style={{
              fontSize:16,
              alignSelf: 'center',
              color: 'white',
             marginTop:6
             
            }}>
            Edit
          </Text>
        </TouchableOpacity>
         </View> 

         <View >
        
        <TouchableOpacity style={{
            alignSelf: 'center',
            borderRadius: 20,
            borderColor: 'rgba(0, 119, 72, 1)',
            width: 390,
            height: 40,
            marginTop:10,
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            justifyContent: 'center',
          }}> 
          <Text
            style={{
              fontSize:16,
              fontWeight: 'bold',
              color: 'white',
              padding: 0,
              textAlign: 'center',
            }}>
            Notifications
          </Text>
        </TouchableOpacity>

        
        </View>
        
        <View >
        
        <TouchableOpacity style={{
            alignSelf: 'center',
            borderRadius: 20,
            borderColor: 'rgba(0, 119, 72, 1)',
            width: 390,
            height: 40,marginTop:15,
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            justifyContent: 'center',
          }}> 
          <Text
            style={{
              fontSize:16,
              fontWeight: 'bold',
              color: 'white',
              
              textAlign: 'center',
            }}>
            Learn ASL
          </Text>
        </TouchableOpacity>

        
        </View>
        <View >
        
        <TouchableOpacity 
        onPress={()=>navigation.navigate('feedback')}
         style={{
            alignSelf: 'center',
            borderRadius: 20,
            borderColor: 'rgba(0, 119, 72, 1)',
            width: 390,
            height: 40,marginTop:15,
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            justifyContent: 'center',
          }}> 
          <Text
            style={{
              fontSize:16,
              fontWeight: 'bold',
              color: 'white',
              
              textAlign: 'center',
            }}>
           Feedback
          </Text>
        </TouchableOpacity>

        
        </View>
        <View >
        
        <TouchableOpacity style={{
            alignSelf: 'center',
            borderRadius: 20,
            borderColor: 'rgba(0, 119, 72, 1)',
            width: 390,
            height: 40,marginTop:15,
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            justifyContent: 'center',
          }}> 
          <Text
            style={{
              fontSize:16,
              fontWeight: 'bold',
              color: 'white',
              
              textAlign: 'center',
            }}>
            Your Activity
          </Text>
        </TouchableOpacity>

        
        </View>
        <View >
        
        <TouchableOpacity style={{
            alignSelf: 'center',
            borderRadius: 20,
            borderColor: 'rgba(0, 119, 72, 1)',
            width: 390,
            height: 40,marginTop:15,
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            justifyContent: 'center',
          }}> 
          <Text
            style={{
              fontSize:16,
              fontWeight: 'bold',
              color: 'white',
              
              textAlign: 'center',
            }}>
           About Us
          </Text>
        </TouchableOpacity>

        
        </View>
        <View >
        
        <TouchableOpacity style={{
            alignSelf: 'center',
            borderRadius: 20,
            borderColor: 'rgba(0, 119, 72, 1)',
            width: 390,
            height: 40,marginTop:15,
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            justifyContent: 'center',
          }}> 
          <Text
            style={{
              fontSize:16,
              fontWeight: 'bold',
              color: 'white',
              
              textAlign: 'center',
            }}>
            Terms of use
          </Text>
        </TouchableOpacity>

        
        </View>
<View>
<ImageBackground resizeMode="cover"   
source={require('./images/circles.png')}      
 style={{ height: 270, width: 290, marginLeft: -150, marginTop:150 }}>
     
        <TouchableOpacity
          style={{
            alignSelf: 'center',
            borderRadius: 20,
            borderColor: 'rgba(0, 119, 72, 1)',
            width: 390,
            height: 45,
            backgroundColor: 'rgba(36, 114, 79, 1)',
            marginTop: 30,
            marginLeft: 420,
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
            Sign Out
          </Text>
        </TouchableOpacity>
        </ImageBackground>
        </View></View>
       
  

  );
}
export {Drawer}