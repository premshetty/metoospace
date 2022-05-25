import React from 'react'
import AboveNavbar from './AboveNavbar'
import Navbar from './Navbar'
import Hero from './Hero'
import Explore from './Explore'
import BigCard from './BigCard'
import PickUpGrid from './PickUpGrid'
import OurRoom from './OurRoom'

function HomeContainer() {
  return (
    <div>
      <AboveNavbar />
      <Navbar />
      <Hero />
      <Explore />
      <BigCard />
      <PickUpGrid />
      <OurRoom />
    </div>
  )
}

export default HomeContainer
