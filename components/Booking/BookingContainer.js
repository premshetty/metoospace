import React from 'react'
import BookingForm from './BookingForm'
import PriceCard from './PriceCard'
import Navbar from './../Navbar'

function BookingContainer() {
  return (
    <div className="m-auto flex w-[80vw] max-w-7xl flex-col  justify-center ">
      <Navbar />
      <div className="relative mt-5 flex flex-row justify-between gap-20">
        <BookingForm />
        <PriceCard />
      </div>
    </div>
  )
}

export default BookingContainer
