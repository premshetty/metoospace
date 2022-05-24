import React from 'react'
import AboveNavbar from './AboveNavbar'
import Navbar from './Navbar'
import Hero from './Hero'
import Explore from './Explore'
import BigCard from './BigCard'

function HomeContainer() {
  return (
    <div>
      <AboveNavbar />
      <Navbar />
      <Hero />
      <Explore />
      <BigCard />
    </div>
  )
}

export default HomeContainer
