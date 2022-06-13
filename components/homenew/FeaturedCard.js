import React from 'react'

function FeaturedCard({ name, properties, img }) {
  return (
    <div className="flex h-[319px] w-[300px] flex-col items-center justify-center">
      <h2 className="text-[18px] font-[500] leading-[22px]">{name}</h2>
      <img
        src={img}
        alt="hotel"
        className=" h-[250px] w-full bg-cover pt-3 pb-4"
      />
      <p className="text-[16px] font-[500] text-[#7161EF]">{properties}</p>
    </div>
  )
}

export default FeaturedCard
