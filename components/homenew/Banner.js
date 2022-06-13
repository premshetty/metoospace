import React from 'react'

function Banner() {
  return (
    <div
      className="h-[600px]"
      style={{
        backgroundImage: 'url("./homepage/banner.png")',
        mixBlendMode: 'normal',
      }}
    >
      <div className="flex h-full items-center bg-black bg-opacity-60">
        <div className="m-auto flex max-w-[871px] flex-col items-center justify-center gap-20 ">
          <h1 className="text-center text-[40px]  font-bold text-white opacity-[1!important] ">
            <span className="text-[#FC60A8]"> Metoospace</span> helps to rent
            and book space effortlessly.
          </h1>
          <button className="h-[55px] w-[179px] rounded-[8px] border-[1px] py-4 px-9 text-white ">
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}

export default Banner
