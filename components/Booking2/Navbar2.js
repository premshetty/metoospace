import React from 'react'

function Navbar2() {
  return (
    <div className="flex w-full items-center justify-between px-10 py-3 shadow-md">
      <h1 className=" text-2xl font-bold text-black"> meetoospace</h1>
      <img src="stepper.svg" alt="stepper" className="h-10 w-auto" />
      <button className="w-24 rounded-md border-[1px] border-[#80808070] py-2 px-3 ">
        SIGN IN
      </button>
    </div>
  )
}

export default Navbar2
