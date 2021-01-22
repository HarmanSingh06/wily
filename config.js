import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCBUiC4E6-KOn-ybEx_TmS9M-O5LwWviSs",
  authDomain: "wily-21975.firebaseapp.com",
  databaseURL: "https://wily-21975-default-rtdb.firebaseio.com",
  projectId: "wily-21975",
  storageBucket: "wily-21975.appspot.com",
  messagingSenderId: "992410038598",
  appId: "1:992410038598:web:18d0278ce617688760f547"
};
  // Initialize Firebase
  let app = firebase.initializeApp(firebaseConfig);

  export default app.firestore();