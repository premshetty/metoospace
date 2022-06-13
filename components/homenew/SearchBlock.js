import React from 'react'

function SearchBlock() {
  return (
    <div
      style={{
        boxShadow: '3px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '10px',
      }}
      className="m-auto -mt-[100px] h-[180px] w-[80%] bg-white"
    >
      <div className="px-[87px] pt-[38px] pb-[45px]">
        <h3 className="text-[24px] font-[500] leading-[29px] text-[#252525]">
          Find Your Dream Space
        </h3>
        <div className="mt-[24px] flex items-center gap-5">
          <div className=" flex h-[44px] w-[700px] max-w-[95%] rounded-md border-[1px] border-[#CECFD1] p-2  ">
            <img
              src="./icons/search.svg"
              className=" h-[24px] w-[24px] opacity-70"
            />
            <input
              className="ml-2  w-full flex-shrink items-center bg-transparent placeholder-[#C5C0C0] outline-none"
              type="text"
              placeholder="Search by City,Landmarks etc"
            />
          </div>
          <button
            style={{ filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))' }}
            className="flex h-11 w-[126px] items-center gap-2 rounded-[8px] bg-[#D9D9D9] py-1 pl-[12px] pr-[10px] text-center text-[12px] font-[500]"
          >
            <img src="./icons/filter.svg" className="h-6 w-6" alt="filter" />
            Filter
          </button>
          <button
            style={{ filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))' }}
            className="h-11 w-[126px] rounded-[8px] bg-[#FC60A8] py-1 pl-[12px] pr-[10px] text-center text-[12px] font-[500] text-white"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  )
}

export default SearchBlock
