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

const firestore = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true};
firestore.settings(settings);


// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

var provider = new firebase.auth.GoogleAuthProvider();


function page() {
  return window.location.href.split('?')[1];
}

if(!page()) {
  document.getElementById("home-page").style.display = "block";
} else {
  if(document.getElementById(page() + "-page")) {
    document.getElementById(page() + "-page").style.display = "block";
  } else {
    document.getElementById("404-page").style.display = "block";
  }
}
