import React from 'react'
import BookingForm from './BookingForm'
import PriceCard from './PriceCard'
import Navbar from './Navbar'

function BookingContainer() {
  return (
    <div className="m-auto flex w-[100vw] max-w-7xl flex-col justify-center   xl:w-[80vw] ">
      <Navbar />

      <div className="relative mt-5 flex flex-col justify-between gap-20 md:flex-row">
        <BookingForm />
        <PriceCard />
      </div>
    </div>
  )
}

export default BookingContainer
