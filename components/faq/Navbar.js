import React from 'react'

function Navbar() {
  return (
    <div className="flex flex-col gap-[15px] pt-5 shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[80px] pl-5">
          <h1 className="font-[24px] pl-3 font-bold"> Metoospace</h1>
          <div className="hidden h-[48px] w-[454px] rounded-md border-[1px] border-[#CECFD1] p-2  md:flex">
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
        <div className="flex gap-7 md:pr-5">
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
      <div className="m-auto flex h-[48px] max-w-[95%] rounded-md border-[1px] border-[#CECFD1] p-2  md:hidden">
        <img src="./icons/search.svg" className="m-auto h-[24px] w-[24px]" />
        <input
          className="ml-2  w-full flex-shrink items-center bg-transparent placeholder-gray-500 outline-none md:inline-flex"
          type="text"
          placeholder="Where are you going ?"
        />
      </div>
      <div className="flex gap-7 pl-7">
        <button
          className=" border-b-2 border-[#F4AB3E] pb-3 text-[16px] font-medium"
          href="#"
        >
          Hotel{' '}
        </button>
        <button className="pb-3 text-[16px] font-medium" href="#">
          Hostels{' '}
        </button>
        <button className=" pb-3 text-[16px] font-medium" href="#">
          House{' '}
        </button>
        <button className="pb-3 text-[16px] font-medium" href="#">
          Office{' '}
        </button>
        <button className="pb-3 text-[16px] font-medium" href="#">
          Garage{' '}
        </button>
        <button className="pb-3 text-[16px] font-medium" href="#">
          Rooms{' '}
        </button>
        <button className="pb-3 text-[16px] font-medium" href="#">
          Kitchen{' '}
        </button>
        <button className="pb-3 text-[16px] font-medium" href="#">
          Storage{' '}
        </button>
      </div>
    </div>
  )
}

export default Navbar
