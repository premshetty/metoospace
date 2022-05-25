import React from 'react'
import PickupCard from './PickupCard'

function PickUpGrid() {
  return (
    <div className="mt-[20%]">
      <h5 className="pt-[20px] text-center font-semibold tracking-[5px] text-[#CC8C18]">
        FACILITIES
      </h5>
      <h2 className="mb-[20px] text-center font-serif text-[45px] text-[#24416B]">
        Giving entirely awesome
      </h2>
      <div className="m-auto grid max-w-[90%] grid-cols-4 gap-[30px]">
        <PickupCard />
        <PickupCard />
        <PickupCard />
        <PickupCard />
      </div>
    </div>
  )
}

export default PickUpGrid
