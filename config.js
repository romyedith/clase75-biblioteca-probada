import firebase from "firebase";
//require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBE9cVdlb29fEZL6ExRwAOfu0j3dcUUSNk",
  authDomain: "biblioteca-fe89e.firebaseapp.com",
  projectId: "biblioteca-fe89e",
  storageBucket: "biblioteca-fe89e.appspot.com",
  messagingSenderId: "88462529578",
  appId: "1:88462529578:web:c82b2d863d58580b61df53"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
