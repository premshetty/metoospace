import React from 'react'
import ButtonComponent from '../Booking/ButtonComponent'
import BookingForm2 from './BookingForm2'
import Navbar2 from './Navbar2'

function Bcontainer() {
  return (
    <div className="w-full 2xl:max-w-7xl">
      <Navbar2 />
      <BookingForm2 />
      <div class="py-4">
        <div class="w-full border-t border-gray-300"></div>
      </div>
      <div className="m-auto flex w-[90%] items-center gap-20 pb-10">
        <div className=" ml-3">
          <input type="checkbox" className="h-4 w-4" />
          <label className="ml-3 text-xl text-gray-500">
            I've read & accept the
            <a href="#" className="text-black">
              &nbsp; Terms and condition
            </a>
          </label>
        </div>
        <ButtonComponent name="Final step" />
      </div>
    </div>
  )
}

export default Bcontainer
