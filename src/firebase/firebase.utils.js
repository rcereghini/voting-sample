import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyCFTHG5O0EQypbxUhIZcyawSduSENJALLY",
  authDomain: "voting-sample.firebaseapp.com",
  databaseURL: "https://voting-sample.firebaseio.com",
  projectId: "voting-sample",
  storageBucket: "voting-sample.appspot.com",
  messagingSenderId: "693180043552",
  appId: "1:693180043552:web:c9a336392929983e110745",
  measurementId: "G-9F99TR3YWF",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

export default firebase;
