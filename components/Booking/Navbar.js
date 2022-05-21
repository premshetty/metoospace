import React from 'react'
import Stepper from './Stepper'

function Navbar() {
  return (
    <div className=" flex h-20  w-[100%] max-w-7xl items-center justify-between border-b-[1px] border-[#80808070]">
      <h1 className=" text-2xl font-bold text-black"> meetoospace</h1>
      <Stepper />
      <button className="rounded-md border-[1px] border-[#80808070] py-2 px-3 md:mr-16">
        SIGN IN
      </button>
    </div>
  )
}

export default Navbar
