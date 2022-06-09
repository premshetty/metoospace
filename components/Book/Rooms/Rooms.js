import React from 'react'

import Search from './Search'
import RoomCard from './RoomCard'

function Rooms() {
  return (
    <div>
      <Search />
      <div className="grid grid-cols-2 gap-6">
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
      </div>
      <div className="mt-[24px]   hidden h-[88px]  items-center justify-between rounded-[8px] border-[1px] border-[#CECFD1] py-[20px] px-[24px] md:flex">
        <button className="border-[1px] border-[#CECFD1] py-[15px] px-[24px] ">
          PREVIOUS
        </button>
        <div className="flex">
          <p className="rounded-[4px] bg-[#E8F0FE] py-[15px] px-[19px]">1</p>
          <p className="rounded-[4px]  py-[15px] px-[19px]">2</p>
          <p className="rounded-[4px]  py-[15px] px-[19px]">3</p>
          <p className="rounded-[4px]  py-[15px] px-[19px]">4</p>
          <p className="rounded-[4px]  py-[15px] px-[19px]">5</p>
          <p className="rounded-[4px]  py-[15px] px-[19px]">6</p>
          <p className="rounded-[4px]  py-[15px] px-[19px]">...</p>
        </div>
        <button
          className="rounded-[4px] border-[1px] py-[15px] px-[24px] "
          style={{
            background: 'linear-gradient(282.25deg, #F4AB3E 0%, #F7C170 100%)',
          }}
        >
          PREVIOUS
        </button>
      </div>
    </div>
  )
}

export default Rooms
