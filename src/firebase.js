import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyBaq3bHJt6TrMWT_I9cQelZoFj8d8a1F3U",
  authDomain: "twitter-clone-537a5.firebaseapp.com",
  projectId: "twitter-clone-537a5",
  storageBucket: "twitter-clone-537a5.appspot.com",
  messagingSenderId: "751230047369",
  appId: "1:751230047369:web:7a9ab3e3db8585709f2258",
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

export default db
