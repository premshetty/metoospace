import React from 'react'

function Navbar() {
  return (
    <div className="flex h-16 w-full items-center justify-between bg-[#7161EF] px-[24px] pl-[60px] text-white">
      <h1 className="text-[20px] font-bold ">Metoospace </h1>
      <div className="flex gap-[22px] ">
        <a href="#" className="text-[16px] font-[500]">
          HOME
        </a>
        <a href="#" className="text-[16px] font-[500]">
          BOOK SPACE
        </a>
        <a href="#" className="text-[16px] font-[500]">
          RENT SPACE
        </a>
        <a href="#" className="text-[16px] font-[500]">
          ABOUT US
        </a>
        <a href="#" className="text-[16px] font-[500]">
          SUPPORT
        </a>
      </div>
      <div className="flex gap-[22px] ">
        <button
          style={{ filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))' }}
          className="h-6 w-[69px] rounded-[8px] bg-[#FC60A8] px-[19px] py-1 text-[12px] font-[500]"
        >
          Login
        </button>
        <button
          style={{ filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))' }}
          className="h-6 w-[69px] rounded-[8px] bg-[#FC60A8] py-1 pl-[12px] pr-[10px] text-center text-[12px] font-[500]"
        >
          Register
        </button>
      </div>
    </div>
  )
}

export default Navbar
