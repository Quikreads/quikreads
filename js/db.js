// Initialize Firebase
var config = {
  apiKey: "AIzaSyDmlCjU652S7zTNGSM_SVI7N-9BC_binbs",
  authDomain: "quikreads-f6766.firebaseapp.com",
  databaseURL: "https://quikreads-f6766.firebaseio.com",
  projectId: "quikreads-f6766",
  storageBucket: "quikreads-f6766.appspot.com",
  messagingSenderId: "308229798991"
};
firebase.initializeApp(config);

const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

firebase.initializeApp({
  apiKey: '### FIREBASE API KEY ###',
  authDomain: '### FIREBASE AUTH DOMAIN ###',
  projectId: '### CLOUD FIRESTORE PROJECT ID ###'
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();