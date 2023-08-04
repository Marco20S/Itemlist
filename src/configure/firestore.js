// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{ getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbucJadeNUQZZi2n-gOIvaLfyQ9q6bp_k",
  authDomain: "shoppinglist-appli.firebaseapp.com",
  projectId: "shoppinglist-appli",
  storageBucket: "shoppinglist-appli.appspot.com",
  messagingSenderId: "421480249229",
  appId: "1:421480249229:web:267f47c75091a8006c2fc4",
  measurementId: "G-VGZ902VH1Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

//firestore 
export default getFirestore(app)
export const database = getFirestore(app)
export const storage = getStorage(app)