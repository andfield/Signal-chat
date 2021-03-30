import * as firebase from 'firebase'
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCcscxjxz6EMC0hJS4O27CddlItAXCzXlY",
    authDomain: "signal-clone-30add.firebaseapp.com",
    projectId: "signal-clone-30add",
    storageBucket: "signal-clone-30add.appspot.com",
    messagingSenderId: "67536949646",
    appId: "1:67536949646:web:275b5b516208ceaf8cd4df"
  };

let app

//if the app is not initialize then initialize it
if(firebase.apps.length === 0 ){
 app = firebase.initializeApp(firebaseConfig)
}
else {
    app = firebase.app()
}

//database vairable
const db = app.firestore();

//Authentication variable
const auth = firebase.auth();

export  {db, auth}