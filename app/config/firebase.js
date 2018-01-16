import * as firebase from 'firebase';

import { FIREBASE_API_KEY, FIREBASE_AUTH_DOMAIN, FIREBASE_DATABASE_URL, FIREBASE_PROJECT_ID, FIREBASE_STORAGE_BUCKET, FIREBASE_MESSAGING_SENDER_ID } from "../config/constants"

// Initialize Firebase
var config = {
    apiKey: "AIzaSyD-AXhBva6JC_3_73vlukIFCefuJySa4aY",
    authDomain: "dinder-bdf9a.firebaseapp.com",
    databaseURL: "https://dinder-bdf9a.firebaseio.com",
    projectId: "dinder-bdf9a",
    storageBucket: "dinder-bdf9a.appspot.com",
    messagingSenderId: "891593975317"
};

firebase.initializeApp(config);

export default firebase;

// This code creates an instance of the Firebase SDK and configures it with your config. Now you can import it anywhere in your codebase and it’s always this singleton.
//     When you see firebase from now on, assume that it’s imported from here.
//
