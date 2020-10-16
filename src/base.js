import * as firebase from 'firebase'
import Rebase from 're-base'

const config =   {
    aapiKey: "AIzaSyDxP2q3k4cygCVrTHZojznGR1rpvWMnLa8",
    authDomain: "feedbackdb-c05dc.firebaseapp.com",
    databaseURL: "https://feedbackdb-c05dc.firebaseio.com",
    projectId: "feedbackdb-c05dc",
    storageBucket: "feedbackdb-c05dc.appspot.com",
    messagingSenderId: "613221072498",
    appId: "1:613221072498:web:470b56fcbe8a8cc9588ceb",
    measurementId: "G-3C48Z7GGGM"
  };


  // Initialize Firebase
const app = firebase.initializeApp(config);
const base = Rebase.createClass(app.database())
// const base = app.database()

export { base }