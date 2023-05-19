// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjJzjXVr2dEmP-F5IvXlVXMiFA5YUjVX4",
  authDomain: "kids-vehicle-zone.firebaseapp.com",
  projectId: "kids-vehicle-zone",
  storageBucket: "kids-vehicle-zone.appspot.com",
  messagingSenderId: "338020376276",
  appId: "1:338020376276:web:44e9d63bf3624280b76541"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;