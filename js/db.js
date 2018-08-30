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

var uiConfig = {
  signInSuccessUrl: '',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  tosUrl: '<your-tos-url>',
  privacyPolicyUrl: function() {
    window.location.assign('<your-privacy-policy-url>');
  }
};
// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
ui.start('#firebaseui-auth-container', uiConfig);

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
