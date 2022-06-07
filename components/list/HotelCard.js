import React from 'react'

function HotelCard() {
  return (
    <div className="flex h-[224px] w-[327px] rounded-[8px] border-[1px] border-[#CECFD1] md:h-[282px] md:w-[954px]">
      <div className="w-[112px] md:w-[327px]">
        <img
          src="./hotels/Main.png"
          className="h-full w-[112px] rounded-l-[8px] bg-cover md:h-[230px] md:w-[327px] md:rounded-tl-[8px]"
          alt="main"
        />
        <div className="hidden grid-cols-4 md:grid">
          <img
            className=" h-[50px] rounded-bl-[8px]"
            src="./hotels/small1.png"
            alt="hotel"
          />
          <img className="h-[50px]" src="./hotels/small2.png" alt="hotel" />
          <img className="h-[50px]" src="./hotels/small3.png" alt="hotel" />
          <div
            className="flex h-[50px]  items-center justify-center"
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
      <div className="flex flex-col py-[16px] pr-[16px] pl-[16px] md:py-[24px] md:pr-0 md:pl-[24px] ">
        <div className="items-center gap-[63px] md:flex">
          <h1 className="text-[14px] font-[500] text-[#292D32] md:text-[20px] md:font-bold">
            Luxury apartment walking distance to Burj Khalifa
          </h1>
          <div className="hidden  gap-[25px]  md:flex">
            <img src="./icons/heart.svg" alt="" className="h-4 w-4" />
            <img src="./icons/node.svg" alt="" className="h-4 w-4" />
          </div>
        </div>
        <div className="mt-[8px] gap-[52px] md:flex">
          <p>5 Stars • 5.3 km to center</p>
          <a
            href=" #"
            className="flex items-center text-[12px] font-[400] text-blue-700"
          >
            <img src="./icons/location.svg" alt="" className="h-4 w-4" />
            Sheikh Zayed Rd, Dubai, Dubai
          </a>
        </div>
        <div className="py-4">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-[16px] md:w-[70%]">
            <div className="hidden  flex-wrap  gap-[8px] md:flex">
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
            <h3 className="hidden text-[14px] font-[400] md:block">
              Experience ultimate relaxation with stunning views at our
              temperature controlled pools and exquisite options.
            </h3>
            <p className="-mt-[3px]">
              <span className="font-bold"> 4.6/5</span> &nbsp; Wonderful (295
              reviews)
            </p>
          </div>
          <div className="float-right hidden flex-col gap-2 pr-[24px] text-right md:flex">
            <p className="text-[14px] font-[400]">Per night</p>
            <p className="text-[14px] font-[400]"> including taxes & fees</p>
            <div className="flex justify-end gap-2">
              <button className="rounded-[4px] bg-[#D32F2F] px-2 py-[3px] text-[12px] text-white">
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
    </div>
  )
}

export default HotelCard
