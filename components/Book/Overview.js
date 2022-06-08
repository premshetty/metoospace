import React from 'react'

function Overview() {
  return (
    <div className="flex justify-between gap-6">
      <div className="flex w-[70%] flex-col gap-4">
        <h1 className="text-[20px] font-bold">Overview</h1>
        <p className="leading-[28px]">
          With a stay at Dusit Thani Dubai, you'll be centrally located in
          Dubai, steps from Sheikh Zayed Road and within a 5-minute drive of
          Dubai World Trade Centre. Featured amenities include a business
          center, limo/town car service, and complimentary newspapers in the
          lobby. Planning an event in Dubai? This hotel has facilities measuring
          17007 square feet (1580 square meters), including a conference center.
          A roundtrip airport shuttle is provided for a surcharge (available 24
          hours), and free self parking is available onsite.
        </p>
        <p className="leading-[28px]">
          With a stay at Dusit Thani Dubai, you'll be centrally located in
          Dubai, steps from Sheikh Zayed Road and within a 5-minute drive of
          Dubai World Trade Centre. Featured amenities include a business
          center, limo/town car service, and complimentary newspapers in the
          lobby. Planning an event in Dubai? This hotel has facilities measuring
          17007 square feet (1580 square meters), including a conference center.
          A roundtrip airport shuttle is provided for a surcharge (available 24
          hours), and free self parking is available onsite.
        </p>
      </div>
      <div className="h-[473px] w-1/4 rounded-[8px] border-[1px] border-[#CECFD1] p-6 ">
        <h1 className="text-[20px] font-bold">Overview</h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex h-[118px] flex-col items-center justify-center gap-2 rounded-[8px] bg-[#F6F9FF]">
            <img
              src="./icons/insidecitycenter.svg"
              className="h-6 w-6"
              alt=""
            />
            <p className="w-16 text-[14px]">Inside city center</p>
          </div>
          <div className="flex h-[118px] flex-col items-center justify-center gap-2 rounded-[8px] bg-[#F6F9FF]">
            <img src="./icons/frontdesk.svg" className="h-6 w-6" alt="" />
            <p className="w-16 text-[14px]">Front desk [24-hour]</p>
          </div>
          <div className="flex h-[118px] flex-col items-center justify-center gap-2 rounded-[8px] bg-[#F6F9FF]">
            <img src="./icons/transfer.svg" className="h-6 w-6" alt="" />
            <p className="w-16 text-[14px]">Airport transfer</p>
          </div>
          <div className="flex h-[118px] flex-col items-center justify-center gap-2 rounded-[8px] bg-[#F6F9FF]">
            <img src="./icons/clean.svg" className="h-6 w-6" alt="" />
            <p className="w-16 text-[14px]">Sparkling clean</p>
          </div>
          <div className="flex h-[118px] flex-col items-center justify-center gap-2 rounded-[8px] bg-[#F6F9FF]">
            <img src="./icons/excellentview.svg" className="h-6 w-6" alt="" />
            <p className="w-16 text-[14px]">Excellent view</p>
          </div>
          <div className="flex h-[118px] flex-col items-center justify-center gap-2 rounded-[8px] bg-[#F6F9FF]">
            <img src="./icons/bus.svg" className="h-6 w-6" alt="" />
            <p className="w-16 text-[14px]">near to public transportation</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview
