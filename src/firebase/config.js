import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCoPnr5KCHncKAm-5_hdua3PuBJ0cc6hlg",
  authDomain: "miniblog-61ad8.firebaseapp.com",
  projectId: "miniblog-61ad8",
  storageBucket: "miniblog-61ad8.appspot.com",
  messagingSenderId: "953119904863",
  appId: "1:953119904863:web:10a323b8b787ab5ca5f7ea"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db }