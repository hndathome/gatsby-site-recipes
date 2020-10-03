import firebase from "firebase/app"
import "firebase/firestore"

var firebaseConfig = {
    apiKey: process.env.GATSBY_FIREBASE_APIKEY,
    authDomain: "website-comments-29a04.firebaseapp.com",
    databaseURL: "https://website-comments-29a04.firebaseio.com",
    projectId: "website-comments-29a04",
    storageBucket: "website-comments-29a04.appspot.com",
    messagingSenderId: "170409578938",
    appId: "1:170409578938:web:78d676da443ee3a0c2cd83"
};

firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore()

export default firebase