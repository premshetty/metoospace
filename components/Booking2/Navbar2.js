import React from 'react'

function Navbar2() {
  return (
    <div className="flex w-full items-center justify-between px-10 py-3 shadow-md">
      <h1 className=" text-2xl font-bold text-black">
        <a href="/">meetoospace</a>{' '}
      </h1>
      <img
        src="stepper.svg"
        alt="stepper"
        className="hidden h-10 w-auto md:block"
      />
      <button className="w-24 rounded-md border-[1px] border-[#80808070] py-2 px-3 ">
        SIGN IN
      </button>
    </div>
  )
}

export default Navbar2
