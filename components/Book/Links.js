import React from 'react'

function Links({ ...props }) {
  return (
    <div className=" group mt-[23px] flex h-20 gap-9 border-[1px]  border-[#CECFD1] px-[43px] py-[23px]  ">
      <button
        onClick={props.Overview}
        className="flex h-full  flex-col items-center justify-center border-[#F4AB3E] target:border-b-[1px] active:border-b-[1px] "
      >
        Overview
      </button>

      <button
        onClick={props.rooms}
        href="#"
        className="flex h-full  flex-col items-center justify-center border-[#F4AB3E] target:border-b-[1px] active:border-b-[1px]"
      >
        Rooms
      </button>
      <button
        onClick={props.facilities}
        href="#"
        className="flex h-full  flex-col items-center justify-center border-[#F4AB3E] target:border-b-[1px] active:border-b-[1px]"
      >
        Facilities
      </button>
      <button
        href="#"
        className="flex h-full  flex-col items-center justify-center border-[#F4AB3E] target:border-b-[1px] active:border-b-[1px]"
      >
        Location
      </button>
      <button
        href="#"
        className="flex h-full  flex-col items-center justify-center border-[#F4AB3E] target:border-b-[1px] active:border-b-[1px]"
      >
        Reviews
      </button>
    </div>
  )
}

export default Links
