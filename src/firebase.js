import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyA_Uh9sk-bsskdlWryUqXxEEPKxcvQ9ZzA",
  authDomain: "resume-30e0a.firebaseapp.com",
  databaseURL: "https://resume-30e0a-default-rtdb.firebaseio.com",
  projectId: "resume-30e0a",
  storageBucket: "resume-30e0a.appspot.com",
  messagingSenderId: "404562103091",
  appId: "1:404562103091:web:289631f1154b83cf180c46"
};

firebase.initializeApp(firebaseConfig);

export default firebase;