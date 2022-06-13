import React from 'react'

function Testimonial() {
  return (
    <div className="mt-[120px] flex h-[400px] w-full gap-[125px] px-[70px]">
      <div className="flex w-1/2 flex-col gap-7">
        <div className="">
          <h1 className="text-[24px] font-[500]">PEOPLE SAY ABOUT US</h1>
          <div className="mt-1 h-[6px] w-[20%] bg-[#7161EF]"></div>
        </div>
        <img
          src="./icons/quoates.png"
          className="mt-[20px] h-[54px] w-[60px]"
          alt="quoates"
        />
        <p className="pl-10 text-[#252525]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam
        </p>
        <div className="flex items-center gap-5 pl-10">
          <img src="./homepage/testUser.png" alt="user" />
          <div>
            <p className="font-[500] text-black">Andrew Matheu</p>
            <p className="text-[#7B7979]">Tenant</p>
          </div>
        </div>
        <div className="flex gap-5">
          <img src="./icons/circleLeft.svg" className="h-6 w-6" alt="left" />
          <img src="./icons/circleRight.svg" className="h-6 w-6" alt="Right" />
        </div>
      </div>
      <img
        src="./homepage/testimonial.png"
        className="w-1/2"
        alt="testimonial"
      />
    </div>
  )
}

export default Testimonial
