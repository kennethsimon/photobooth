import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyC3bWaDd2AREkiFvu2YUkkH1rAHm8lD4Zc",
    authDomain: "photobooth-31f8c.firebaseapp.com",
    databaseURL: "https://photobooth-31f8c.firebaseio.com",
    projectId: "photobooth-31f8c",
    storageBucket: "",
    messagingSenderId: "344382438977"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots: true});

  export default firebase;
