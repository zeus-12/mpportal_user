import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'

const app = firebase.initializeApp({
    apiKey: "AIzaSyC2vG2SeZXSF8ARd_5CKUuq52M48XqtEAo",
    authDomain: "mpportal-e9873.firebaseapp.com",
    projectId: "mpportal-e9873",
    storageBucket: "mpportal-e9873.appspot.com",
    messagingSenderId: "881239385743",
    appId: "1:881239385743:web:4bc2de8f851e123fddf2fa",
    measurementId: "G-XXBT52G4ZQ"
})

export const auth = app.auth()
export const storage = firebase.storage()

export default firebase