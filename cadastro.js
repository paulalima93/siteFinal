import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Your web app's Firebase configuration


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("login_button").addEventListener("click", function(){
  //pegar email digitado na caixa de email e armazenar na const email

  //pegar senha digitada na caixa de senha e armazenar na const senha

  //pegar confirmação da senha digitada na caixa de confirmar senha e armazenar na const confirmeSenha
    
    if (senha == confirmeSenha) {
        
    } else {
        document.getElementById("resultado").innerHTML = " ";
        document.getElementById("resultado").style.color = "red";
    };
    
}) 
