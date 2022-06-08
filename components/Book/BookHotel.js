import React from 'react'
import Navbar from './Navbar'
import Footer from '../termsandPrivacy/Footer'
import Gallery from './Gallery'
import HotelDetails from './HotelDetails'

import DetailsAboutHotel from './DetailsAboutHotel'

function BookHotel() {
  return (
    <div>
      <Navbar />
      <div className="px-[43px]">
        <HotelDetails />
        <Gallery />
        <DetailsAboutHotel />
      </div>
      <Footer />
    </div>
  )
}

export default BookHotel
