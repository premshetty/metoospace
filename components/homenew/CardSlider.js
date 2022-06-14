import React from 'react'
import EScard from './EScard'

function CardSlider() {
  return (
    <div className="mt-[120px]  w-full  px-[70px]">
      <div className="">
        <h1 className="text-[24px] font-[500]">EXCLUSIVE SPACES</h1>
        <div className="mt-1 h-[6px] w-[10%] bg-[#7161EF]"></div>
      </div>
      <div className="flex gap-4">
        <EScard
          img="./homepage/esp1.png"
          hotelname="HOTEL HYAT"
          price="$300-$1000"
          category="Hotel"
          length="sq.ft 2456"
        />
        <EScard
          img="./homepage/esp2.png"
          hotelname="HOTEL HYAT"
          price="$300-$1000"
          category="Hotel"
          length="sq.ft 2456"
        />
        <EScard
          img="./homepage/esp3.png"
          hotelname="HOTEL HYAT"
          price="$300-$1000"
          category="Hotel"
          length="sq.ft 2456"
        />
        <EScard
          img="./homepage/esp4.png"
          hotelname="HOTEL HYAT"
          price="$300-$1000"
          category="Hotel"
          length="sq.ft 2456"
        />
      </div>
      <div className="mt-10  flex justify-end gap-5">
        <img src="./icons/circleLeft.svg" className="h-6 w-6" alt="left" />
        <img src="./icons/circleRight.svg" className="h-6 w-6" alt="Right" />
      </div>
    </div>
  )
}

export default CardSlider
