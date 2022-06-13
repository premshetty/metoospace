import React from 'react'
import FeaturedCard from './FeaturedCard'

function Featured() {
  return (
    <div className="mt-[70px] px-[71px]">
      <div className="w-[200px]">
        <h1>FEATURED SPACE</h1>
        <div className="mt-1 h-[6px] w-[40%] bg-[#7161EF]"></div>
      </div>
      <div className="grid grid-cols-4 gap-x-[35px] gap-y-[20px]">
        <FeaturedCard
          name="HOUSES"
          properties="456800+ Properties"
          img="./homepage/hotel1.png"
        />
        <FeaturedCard
          name="ROOMS"
          properties="456800+ Properties"
          img="./homepage/hotel2.png"
        />
        <FeaturedCard
          name="HOTELS"
          img="./homepage/hotel3.png"
          properties="456800+ Properties"
        />
        <FeaturedCard
          name="OFFICES"
          img="./homepage/hotel4.png"
          properties="456800+ Properties"
        />
        <FeaturedCard
          name="GARAGES"
          img="./homepage/hotel5.png"
          properties="456800+ Properties"
        />
        <FeaturedCard
          name="KITCHENS"
          img="./homepage/hotel6.png"
          properties="456800+ Properties"
        />
        <FeaturedCard
          name="HOSTELS"
          img="./homepage/hotel7.png"
          properties="456800+ Properties"
        />
        <FeaturedCard
          name="STORAGES"
          img="./homepage/hotel8.png"
          properties="456800+ Properties"
        />
      </div>
    </div>
  )
}

export default Featured
