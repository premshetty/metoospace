import React from 'react'

function Facilities() {
  return (
    <div>
      <h1 className="text-[20px] font-bold">Overview</h1>
      <div className="flex gap-4">
        <div className="flex h-[118px] flex-col items-center justify-center gap-2 rounded-[8px] bg-[#F6F9FF]">
          <img src="./icons/insidecitycenter.svg" className="h-6 w-6" alt="" />
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
  )
}

export default Facilities
