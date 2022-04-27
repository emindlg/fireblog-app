import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut
} from "firebase/auth";
import { useEffect, useState} from "react";
import { getDatabase, ref, set, onValue, remove, update } from "firebase/database";


//import Toastify from "./toast"

//* https://firebase.google.com/docs/auth/web/start
//* https://console.firebase.google.com/ => project settings
const firebaseConfig = {
  apiKey: "AIzaSyAAUB6ebhvx8QBYJgW_xg4_Mc2iL_8Rg9k",
  authDomain: "fire-blog-3fe57.firebaseapp.com",
  projectId: "fire-blog-3fe57",
  storageBucket: "fire-blog-3fe57.appspot.com",
  messagingSenderId: "573377398764",
  appId: "1:573377398764:web:18b182cde86d51902f62c9"
};
// const firebaseConfig = {
//   apiKey: "AIzaSyCg1fCEO8i7MQnM3SiMJPiVcADp_NI9XTw",
//   authDomain: "movie-app-1-6ec44.firebaseapp.com",
//   projectId: "movie-app-1-6ec44",
//   storageBucket: "movie-app-1-6ec44.appspot.com",
//   messagingSenderId: "950886341278",
//   appId: "1:950886341278:web:f4feb188157227da55398f",
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const createUser = async (email, password, navigate) => {
  try {
    let userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    
    navigate("/Dashboard");
    console.log(userCredential);
    
  } catch (err) {
    alert(err.message);
  }
};

//* https://console.firebase.google.com/
//* => Authentication => sign-in-method => enable Email/password
export const signIn = async (email, password, navigate) => {
  try {
    let userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    navigate("/Dashboard");
    console.log(userCredential);
  } catch (err) {
    alert(err.message);
  }
};

export const logOut = () => {
  signOut(auth);
  alert("logged out successfully");
  
  
};

export const userObserver = (setCurrentUser) => {
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setCurrentUser(currentUser);
      // ...
    } else {
      // User is signed out
      setCurrentUser(false);
    }
  });
};

//* https://console.firebase.google.com/
//* => Authentication => sign-in-method => enable Google
export const signUpProvider = (navigate) => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      navigate("/Dashboard");
    })
    .catch((error) => {
      // Handle Errors here.
      console.log(error);
      // ...
    });
};




const database = getDatabase();

function writeUserData(userId, name, email, imageUrl) {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}
  

const starCountRef = ref(db, 'posts/' + postId + '/starCount');
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  updateStarCount(postElement, data);
});