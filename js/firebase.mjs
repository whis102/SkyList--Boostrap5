import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getDatabase, ref, set, update } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBZ8xfoH0OUQylpr1LnhxugAINJPncjvCo",
  authDomain: "todolist-79083.firebaseapp.com",
  projectId: "todolist-79083",
  storageBucket: "todolist-79083.appspot.com",
  messagingSenderId: "822099966591",
  appId: "1:822099966591:web:af67c4ea69930a118d9d4a",
  measurementId: "G-41967H1G91",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const pwd = document.getElementById("pwd").value;

const btnLogin = document.getElementById("btn-login");
btnLogin.addEventListener("click", function (event) {
  event.preventDefault();

  // if (!validateEmail(email) || !validatePwd(pwd)) {
  //   alert("Email and Password are out of line");
  //   return;
  // }

  signInWithEmailAndPassword(auth, email, pwd)
    .then((userCredential) => {
      const user = userCredential.user;

      const userData = {
        email: email,
        last_login: Date.now(),
      };

      update(ref(database, "users/" + user.uid), userData);

      window.location.href("index.html");
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage);
    });
});

const btnCreate = document.getElementById("btn-create");
btnCreate.addEventListener("click", function (event) {
  event.preventDefault();

  // if (!validateEmail(email) || !validatePwd(pwd)) {
  //   alert("Email and Password are out of line");
  //   return;
  // }
  // if (!validateField(name)) {
  //   alert("Name is out of line");
  //   return;
  // }

  createUserWithEmailAndPassword(auth, email, pwd)
    .then((userCredential) => {
      const user = userCredential.user;

      const userData = {
        email: email,
        full_name: name,
        last_login: Date.now(),
      };

      set(ref(database, "users/" + user.uid), userData);

      window.location.href("index.html");
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage);
    });
});

// function validateEmail(email) {
//   const expression = /^[^@]+@\w+(\.\w+)+\w$/;
//   return expression.test(email);
// }

// function validatePwd(pwd) {
//   return pwd.length >= 6;
// }

// function validateField(field) {
//   return field != null && field.length > 0;
// }
