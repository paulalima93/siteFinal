import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtqgilbgTdyokdHschkugRovMSs6K22Pw",
  authDomain: "app-login-f2202.firebaseapp.com",
  projectId: "app-login-f2202",
  storageBucket: "app-login-f2202.appspot.com",
  messagingSenderId: "694134959047",
  appId: "1:694134959047:web:eff1fdcbf86271137d07e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

document.getElementById("login_button").addEventListener("click", function(){
    //pegar email digitado na caixa de email e armazenar na const email
    
    //pegar senha digitada na caixa de senha e armazenar na const senha
    
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
})
