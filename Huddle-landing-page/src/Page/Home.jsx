import React from 'react'
import Header from '../Components/static/Header'
import Footer from '../Components/static/Footer'
import Hero from '../Components/block/Hero'
import GrowTogether from '../Components/block/GrowTogether'
import Conversation from '../Components/block/Conversation'
import User from '../Components/block/User'

const Home = () => {
  return (
    <div>
        <Header />
        <Hero />
        <GrowTogether />
        <Conversation />
        <User />

        <Footer />
    </div>
  )
}

export default Home