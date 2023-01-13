import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getDatabase, ref, onValue, set, push, update, onChildChanged, onChildRemoved, database } from "firebase/database";
import { auth, db } from './firebase';
import { TouchableOpacity, ScrollView, Button, TextInput, View, Text, Image, StyleSheet, ImageBackground, Touchable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';


export { Notes }
function Notes({ navigation, route }) {

    const [list, setList] = useState([]);
    const [list1, setList1] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const store = ref(db, 'user/' + await AsyncStorage.getItem('userId') + '/notes');
            const itemsRef = ref(db, 'user/' + await AsyncStorage.getItem('userId') + '/notes');
            onValue(itemsRef, snapshot => {
                const itemList = Object.values(snapshot.val());
                //   itemList.forEach(element => console.log(element));
                setList1(itemList)
            });
        }
        fetchData();
    }, []);

    console.log(list1);
    return (
        <View >
            <TextInput placeholder="search"
                style={{

                    alignSelf: 'center',
                    backgroundColor: 'rgba(142, 142, 147, 0.33)',
                    color: 'white', borderRadius: 20, width: 370, height: 40

                }} />


            <ScrollView style={{
                scrollView: {

                    color: 'white',
                    marginTop: 15,
                    marginHorizontal: 20,
                },
            }}>{console.log(list1)}
                {list1.map(e => (
                    <TouchableOpacity style={{
                        alignSelf: 'center',
                        backgroundColor: 'rgba(36, 114, 79, 1)',
                        color: 'white', borderRadius: 20, width: 370, height: 40, marginTop: 20, marginLeft: 10

                    }} >
                        <Text style={{
                            fontSize: 16,
                            alignSelf: 'center',
                            color: 'white',
                            marginTop: 6

                        }}>{e}</Text>
                    </TouchableOpacity>
                ))}
            
            <View style={{
                alignSelf: 'center',
                justifyContent: 'center',
                marginRight: 10

            }}>
                   <TouchableOpacity style={{
                    alignSelf: 'center',
                    backgroundColor: 'rgba(36, 114, 79, 1)',
                    color: 'white', borderRadius: 20, width: 370, height: 40, marginTop: 20, marginLeft: 10

                }} >
                    <Text
                        style={{
                            fontSize: 16,
                            alignSelf: 'center',
                            color: 'white',
                            marginTop: 6

                        }}>
                        meowww
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    alignSelf: 'center',
                    backgroundColor: 'rgba(36, 114, 79, 1)',
                    color: 'white', borderRadius: 20, width: 370, height: 40, marginTop: 20, marginLeft: 10

                }} >
                    <Text
                        style={{
                            fontSize: 16,
                            alignSelf: 'center',
                            color: 'white',
                            marginTop: 6

                        }}>
                        meowww
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{
                    alignSelf: 'center',
                    backgroundColor: 'rgba(36, 114, 79, 1)',
                    color: 'white', borderRadius: 20, width: 370, height: 40, marginTop: 20, marginLeft: 10

                }} >
                    <Text
                        style={{
                            fontSize: 16,
                            alignSelf: 'center',
                            color: 'white',
                            marginTop: 6

                        }}>
                        meowww
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    alignSelf: 'center',
                    backgroundColor: 'rgba(36, 114, 79, 1)',
                    color: 'white', borderRadius: 20, width: 370, height: 40, marginTop: 20, marginLeft: 10

                }} >
                    <Text
                        style={{
                            fontSize: 16,
                            alignSelf: 'center',
                            color: 'white',
                            marginTop: 6

                        }}>
                        meowww
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    alignSelf: 'center',
                    backgroundColor: 'rgba(36, 114, 79, 1)',
                    color: 'white', borderRadius: 20, width: 370, height: 40, marginTop: 20, marginLeft: 10

                }} >
                    <Text
                        style={{
                            fontSize: 16,
                            alignSelf: 'center',
                            color: 'white',
                            marginTop: 6

                        }}>
                        meowww
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    alignSelf: 'center',
                    backgroundColor: 'rgba(36, 114, 79, 1)',
                    color: 'white', borderRadius: 20, width: 370, height: 40, marginTop: 20, marginLeft: 10

                }} >
                    <Text
                        style={{
                            fontSize: 16,
                            alignSelf: 'center',
                            color: 'white',
                            marginTop: 6

                        }}>
                        meowww
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    alignSelf: 'center',
                    backgroundColor: 'rgba(36, 114, 79, 1)',
                    color: 'white', borderRadius: 20, width: 370, height: 40, marginTop: 20, marginLeft: 10

                }} >
                    <Text
                        style={{
                            fontSize: 16,
                            alignSelf: 'center',
                            color: 'white',
                            marginTop: 6

                        }}>
                        meowww
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    alignSelf: 'center',
                    backgroundColor: 'rgba(36, 114, 79, 1)',
                    color: 'white', borderRadius: 20, width: 370, height: 40, marginTop: 20, marginLeft: 10

                }} >
                    <Text
                        style={{
                            fontSize: 16,
                            alignSelf: 'center',
                            color: 'white',
                            marginTop: 6

                        }}>
                        meowww
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    alignSelf: 'center',
                    backgroundColor: 'rgba(36, 114, 79, 1)',
                    color: 'white', borderRadius: 20, width: 370, height: 40, marginTop: 20, marginLeft: 10

                }} >
                    <Text
                        style={{
                            fontSize: 16,
                            alignSelf: 'center',
                            color: 'white',
                            marginTop: 6

                        }}>
                        meowww
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    alignSelf: 'center',
                    backgroundColor: 'rgba(36, 114, 79, 1)',
                    color: 'white', borderRadius: 20, width: 370, height: 40, marginTop: 20, marginLeft: 10

                }} >
                    <Text
                        style={{
                            fontSize: 16,
                            alignSelf: 'center',
                            color: 'white',
                            marginTop: 6

                        }}>
                        meowww
                    </Text>
                </TouchableOpacity>
                       




            </View>
            </ScrollView>
        </View>


    );
}