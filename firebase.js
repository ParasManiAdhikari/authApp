// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALRKQWzq4NYz6RZK-oaTb172j6VNrrXr0",
  authDomain: "fir-authp-7a386.firebaseapp.com",
  projectId: "fir-authp-7a386",
  storageBucket: "fir-authp-7a386.appspot.com",
  messagingSenderId: "80638634132",
  appId: "1:80638634132:web:c98a7f419d360f82596c81"
};

if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);

}
const auth = firebase.auth();

export { auth };