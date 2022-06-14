import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import SearchBlock from './SearchBlock'
import Featured from './Featured'
import PostProperty from './PostProperty'
import Testimonial from './Testimonial'
import CardSlider from './CardSlider'
import BlogSection from './BlogSection'
import Cta from './Cta'
import Footer from './Footer'

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
      <BlogSection />
      <Cta />
      <Footer />
    </div>
  )
}

export default NewHome
