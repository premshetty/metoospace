import React from 'react'

function Navbar() {
  return (
    <div className="flex h-20  w-[100%] max-w-7xl  items-center justify-between drop-shadow-md ">
      <h1 className=" text-2xl font-bold text-black"> meetoospace</h1>
      <button className="rounded-md border-[1px] border-[#80808070] py-2 px-3">
        SIGN IN
      </button>
    </div>
  )
}

export default Navbar
