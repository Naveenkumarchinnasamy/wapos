import React from 'react';
import { View, Text, ActivityIndicator, StatusBar } from 'react-native';
import MyApp from './src/route/sideMenu';
import * as  Updates from "expo-updates";
import * as Notifications from 'expo-notifications';
//Database import
import * as firebase from "firebase";
import { getCurrentUser } from './src/api/helper';
require("firebase/auth");
var firebaseConfig = {
    apiKey: "AIzaSyA4yt9f0w6tbsxMIlhJusTq6thjXQnLSik",
    authDomain: "wapos-20818.firebaseapp.com",
    projectId: "wapos-20818",
    storageBucket: "wapos-20818.appspot.com",
    messagingSenderId: "104205684075",
    appId: "1:104205684075:web:da35d373cebc6eba33102e",
    measurementId: "G-540Q8TNHCC"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
     handleNotificationReceived = ({ request }) => {
        // Handle the notification here
        console.log('Notification received:', request);
        // Update UI, perform actions, etc.
      };
    componentDidMount = async () => {
        this.reactToUpdates();
        Notifications.addNotificationReceivedListener(this.handleNotificationReceived);
    }
    componentWillUnmount() {
        // Remove the notification received listener
        Notifications.removeNotificationSubscription(this.handleNotificationReceived);
      }
    reactToUpdates = async () => {
        Updates.addListener((event) => {
            if (event.type === Updates.UpdateEventType.UPDATE_AVAILABLE) {
                // Alert.alert("EaseSalotto", "A new update is available we restart this application for a update.");
                Updates.reloadAsync();
            }
        })
    }

    render() {
        return (
            <>
                <StatusBar backgroundColor={'#ffffff'} />
                <MyApp /></>
        );
    }
}

