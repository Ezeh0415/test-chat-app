import React from 'react'
import "./Home.css"
import ChatBase from './chatBase/ChatBase'

const Home = () => {
  return (
   <main>
      {/* <section className='first-section'>
        <SideBar />
      </section> */}
      <section className='second-section'>
        <ChatBase />
      </section>
   </main>
  )
}

export default Home
