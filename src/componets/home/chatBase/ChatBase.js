import React, { useState,useEffect } from 'react'
import "./chatBase.css"
import { LuSend } from "react-icons/lu";
import {initializeApp} from "firebase/app"
import {
  getFirestore,
  collection,onSnapshot,
  addDoc
} from 'firebase/firestore'
import {
  getAuth,
  onAuthStateChanged,
} from "firebase/auth"

const ChatBase = () => {

  const [chats, setChats] = useState([]);
  const [messages, setMessages] = useState("");
  const [userEmail,setUserEmail] = useState()
 

  const firebaseConfig = {
    apiKey: "AIzaSyAOzdWA9nYvMwQKh01S385lxVywFpOt8xE",
    authDomain: "true-chat-14088.firebaseapp.com",
    projectId: "true-chat-14088",
    storageBucket: "true-chat-14088.appspot.com",
    messagingSenderId: "179044815913",
    appId: "1:179044815913:web:c235fd123e7e5a42653838"
  };

  initializeApp(firebaseConfig);

  const db = getFirestore()

  const userData = getAuth()

  // const colRef = collection(db,"chats")

  // getDocs(colRef)
  // .then((snapshot) => {
  //   let chats = []
  //   snapshot.docs.forEach((chat) => {
  //     chats.push({ ...chat.data(), id: chat.id})
  //   })
  //   console.log(chats)
  // })

  // let chats = []
  // onSnapshot(colRef, (snapshot) => {
  //   snapshot.docs.forEach((chat) => {
  //     chats.push({ ...chat.data(), id: chat.id})
  //   })
  // })

  useEffect(() => {
    const colRef = collection(db, "chats"); // Assuming "chats" is your Firestore collection name

    const unsubscribe = onSnapshot(colRef, (snapshot) => {
      const updatedChats = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      }));
      setChats(updatedChats);
    });

    return () => unsubscribe();
  }, [db]);

  const handleMessageSend = async () => {
     if (messages.trim() === "") return; // Don't send empty messages

    try {
      const docRef = await addDoc(collection(db, "chats"), {
        chat                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              : messages
      });
      console.log("Document written with ID: ", docRef.id);
      setMessages(""); // Clear the input field after sending message
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

 console.log(chats);
 onAuthStateChanged(userData, (user) => {
  if (user) {
    const [f1] = user.providerData
    const {email} = f1
    setUserEmail(email[0])
  } 
});

  return (
    <main className='main-section'>
        <section>
          {chats ? (
               <div className='out-message'>
               {chats.map((eachChat) => (
                  <article key={eachChat.id}>
                    <h5> {userEmail} </h5>
                   <h3> {eachChat.chat} </h3>
                  </article>
             ))}
           </div>
          ) : (
            <div className='null-message'>
            <p>unlock potentials in social chat</p>
            <p>be the first to chat</p>
           </div>
          )}
         

        </section>
    <div className='inputSection'>
      <input 
        type="text"
        placeholder='enter your message'
        value={messages}
        onChange={(e) => setMessages(e.target.value)}
      />
      <button onClick={handleMessageSend}><LuSend /></button>
    </div>
    </main>
  )
}

export default ChatBase
