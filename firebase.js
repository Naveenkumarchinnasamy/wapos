// import firebase from 'firebase/app';

import * as firebase from "firebase"
import "firebase/firestore"
import "firebase/storage"
const firebaseConfig = {
    apiKey: "AIzaSyA4yt9f0w6tbsxMIlhJusTq6thjXQnLSik",
    authDomain: "wapos-20818.firebaseapp.com",
    projectId: "wapos-20818",
    storageBucket: "wapos-20818.appspot.com",
    messagingSenderId: "104205684075",
    appId: "1:104205684075:web:da35d373cebc6eba33102e",
    measurementId: "G-540Q8TNHCC"
};

let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}
const auth = firebase.auth();
const firebaseapp = firebase.app();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, firebaseapp, db, storage }

