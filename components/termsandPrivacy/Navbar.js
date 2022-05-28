import React from 'react'

function Navbar() {
  return (
    <div className="flex flex-col gap-[15px] py-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[80px] pl-5">
          <h1 className="font-[24px] pl-3 font-bold"> Metoospace</h1>
          <div className="flex h-[48px] w-[454px] rounded-md border-[1px] border-[#CECFD1]  p-2">
            <img
              src="./icons/search.svg"
              className="m-auto h-[24px] w-[24px]"
            />
            <input
              className="ml-2  w-full flex-shrink items-center bg-transparent placeholder-gray-500 outline-none md:inline-flex"
              type="text"
              placeholder="Where are you going ?"
            />
          </div>
        </div>
        <div className="flex gap-7 pr-5">
          <a href="#" className="text-[16px] font-medium ">
            Support
          </a>
          <a href="#" className="flex gap-1 text-[16px] font-medium ">
            <img
              src="./icons/globe.svg"
              alt="language"
              className="h-[24px] w-[24px]"
            />
            English
          </a>
          <a
            href="#"
            className="flex items-center gap-1 text-[16px] font-medium "
          >
            USD
            <img
              src="./icons/down.svg"
              alt="language"
              className="h-[10px] w-[10px]"
            />
          </a>
          <a
            href="#"
            className="flex items-center gap-1 text-[16px] font-medium "
          >
            <img
              src="./icons/user.png"
              alt="user"
              className="h-[24px] w-[24px]"
            />
            <img
              src="./icons/down.svg"
              alt="language"
              className="h-[10px] w-[10px]"
            />
          </a>
        </div>
      </div>
      <div className="flex gap-7 pl-7">
        <a className="text-[16px] font-medium" href="#">
          Destination{' '}
        </a>
        <a className="text-[16px] font-medium" href="#">
          Tour{' '}
        </a>
        <a className="text-[16px] font-medium" href="#">
          Rooms{' '}
        </a>
        <a className="text-[16px] font-medium" href="#">
          Hotels{' '}
        </a>
        <a className="text-[16px] font-medium" href="#">
          Blog{' '}
        </a>
      </div>
      <div className="h-[250px] w-full bg-[#F4AB3E]"></div>
    </div>
  )
}

export default Navbar
