import React from 'react'
function Search() {
  return (
    <div className="flex items-center justify-between">
      <div className="mb-[24px] grid w-[327px] grid-cols-2 gap-6 bg-[#F6F9FF] p-6 md:mb-0 md:flex md:h-[88px] md:w-auto md:justify-around  md:p-0">
        <div className=" flex h-[48px] w-[131px]  items-center rounded-md border-[1px] border-[#CECFD1] px-2 md:w-[164px]">
          <img src="./icons/flight.svg" className="m-auto h-[24px] w-[24px]" />
          <div>
            <p className="ml-2 text-[14px] text-gray-400"> checkin</p>

            <input
              placeholder="Date"
              className="ml-2 h-[18px] w-[120px] flex-shrink items-center bg-transparent text-black placeholder-gray-500 outline-none md:inline-flex"
              type="text"
              onFocus={(e) => (e.target.type = 'date')}
              onBlur={(e) => (e.target.type = 'text')}
              id="date"
            ></input>
          </div>
        </div>
        <div className=" flex h-[48px] w-[131px]  items-center rounded-md border-[1px] border-[#CECFD1] px-2 md:w-[164px]">
          <img
            src="./icons/flight.svg"
            className="m-auto h-[24px] w-[24px] rotate-180"
          />
          <div>
            <p className="ml-2 text-[14px] text-gray-400"> check out</p>

            <input
              placeholder="Date"
              className="ml-2  w-[120px] flex-shrink items-center bg-transparent placeholder-gray-500 outline-none md:inline-flex"
              type="text"
              onFocus={(e) => (e.target.type = 'date')}
              onBlur={(e) => (e.target.type = 'text')}
              id="date"
            ></input>
          </div>
        </div>
        <div className="hidden h-[48px] w-[200px] items-center rounded-md border-[1px] border-[#CECFD1] p-2  md:flex">
          <img src="./icons/group.svg" className="m-auto h-[24px] w-[24px]" />
          <div>
            <p className="ml-2 text-[14px] text-gray-400"> Guests</p>

            <input
              className="ml-2  w-full flex-shrink items-center bg-transparent placeholder-gray-500 outline-none md:inline-flex"
              type="text"
              placeholder="rooms"
            />
          </div>
        </div>
        <button
          className="col-span-2 h-[48px] w-[154px] rounded-[4px]"
          style={{
            background: 'linear-gradient(282.25deg, #F4AB3E 0%, #F7C170 100%)',
          }}
        >
          SEARCH
        </button>
      </div>
      <div className="hidden  items-center gap-1 pb-[24px] md:flex">
        <p className="whitespace-nowrap">sort BY :</p>
        <select
          className="h-[48px]   w-full flex-shrink items-center  rounded-md
              border-[1px] border-[#CECFD1]  bg-transparent p-2   text-black placeholder-gray-500 outline-none md:flex "
        >
          <option value="">Best Value</option>
          <option value="">$</option>
          <option value="">$$</option>
          <option value="">$$$</option>
        </select>
      </div>
    </div>
  )
}

export default Search
