 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
  import { getAuth,
     createUserWithEmailAndPassword ,
     signInWithEmailAndPassword, 
     onAuthStateChanged,
     updateEmail,
     } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBsLocK5TRO-yPAIeW24EDgnx3WZGtA3Bk",
    authDomain: "polling-app-a765a.firebaseapp.com",
    projectId: "polling-app-a765a",
    storageBucket: "polling-app-a765a.appspot.com",
    messagingSenderId: "963020069082",
    appId: "1:963020069082:web:37a61419b587e198dc2de3"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const auth = getAuth(app);

window.signUp = () => {
  let signUpEmail = document.querySelector("#email").value;

  let signUpPassword = document.querySelector("#password").value;

  createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
    .then((res) => {
      const user = res.user;
      alert("Your Account has been created");
      window.location.href = "./index.html";
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage);
    });


};

window.logIn = () => {

  let logInEmail = document.querySelector("#logInEmail").value;
  let logInPassword = document.querySelector("#logInPassword").value;

signInWithEmailAndPassword(auth, logInEmail, logInPassword) 
  .then((userCredential) => {
    const user = userCredential.user;
    alert("LogIn SuccessFull")
    window.location.href = "./polling.html";
  })
  .catch((error) => {
    const errorCode = error.code;
   alert(errorCode);
   
  });

}
