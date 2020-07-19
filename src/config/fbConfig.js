import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyDfHEYwP2qT3kx2YWgjIyImbOKYBxQfbiE",
  authDomain: "clone-c1030.firebaseapp.com",
  databaseURL: "https://clone-c1030.firebaseio.com",
  projectId: "clone-c1030",
  storageBucket: "clone-c1030.appspot.com",
  messagingSenderId: "289011068927",
  appId: "1:289011068927:web:b7eb2e2fa180bd1ab201ca",
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
