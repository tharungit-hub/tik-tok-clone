import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBCWS-_VNoVqYP7vsRX9T-Ed08GOlA-Vj4",
    authDomain: "tik-tok-clone-a197c.firebaseapp.com",
    databaseURL: "https://tik-tok-clone-a197c.firebaseio.com",
    projectId: "tik-tok-clone-a197c",
    storageBucket: "tik-tok-clone-a197c.appspot.com",
    messagingSenderId: "1023382137991",
    appId: "1:1023382137991:web:de0526d4b005df47141c22",
    measurementId: "G-MD9BMG65H8"
  };

  const firebaseApp =
  firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;