import React from 'react'

function Hero() {
  return (
    <div
      className="flex h-[83vh] flex-col items-center justify-center"
      style={{ backgroundImage: "url('./herobg.png')" }}
    >
      <h1 className="font-['cursive'] text-[150px] text-white">
        Make Memories
      </h1>
      <p className="text-white">
        Discover the place where you have fun & enjoy a lot
      </p>
    </div>
  )
}

export default Hero
