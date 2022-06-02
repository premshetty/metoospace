import React from 'react'
import HotelCard from './HotelCard'

function CardContainer() {
  return (
    <div className="mr-[43px] w-full">
      <h1 className="text-[32px] font-bold text-black">
        Dubai, United Arab Emirates
      </h1>
      <div className="flex w-full justify-between gap-5">
        <p className="text-[#292D32]">
          149 of 1,646 properties are available and match your filters.
          <span className="text-[#185AAA]"> clear all filters</span>
        </p>
        <div className="flex items-center gap-1 pb-[24px]">
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
      <div className="flex flex-col gap-[30px]">
        <HotelCard />
        <HotelCard />
        <HotelCard />
        <HotelCard />
        <HotelCard />
        <HotelCard />
        <HotelCard />
      </div>
    </div>
  )
}

export default CardContainer
