import React from 'react'

function RoomCard() {
  return (
    <div className="flex h-[350px] w-[628px] rounded-[8px] border-[1px] border-[#CECFD1] ">
      <div className="flex w-[48%] flex-col gap-1">
        <img className="h-[59%] w-full" src="./hotels/gallery1.png" alt="" />
        <div className="flex h-[39%] max-w-full">
          <img className="w-1/2" src="./hotels/gallery2.png" alt="" />
          <img className="w-1/2" src="./hotels/gallery3.png" alt="" />
        </div>
      </div>
      <div className="flex flex-col p-6">
        <h1 className="text-[18px] font-bold text-[#292D32]">
          Deluxe Twin Bed
        </h1>
        <div className="mt-[20px] flex flex-col gap-3">
          <div className="flex items-center gap-2 ">
            <img
              src="./icons/greentick.svg"
              className="h-[9px] w-[13px]"
              alt="features"
            />
            <p>Pay at hotel</p>
          </div>
          <div className="flex items-center gap-2 ">
            <img
              src="./icons/greentick.svg"
              className="h-[9px] w-[13px]"
              alt="features"
            />
            <p>Free Wifi</p>
          </div>
          <div className="flex items-center gap-2 ">
            <img
              src="./icons/greentick.svg"
              className="h-[9px] w-[13px]"
              alt="features"
            />
            <p className="whitespace-nowrap">
              Free cancellation before May 12,2022
            </p>
          </div>
          <div className="flex items-center gap-2 ">
            <img
              src="./icons/greentick.svg"
              className="h-[9px] w-[13px]"
              alt="features"
            />
            <p>City view</p>
          </div>
          <div className="flex items-center gap-2 ">
            <img
              src="./icons/greentick.svg"
              className="h-[9px] w-[13px]"
              alt="features"
            />
            <p>Non-smoking</p>
          </div>
        </div>
        <div className="flex items-center ">
          <div className="flex flex-col justify-end gap-2 p-6">
            <button className="w-[65px] rounded-[4px] bg-[#D32F2F] px-2 py-[3px] text-[12px] text-white">
              13% off
            </button>
            <h2 className="text-[24px] font-bold text-[#292D32]">$151</h2>
          </div>
          <button
            className="h-[48px] w-[156px] rounded-[4px]"
            style={{
              background:
                'linear-gradient(282.25deg, #F4AB3E 0%, #F7C170 100%)',
            }}
          >
            BOOK NOW
          </button>
        </div>
      </div>
    </div>
  )
}

export default RoomCard
