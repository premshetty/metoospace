import React from 'react'
import ButtonComponent from '../Booking/ButtonComponent'

function PriceCard2() {
  return (
    <div className="mt-10 h-[460px]  w-full rounded-md border-[1px] border-[#80808070] shadow-md ">
      <div className=" grid w-full grid-cols-1 flex-wrap content-center gap-5  rounded-t-[10px]  bg-blue-50 px-2 py-3 md:flex md:justify-between">
        <div className="flex items-center">
          <img src="sandClock.svg " className="h-4 w-auto" alt="holding" />
          <p className="whitespace-nowrap">Holding Pricing (2:03 ) </p>
        </div>
        <ButtonComponent name="Reset" />
      </div>
      <h3 className="p-5 font-bold  text-black"> Your Booking </h3>
      <div className="flex flex-col gap-2">
        <div className=" flex items-center justify-between  px-5">
          <p className="text-sm  font-bold text-[#000000c2]">Room Price</p>
          <p className="text-sm  font-bold text-[#000000c2]">$ 107.00</p>
        </div>
        <div className=" flex items-center justify-between  px-5">
          <p className="text-sm  font-bold text-[#000000c2]">Discount</p>
          <p className="rounded-lg bg-[#ff0000be]  p-2 px-5 text-sm text-white">
            13 % off
          </p>
        </div>
        <div className=" flex items-center justify-between  px-5">
          <p className="text-sm  font-bold text-[#000000c2]">Taxexs & fees</p>
          <p className="text-sm  font-bold text-[#000000c2]">$24.00</p>
        </div>
        <div className=" flex items-center justify-between  px-5">
          <p className="text-sm  font-bold text-[#000000c2]">Discount</p>
          <p className="rounded-lg bg-[#008000c0]  p-2 px-5 text-sm text-white">
            Free
          </p>
        </div>
        <div className="py-4 px-5">
          <div className="w-full border-t border-gray-300 "></div>
        </div>
        <div className=" flex items-center justify-between  px-5">
          <p className="text-sm  font-bold text-[#000000c2]">Price</p>
          <p className="text-sm  font-bold text-[#000000c2]">$131.00</p>
        </div>
        <div className=" flex w-[300px] items-center justify-between px-5 ">
          <p className="text-sm   text-[#000000c2]">
            Not included in price (collected by the property) : Tourism Fee (pay
            at the property) AED:20.00
          </p>
        </div>
      </div>
    </div>
  )
}

export default PriceCard2
