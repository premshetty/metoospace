import React from 'react'

function Sidepanel() {
  return (
    <div className="flex h-[598px] w-[302px] flex-col items-center  rounded-[8px] border-[1px] border-[#CECFD1] py-[24px]">
      <div className="flex w-[100%] items-start justify-start  gap-3 border-l-[2px] border-[#F4AB3E]">
        <img src="./icons/1user.svg" className=" ml-5 h-[24px] w-[24px]" />
        <p className="font-[16px] font-[500]">Most frequently question</p>
      </div>
      <div className="w-[80%] py-4">
        <div className=" border-t border-gray-300"></div>
      </div>
      <div className="flex w-[100%] items-start justify-start gap-3">
        <img src="./icons/booking.svg" className=" ml-5 h-[24px] w-[24px]" />
        <p className="font-[16px] font-[500]">Booking</p>
      </div>
      <div className="w-[80%] py-4">
        <div className=" border-t border-gray-300"></div>
      </div>
      <div className="flex w-[100%] items-start justify-start gap-3">
        <img src="./icons/cancel.svg" className=" ml-5 h-[24px] w-[24px]" />
        <p className="font-[16px] font-[500]">Cancellation</p>
      </div>
      <div className="w-[80%] py-4">
        <div className=" border-t border-gray-300"></div>
      </div>
      <div className="flex w-[100%] items-start justify-start gap-3">
        <img src="./icons/booking.svg" className=" ml-5 h-[24px] w-[24px]" />
        <p className="font-[16px] font-[500]">Change Booking</p>
      </div>
    </div>
  )
}

export default Sidepanel
