import React from 'react'
import HotelCard from './HotelCard'

function CardContainer() {
  return (
    <div className="mr-[43px] w-full">
      <h1 className=" text-[18px] font-bold text-black md:text-[32px]">
        Dubai, United Arab Emirates
      </h1>
      <div className="flex w-full justify-between gap-5">
        <p className="text-[#292D32]">
          149 of 1,646 properties are available and match your filters.
          <span className="text-[#185AAA]"> clear all filters</span>
        </p>

        <div className="hidden  items-center gap-1 pb-[24px] md:flex">
          <p className="whitespace-nowrap">sort BY :</p>
          <select
            className="h-[48px]   w-full flex-shrink items-center  rounded-md
              border-[1px] border-[#CECFD1]  bg-transparent p-2   text-black placeholder-gray-500 outline-none md:flex "
          >
            <option value="">Best Value</option>
            <option value="">$</option>
            <option value="">$$</option>
            <option value="">$$$</option>
          </select>
        </div>
      </div>
      <div className="mt-[16px] mb-[24px] flex">
        <div className=" flex h-[48px] w-[131px]  items-center rounded-l-md border-[1px] border-[#CECFD1] px-2 md:w-[164px]">
          <img src="./icons/sort.svg" className="m-auto h-[24px] w-[24px]" />

          <input
            placeholder="Sort by"
            className="ml-2 h-[18px] w-[120px] flex-shrink items-center bg-transparent text-black placeholder-gray-500 outline-none md:inline-flex"
            type="text"
          ></input>
        </div>
        <div className=" flex h-[48px] w-[131px]  items-center border-[1px] border-[#CECFD1] px-2 md:w-[164px]">
          <img src="./icons/filter.svg" className="m-auto h-[24px] w-[24px]" />

          <input
            placeholder="Filter"
            className="ml-2 h-[18px] w-[120px] flex-shrink items-center bg-transparent text-black placeholder-gray-500 outline-none md:inline-flex"
            type="text"
          ></input>
        </div>
        <div className=" flex h-[48px] w-[131px]  items-center rounded-r-md border-[1px] border-[#CECFD1] px-2 md:w-[164px]">
          <img src="./icons/image.svg" className="m-auto h-[24px] w-[24px]" />
        </div>
      </div>
      <div className="flex flex-col gap-[30px]">
        <HotelCard />
        <HotelCard />
        <HotelCard />
        <HotelCard />
        <HotelCard />
        <HotelCard />
        <HotelCard />
      </div>
      <div className="mt-[24px] mb-[31px] hidden h-[88px] w-[954px] items-center justify-between rounded-[8px] border-[1px] border-[#CECFD1] py-[20px] px-[24px] md:flex">
        <button className="border-[1px] border-[#CECFD1] py-[15px] px-[24px] ">
          PREVIOUS
        </button>
        <div className="flex">
          <p className="rounded-[4px] bg-[#E8F0FE] py-[15px] px-[19px]">1</p>
          <p className="rounded-[4px]  py-[15px] px-[19px]">2</p>
          <p className="rounded-[4px]  py-[15px] px-[19px]">3</p>
          <p className="rounded-[4px]  py-[15px] px-[19px]">4</p>
          <p className="rounded-[4px]  py-[15px] px-[19px]">5</p>
          <p className="rounded-[4px]  py-[15px] px-[19px]">6</p>
          <p className="rounded-[4px]  py-[15px] px-[19px]">...</p>
        </div>
        <button
          className="rounded-[4px] border-[1px] py-[15px] px-[24px] "
          style={{
            background: 'linear-gradient(282.25deg, #F4AB3E 0%, #F7C170 100%)',
          }}
        >
          PREVIOUS
        </button>
      </div>
    </div>
  )
}

export default CardContainer
