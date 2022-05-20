import React from 'react'
import Stepper from './Booking/Stepper'

function Navbar() {
  return (
    <div className="drop-shadowlgd   flex h-20  w-[100%] max-w-7xl items-center justify-between border-b-[1px] border-[#80808070]">
      <h1 className=" text-2xl font-bold text-black"> meetoospace</h1>
      <Stepper />
      <button className="mr-16 rounded-md border-[1px] border-[#80808070] py-2 px-3">
        SIGN IN
      </button>
    </div>
  )
}

export default Navbar
