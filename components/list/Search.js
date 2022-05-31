import React from 'react'

function Search() {
  return (
    <div className="flex h-[88px] justify-around">
      <div className="hidden h-[48px] w-[454px] rounded-md border-[1px] border-[#CECFD1] p-2  md:flex">
        <img src="./icons/search.svg" className="m-auto h-[24px] w-[24px]" />
        <input
          className="ml-2 h-[18px] w-full flex-shrink items-center bg-transparent placeholder-gray-500 outline-none md:inline-flex"
          type="text"
          placeholder="Where are you going ?"
        />
      </div>
      <div className="hidden h-[48px] w-[164px] rounded-md border-[1px] border-[#CECFD1] px-2 md:flex">
        <img src="./icons/flight.svg" className="m-auto h-[24px] w-[24px]" />
        <div>
          <p className="ml-2 text-[14px]"> checkin</p>

          <input
            placeholder="Date"
            className="ml-2 h-[18px] w-[120px] flex-shrink items-center bg-transparent placeholder-gray-500 outline-none md:inline-flex"
            type="text"
            onFocus={(e) => (e.target.type = 'date')}
            onBlur={(e) => (e.target.type = 'text')}
            id="date"
          ></input>
        </div>
      </div>
      <div className="hidden h-[48px] w-[164px] rounded-md border-[1px] border-[#CECFD1] px-2 md:flex">
        <img
          src="./icons/flight.svg"
          className="m-auto h-[24px] w-[24px] rotate-180"
        />
        <div>
          <p className="ml-2 text-[14px]"> check out</p>

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
      <div className="hidden h-[48px] w-[200px] rounded-md border-[1px] border-[#CECFD1] p-2  md:flex">
        <img src="./icons/group.svg" className="m-auto h-[24px] w-[24px]" />
        <input
          className="ml-2  w-full flex-shrink items-center bg-transparent placeholder-gray-500 outline-none md:inline-flex"
          type="text"
          placeholder="Where are you going ?"
        />
      </div>
      <button
        className="h-[48px] w-[154px] rounded-[4px]"
        style={{
          background: 'linear-gradient(282.25deg, #F4AB3E 0%, #F7C170 100%)',
        }}
      >
        SEARCH
      </button>
    </div>
  )
}

export default Search
