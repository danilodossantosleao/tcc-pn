// src/config/firebaseConfig.js
import { initializeApp, getApps } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyDdIulVhIulvFwcjgrlfrsjPOJJW7_zZCU",
  authDomain: "desportiva-penha.firebaseapp.com",
  projectId: "desportiva-penha",
  storageBucket: "desportiva-penha.appspot.com",
  messagingSenderId: "1058967588135",
  appId: "1:1058967588135:web:4b20c3a73ca50864ae2d02",
  measurementId: "G-D5N3W9H02D"
};

let app;
let auth;
let db;

if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
  });
  db = getFirestore(app);
} else {
  app = getApps()[0];
  auth = getAuth(app);
  db = getFirestore(app);
}

export { auth, db };
