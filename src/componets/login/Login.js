import React, { useState } from 'react'
import './login.css'
import { Link,useNavigate } from 'react-router-dom'
import {initializeApp} from "firebase/app"
import {
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  
  const firebaseConfig = {
    apiKey: "AIzaSyAOzdWA9nYvMwQKh01S385lxVywFpOt8xE",
    authDomain: "true-chat-14088.firebaseapp.com",
    projectId: "true-chat-14088",
    storageBucket: "true-chat-14088.appspot.com",
    messagingSenderId: "179044815913",
    appId: "1:179044815913:web:c235fd123e7e5a42653838"
  };

  initializeApp(firebaseConfig)

  const auth = getAuth()

  const handleEmail = (event) => {
      setEmail(event.target.value)
  }

  const handlePassword = (event) => {
      setPassword(event.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth,email,password)
    .then(() => {
        navigate('/home')
        setEmail("")
        setPassword("")
    })
  }

  return (
    <main>
    <div className='mainDiv'>
         <h1>welcome back user</h1>
      <form onSubmit={handleSubmit}>
        <input type="text"
                value={email}
                onChange={handleEmail}
                placeholder='enter email' />
        <input type="text" 
                value={password}
                onChange={handlePassword}
                placeholder='enter password' />
        <button>login</button>
      </form>
        <p>dont have an account <Link to="/">sign up</Link> </p>
    </div>
 </main>
  )
}

export default Login
