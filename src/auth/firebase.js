import { initializeApp } from "firebase/app";
import { getAuth, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const createUser = async(email, password, navigate) => {
  try {

   let userCredential= await createUserWithEmailAndPassword(auth, email, password)
    navigate("/");
    console.log(userCredential);
  } catch (err) {
    console.log(err);
  }
}

export const signIn = async(email, password, navigate) => {

  try {

    let userCredential = await signInWithEmailAndPassword(auth, email, password)
    navigate("/");
    // sessionStorage.setItem("user", JSON.stringify(userCredential.user))
    console.log(userCredential);

  } catch (err) {
    console.log(err);
    
  }  
}

export const userObserver = (setCurrentUser) =>{
  onAuthStateChanged(auth, (user) => {
    if (user) {
      
      setCurrentUser(user);
    } else {
     setCurrentUser(false);
    }
  });
}
export const logOut = () => {
  signOut(auth)
}