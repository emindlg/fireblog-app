
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAUB6ebhvx8QBYJgW_xg4_Mc2iL_8Rg9k",
  authDomain: "fire-blog-3fe57.firebaseapp.com",
  projectId: "fire-blog-3fe57",
  storageBucket: "fire-blog-3fe57.appspot.com",
  messagingSenderId: "573377398764",
  appId: "1:573377398764:web:18b182cde86d51902f62c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export const createUser = async (email, password, navigate) => {
  try {
    let userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    //await updateProfile(auth.currentUser, {
    //  displayName: displayName,
    //});
    navigate("/Dashboard");
    console.log(userCredential);
  } catch (err) {
    alert(err.message);
  }
};

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

  export const signUpProvider = (navigate) => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((error) => {
        // Handle Errors here.
        console.log(error);
        // ...
      });
  };
