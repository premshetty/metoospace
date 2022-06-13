import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import SearchBlock from './SearchBlock'
import Featured from './Featured'
import PostProperty from './PostProperty'
import Testimonial from './Testimonial'
import CardSlider from './CardSlider'

function NewHome() {
  return (
    <div>
      <Navbar />
      <Banner />
      <SearchBlock />
      <Featured />
      <PostProperty />
      <Testimonial />
      <CardSlider />
    </div>
  )
}

export default NewHome
