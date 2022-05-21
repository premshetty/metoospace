import React from 'react'
import InputCointainer from './InputCointainer'
import PriceCard2 from './PriceCard2'

function BookingForm2() {
  return (
    <div className="grid w-full grid-cols-1 gap-3 px-10 py-3 md:grid-cols-4">
      <InputCointainer />
      <PriceCard2 />
    </div>
  )
}

export default BookingForm2
