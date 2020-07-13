import firebase from "firebase";
import firestore from "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDGWKbPqQ2SQp954IjxqXnExF7C05psOWI",
    authDomain: "ninja-smoothies-7ab5e.firebaseapp.com",
    databaseURL: "https://ninja-smoothies-7ab5e.firebaseio.com",
    projectId: "ninja-smoothies-7ab5e",
    storageBucket: "ninja-smoothies-7ab5e.appspot.com",
    messagingSenderId: "507920008332",
    appId: "1:507920008332:web:a199b8d9631f37903de7a9"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({ timestampsInSnapshots: true });

// export firestore database
export default firebaseApp.firestore();