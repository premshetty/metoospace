import React from 'react'
import ButtonComponent from './ButtonComponent'

function PriceCard() {
  return (
    <div className="w-[35%]">
      <div className="absolute  mt-5 h-[450px] w-auto rounded-[10px] border-[1px] border-[#80808070] shadow-md  ">
        <div className=" flex items-center gap-3 rounded-t-[10px] bg-blue-50 px-5 py-3">
          <img src="sandClock.svg " className="h-4 w-auto" alt="holding" />
          <p>Holding Pricing (2:03 ) </p>
          <ButtonComponent name="Reset" />
        </div>
        <h3 className="p-5 font-bold  text-black"> Your Booking </h3>
        <div>
          <div className="mt-3 flex items-center justify-between gap-3 px-5">
            <p className="text-sm  font-bold text-[#000000c2]">Room Price</p>
            <p className="text-sm  font-bold text-[#000000c2]">$ 107.00</p>
          </div>
          <div className="mt-3 flex items-center justify-between gap-3 px-5">
            <p className="text-sm  font-bold text-[#000000c2]">Discount</p>
            <p className="rounded-lg bg-[#ff0000be]  p-2 px-5 text-sm text-white">
              13 % off
            </p>
          </div>
          <div className="mt-3 flex items-center justify-between gap-3 px-5">
            <p className="text-sm  font-bold text-[#000000c2]">Taxexs & fees</p>
            <p className="text-sm  font-bold text-[#000000c2]">$24.00</p>
          </div>
          <div className="mt-3 flex items-center justify-between gap-3 px-5">
            <p className="text-sm  font-bold text-[#000000c2]">Discount</p>
            <p className="rounded-lg bg-[#008000c0]  p-2 px-5 text-sm text-white">
              Free
            </p>
          </div>
          <div class="py-4 px-5">
            <div class="w-full border-t border-gray-300 "></div>
          </div>
          <div className="mt-3 flex items-center justify-between gap-3 px-5">
            <p className="text-sm  font-bold text-[#000000c2]">Price</p>
            <p className="text-sm  font-bold text-[#000000c2]">$131.00</p>
          </div>
          <div className="mt-3 flex w-[300px] items-center justify-between gap-3 px-5">
            <p className="text-sm   text-[#000000c2]">
              Not included in price (collected by the property) : Tourism Fee
              (pay at the property) AED:20.00
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PriceCard
