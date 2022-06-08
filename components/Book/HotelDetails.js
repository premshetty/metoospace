import React from 'react'

function HotelDetails() {
  return (
    <div className="flex justify-between  py-6">
      <div className="flex flex-col gap-3">
        <h1 className=" text-[18px] font-bold text-black md:text-[32px]">
          Dubai, United Arab Emirates
        </h1>
        <div className="flex gap-8">
          <div className="flex gap-1">
            <img
              className="h-6 w-6 transition hover:scale-105 "
              src="./icons/Star.svg"
              alt="Star"
            />
            <img
              className="h-6 w-6 transition hover:scale-105 "
              src="./icons/Star.svg"
              alt="Star"
            />
            <img
              className="h-6 w-6 transition hover:scale-105 "
              src="./icons/Star.svg"
              alt="Star"
            />
            <img
              className="h-6 w-6 transition hover:scale-105 "
              src="./icons/Star.svg"
              alt="Star"
            />
            <img
              className="h-6 w-6 transition hover:scale-105 "
              src="./icons/Star.svg"
              alt="Star"
            />
            <p>5 star</p>
          </div>
          <div className="flex gap-1">
            <p className="font-[500]"> 4.6/5</p>
            <p>Wonderful (295 reviews)</p>
          </div>
          <a
            href=" #"
            className="flex items-center text-[12px] font-[400] text-blue-700"
          >
            <img src="./icons/location.svg" alt="" className="h-4 w-4" />
            Sheikh Zayed Rd, Dubai, Dubai
          </a>
        </div>
        <div className="  mt-[24px]  flex flex-wrap gap-[8px]">
          <p className="bg-[#E8F0FE] px-2 py-[3px] text-[12px]"> Car park</p>
          <p className="bg-[#E8F0FE] px-2 py-[3px] text-[12px]"> Car park</p>
          <p className="bg-[#E8F0FE] px-2 py-[3px] text-[12px]"> Car park</p>
          <p className="bg-[#E8F0FE] px-2 py-[3px] text-[12px]"> Car park</p>
          <p className="bg-[#E8F0FE] px-2 py-[3px] text-[12px]"> Car park</p>
          <p className="bg-[#E8F0FE] px-2 py-[3px] text-[12px]"> Car park</p>
          <p className="bg-[#E8F0FE] px-2 py-[3px] text-[12px]"> Car park</p>
          <p className="bg-[#E8F0FE] px-2 py-[3px] text-[12px]"> Car park</p>
          <p className="bg-[#E8F0FE] px-2 py-[3px] text-[12px]"> +5</p>
        </div>
      </div>
      <div className="flex flex-col items-end justify-end gap-3">
        <div className="mt-2 flex justify-end gap-[25px]">
          <img src="./icons/heart.svg" alt="" className="h-4 w-4" />
          <img src="./icons/node.svg" alt="" className="h-4 w-4" />
        </div>
        <button className="mt-[22px] w-[65px] justify-end rounded-[4px] bg-[#D32F2F] px-2 py-[3px] text-[12px] text-white">
          13% off
        </button>
        <div className="flex justify-end gap-4">
          <div>
            <p className="text-right text-[14px] font-[400]">Per night</p>
            <p className="whitespace-nowrap text-right text-[14px] font-[400]">
              including taxes & fees
            </p>
          </div>
          <div className="h-auto w-[2px] bg-[#CECFD1]"></div>
          <div>
            <h1 className="text-3xl font-bold"> $ 151</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HotelDetails
