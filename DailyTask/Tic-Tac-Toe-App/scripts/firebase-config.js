
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-analytics.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyD7CvOR_19VCFE4wmalus-bFq7IyO7LhFY",
    authDomain: "tictactoe-dca55.firebaseapp.com",
    projectId: "tictactoe-dca55",
    storageBucket: "tictactoe-dca55.appspot.com",
    messagingSenderId: "912843243562",
    appId: "1:912843243562:web:53cc1cafbbb1b2eeaa4353",
    measurementId: "G-NMBV8DMNK3"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const analytics = getAnalytics(app);

  export const db = getFirestore(app);


