import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyATgpVWAi2p3UYog2LkSvtL93Xa_HzaSz0",
  authDomain: "hello-vue3.firebaseapp.com",
  projectId: "hello-vue3",
  storageBucket: "hello-vue3.appspot.com",
  messagingSenderId: "312377954488",
  appId: "1:312377954488:web:0fe01cf566901ea532e44d",
});

export const db = getFirestore(firebaseApp);
