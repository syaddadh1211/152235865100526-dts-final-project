// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlQJACHYE_BrNokoK4lfqmYjENYt_w7jc",
  authDomain: "dts2022-a58ee.firebaseapp.com",
  projectId: "dts2022-a58ee",
  storageBucket: "dts2022-a58ee.appspot.com",
  messagingSenderId: "636637791376",
  appId: "1:636637791376:web:852fbdafe2c6ef517d0415",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const registerDenganEmailDanPassword = async (email, password) => {
  try {
    // secara otomatis sudah di sign in kan
    const userYangDidapatkan = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("user ", userYangDidapatkan.user);
  } catch (err) {
    console.log(err.code);
    console.log(err.message);
  }
};

const loginDenganEmailDanPassword = async (email, password) => {
  try {
    const userLogin = await signInWithEmailAndPassword(auth, email, password);

    console.log("user login :", userLogin.user);
  } catch (err) {
    console.log(err.code);
    console.log(err.message);
  }
};

const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (err) {
    console.log(err.code);
    console.log(err.message);
  }
};

const logout = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    console.log(err.code);
    console.log(err.message);
  }
};

export {
  auth,
  registerDenganEmailDanPassword,
  loginDenganEmailDanPassword,
  resetPassword,
  logout,
};
