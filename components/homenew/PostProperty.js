import React from 'react'

function PostProperty() {
  return (
    <div className="mt-[120px] flex h-[400px] w-full gap-[125px] px-[70px]">
      <img
        className="w-1/2 bg-cover"
        src="./homepage/postroom.png"
        alt="postroom"
      />
      <div className="flex w-1/2 flex-col gap-6">
        <div className="">
          <h1 className="text-[24px] font-[500]">
            RENT YOUR PROPERTY WITH EASE
          </h1>
          <div className="mt-1 h-[6px] w-[40%] bg-[#7161EF]"></div>
        </div>
        <p className="text-[#7B7979]">
          Metoospace provides you the platform to post your space online and
          reach larger audiences in a hassle free manner. We support - hotels,
          hostels, kitchens, rooms, garages, storages, offices and houses.
        </p>
        <p className="text-[#7B7979]">
          So, what are you waiting for ? Post your space now and enjoy earning..
        </p>
        <button
          style={{ filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))' }}
          className="h-10 w-[194px] rounded-[8px] bg-[#FC60A8] py-1 pl-[12px] pr-[10px] text-center text-[12px] font-[500] text-white"
        >
          POST YOUR SPACE
        </button>
      </div>
    </div>
  )
}

export default PostProperty
