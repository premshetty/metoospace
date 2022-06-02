import React from 'react'

function HotelCard() {
  return (
    <div className="flex h-[300px] w-[954px] rounded-[8px] border-[1px] border-[#CECFD1]">
      <div className="w-[302px]">
        <img
          src="./hotels/Main.png"
          className="h-[230px] rounded-tl-[8px]"
          alt="main"
        />
        <div className=" grid grid-cols-4">
          <img
            className=" h-[70px] rounded-bl-[8px]"
            src="./hotels/small1.png"
            alt="hotel"
          />
          <img className="h-[70px]" src="./hotels/small2.png" alt="hotel" />
          <img className="h-[70px]" src="./hotels/small3.png" alt="hotel" />
          <div
            className="flex h-[70px]  items-center justify-center"
            style={{
              backgroundImage: 'url("./hotels/seall.png")',
            }}
          >
            <a href="#" className="text-center text-white">
              {' '}
              See all
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col py-[24px] pl-[24px] ">
        <div className="flex items-center gap-[63px]">
          <h1 className="text-[20px] font-bold text-[#292D32]">
            Luxury apartment walking distance to Burj Khalifa
          </h1>
          <div className="flex  gap-[25px]">
            <img src="./icons/heart.svg" alt="" className="h-4 w-4" />
            <img src="./icons/node.svg" alt="" className="h-4 w-4" />
          </div>
        </div>
        <div className="mt-[8px] flex gap-[52px]">
          <p>5 Stars • 5.3 km to center</p>
          <a href=" #" className="flex items-center text-blue-700">
            <img src="./icons/location.svg" alt="" className="h-4 w-4" />
            Sheikh Zayed Rd, Dubai, Dubai
          </a>
        </div>
        <div className="py-4">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="flex justify-between">
          <div className="flex w-[70%] flex-col gap-[16px]">
            <div className="flex  flex-wrap gap-[8px]">
              <p className="bg-[#E8F0FE] px-2 py-[3px] text-[12px]">
                {' '}
                Car park
              </p>
              <p className="bg-[#E8F0FE] px-2 py-[3px] text-[12px]">
                {' '}
                Car park
              </p>
              <p className="bg-[#E8F0FE] px-2 py-[3px] text-[12px]">
                {' '}
                Car park
              </p>
              <p className="bg-[#E8F0FE] px-2 py-[3px] text-[12px]">
                {' '}
                Car park
              </p>
              <p className="bg-[#E8F0FE] px-2 py-[3px] text-[12px]">
                {' '}
                Car park
              </p>
              <p className="bg-[#E8F0FE] px-2 py-[3px] text-[12px]">
                {' '}
                Car park
              </p>
              <p className="bg-[#E8F0FE] px-2 py-[3px] text-[12px]">
                {' '}
                Car park
              </p>
              <p className="bg-[#E8F0FE] px-2 py-[3px] text-[12px]">
                {' '}
                Car park
              </p>
              <p className="bg-[#E8F0FE] px-2 py-[3px] text-[12px]"> +5</p>
            </div>
            <h3 className="text-[14px] font-[400]">
              Experience ultimate relaxation with stunning views at our
              temperature controlled pools and exquisite options.
            </h3>
            <p>
              <span className="font-bold"> 4.6/5</span> &nbsp; Wonderful (295
              reviews)
            </p>
          </div>
          <div className="float-right flex flex-col gap-2 pr-[24px] text-right">
            <p className="text-[14px] font-[400]">Per night</p>
            <p className="text-[14px] font-[400]"> including taxes & fees</p>
            <div className="flex justify-end gap-2">
              <button className="rounded-[4px] bg-[#D32F2F] px-2 py-[3px] text-[12px] text-white">
                13% off
              </button>
              <h2 className="text-[24px] font-bold text-[#292D32]">$151</h2>
            </div>
            <button
              className="h-[48px] w-[146px] rounded-[4px]"
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
    </div>
  )
}

export default HotelCard
