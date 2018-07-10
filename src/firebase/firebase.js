import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBAGDYjmm2zvbRc6Fxta62KfB1n6WPM7J8",
    authDomain: "expensify-cbbd8.firebaseapp.com",
    databaseURL: "https://expensify-cbbd8.firebaseio.com",
    projectId: "expensify-cbbd8",
    storageBucket: "",
    messagingSenderId: "12060208395"
};
firebase.initializeApp(config);

const database=firebase.database();


export { firebase, database as default };