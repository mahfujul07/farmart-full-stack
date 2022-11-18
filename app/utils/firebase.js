import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBAUmZtylTmztcyegO-zUQJwZZuTdnAZqM",
  authDomain: "chat-app-mahfuz.firebaseapp.com",
  projectId: "chat-app-mahfuz",
  storageBucket: "chat-app-mahfuz.appspot.com",
  messagingSenderId: "321103549997",
  appId: "1:321103549997:web:d34659faa5be7b2c20caa4",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const auth = app.auth();
const db = app.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export { auth, db, timestamp };
