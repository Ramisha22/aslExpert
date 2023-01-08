import * as firebase from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
	initializeAuth,
	getReactNativePersistence,
} from 'firebase/auth/react-native';

const firebaseConfig = {  
  apiKey: "AIzaSyDfChI_h_9LJGMnQ2R8LORL6FUQqsiyvqY",
  authDomain: "asl-expert.firebaseapp.com",
  databaseURL: "https://asl-expert-default-rtdb.firebaseio.com",
  projectId: "asl-expert",
  storageBucket: "asl-expert.appspot.com",
  messagingSenderId: "306493811233",
  appId: "1:306493811233:web:76b005f1d6dd6017021160"
};
const app = firebase.initializeApp(firebaseConfig);
var auth = initializeAuth(app,{
	persistence: getReactNativePersistence(AsyncStorage),
});
auth = getAuth(app);

const db = getDatabase(app);
export { auth, db };