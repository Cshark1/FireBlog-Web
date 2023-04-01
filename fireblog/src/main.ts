import './style.css'
import { } from "fonta"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAZwTNdqWVoq4FpI2yo8-hpRpe59uZkXH4",
    authDomain: "fireblog-54a52.firebaseapp.com",
    projectId: "fireblog-54a52",
    storageBucket: "fireblog-54a52.appspot.com",
    messagingSenderId: "967731319094",
    appId: "1:967731319094:web:538113921918548adf6397",
    measurementId: "G-Y0K614XZFW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log(app)