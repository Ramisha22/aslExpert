import React, { useState } from "react";
import { Switch,Button,TextInput,View, Text,Image,StyleSheet,ImageBackground, Touchable} from 'react-native';
 
function NotificationsScreen() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [isEnabled1, setIsEnabled1] = useState(false);
    const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
    const [isEnabled2, setIsEnabled2] = useState(false);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
    const [isEnabled3, setIsEnabled3] = useState(false);
    const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);

return(
    <View>
        <View style={{width:'100%',height: 527 ,backgroundColor: '#3E454D',borderRadius:50}}>
        <Text style={styles.text}>Notifications</Text>
        
        <View style={{marginTop:30}}>
            <View style={styles.view}>
            
            <Text style={{marginLeft:9,marginTop:14 ,fontSize:15 ,color: 'rgb(255,255,255)',}}>Allow Notifications</Text>
            <Switch style={{marginTop:-17 }}
        trackColor={{ false: "979797", true: "2D6A4F" }}
        thumbColor={isEnabled ? "F5F5F5" : "F5F5F5"}
        onValueChange={toggleSwitch}
        value={isEnabled}
        />
            </View>
            <View style={styles.view}>
                <Text style={{marginLeft:9,marginTop:14,fontSize:15 ,color: 'rgb(255,255,255)', }}
                >Motivational Quotes</Text>
                <Switch style={{marginTop:-17 }}
        trackColor={{ false: "979797", true: "2D6A4F" }}
        thumbColor={isEnabled1 ? "F5F5F5" : "F5F5F5"}
        onValueChange={toggleSwitch1}
        value={isEnabled1}
        />
            </View>
            <View style={styles.view}>
                <Text style={{marginLeft:9,marginTop:14 ,fontSize:15 ,color: 'rgb(255,255,255)',}}
                >Quizzes Update</Text>
                <Switch style={{marginTop:-17 }}
        trackColor={{ false: "979797", true: "2D6A4F" }}
        thumbColor={isEnabled2 ? "F5F5F5" : "F5F5F5"}
        onValueChange={toggleSwitch2}
        value={isEnabled2}
        />
            </View>
            <View style={styles.view}>
                <Text style={{marginLeft:9,marginTop:14 ,fontSize:15 ,color: 'rgb(255,255,255)',}}
                 >Activity Update</Text>
                <Switch style={{marginTop:-17 }}
        trackColor={{ false: "979797", true: "2D6A4F" }}
        thumbColor={isEnabled3 ? "F5F5F5" : "F5F5F5"}
        onValueChange={toggleSwitch3}
        value={isEnabled3}
        />
            </View>
        </View>
        <Image source={require('./images/g1.png')} style={styles.img}>
            
        </Image>
        

        </View>
        
    </View>
);
}
export{NotificationsScreen}
const styles = StyleSheet.create({
    text: {
    color: 'rgb(255,255,255)',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize:25,
    fontWeight:'bold',
    opacity:1,
    marginTop:30,
    textAlign:'center',
    },
    view:{
        backgroundColor: '#8E8E93',
        height:50,
        textAlign:'center',
        width:'90%',
        margin:20,
        marginLeft:20,
        borderRadius:25,

    },
    img:{
        margin:70
    }
    
})