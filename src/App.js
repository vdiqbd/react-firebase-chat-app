import "./index.css";
import { useState } from "react";
import Main from "./components/Main/Main";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";

initializeApp({
  apiKey: "AIzaSyAyDdyO09mVjkxZe-fGAnLgEgSqkc0qwYU",
  authDomain: "chat-application-cae14.firebaseapp.com",
  projectId: "chat-application-cae14",
  storageBucket: "chat-application-cae14.appspot.com",
  messagingSenderId: "666265834366",
  appId: "1:666265834366:web:3dd5208e51c20ea8ebd92f",
  measurementId: "G-27G7GLK04Y",
  databaseURL: "https://chat-application-cae14-default-rtdb.firebaseio.com/",
});

const auth = getAuth();

const App = () => {
  const [user, setUser] = useState(auth.currentUser);

  return (
    <div className="App">
      {user ? (
        <Main change={() => setUser(null)} />
      ) : (
        <Login change={() => setUser(auth.currentUser)} />
      )}
    </div>
  );
};

const Login = ({ change }) => {
  const signIn = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider).then(() => {
      onAuthStateChanged(auth, () => change());
    });
  };

  return (
    <div className="login">
      <button onClick={signIn}>Sign In With Google</button>
    </div>
  );
};

export default App;
