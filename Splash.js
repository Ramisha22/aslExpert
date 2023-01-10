import React, { useState, useEffect } from "react";
import { TouchableOpacity, TextInput, View, Text, Image, StyleSheet, ImageBackground, } from 'react-native';

function Splash({ navigation, route }) {
    useEffect(() => {
        setTimeout(() => {
        navigation.navigate('welcome')},3000);
      });
    return(
        
            <Image
				source={require('./images/main1.png')}
                style={{
                    width:400 ,height:'100%'
                  }}    
			></Image>
        

    );
}

export { Splash }