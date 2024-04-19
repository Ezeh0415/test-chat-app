import React, { useEffect, useState } from 'react'
import './signup.css'
import { Link,useNavigate } from 'react-router-dom'
import {initializeApp} from "firebase/app"
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "firebase/auth"

const SignUp = () => {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [confirmPassword,setConfirmPassword] = useState("")
  const [btnDisable,setBtnDisable] = useState(true)
  const [isError,setIsError] = useState(false)
  // const [isRule,setIsRule] = useState(false)
  const navigate = useNavigate()
  let errorM = "password is not The same"

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

      useEffect(() => {
        // /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/
          if (password !== '' && confirmPassword !== '') {
            if (confirmPassword === password) {
              setBtnDisable(false)
              setIsError(false)
            } else {
              setBtnDisable(true)
              setIsError(true)
            }
          }
      },[password,confirmPassword])


      const handleEmail = (event) => {
        setEmail(event.target.value)
      }
      const handlePassword = (event) => {
        setPassword(event.target.value)
      }
      const handleConfirmPassword = (event) => {
        setConfirmPassword(event.target.value)
      }
      

      function handleSignUp(e) {
         e.preventDefault()
        //  navigate('/home')
        createUserWithEmailAndPassword(auth,email,confirmPassword)
        .then((cred) => {
          navigate('/home')
          setEmail("")
          setPassword("")
          setConfirmPassword("")
        })
        .catch((err) => {
          console.log(err.message);
        })
      }

  return (
   <main>
      <div className='mainDiv'>
           <h1>welcome to true chat app</h1>
        <form  onSubmit={handleSignUp} >
          <input type="text"
                 value={email}
                 onChange={handleEmail}
                 placeholder='enter email' 
          />
          <input type="password" 
                 value={password}
                 onChange={handlePassword}
                 placeholder='enter password' 
          />
           <p className={isError ? "show" : "hide"}>{errorM}</p>
          <input type="password" 
                 value={confirmPassword}
                 onChange={handleConfirmPassword}
                 placeholder='confirm password' 
          />
          {/* <p className={isRule ? "ruleShow" : "ruleHide"}>password must have one uppercase</p>
          <p className={isRule ? "ruleShow" : "ruleHide"}>password must have one lowercase</p>
          <p className={isRule ? "ruleShow" : "ruleHide"}>password must have one number</p>
          <p className={isRule ? "ruleShow" : "ruleHide"}>password must be six and above</p> */}
          <button disabled={btnDisable} >signup</button>
        </form>
        <p> have an account <Link to="/login">login</Link> </p>
      </div>
   </main>
  )
}

export default SignUp
