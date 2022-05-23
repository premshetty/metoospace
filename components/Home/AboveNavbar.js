import React from 'react'

function AboveNavbar() {
  return (
    <div className="flex items-center justify-between px-5">
      <div className="flex gap-5">
        <img src="./social/facebook.svg" alt="facebook" className="h-6 w-6" />
        <img src="./social/twitter.svg" alt="twitter" className="h-6 w-6" />
        <img src="./social/instagram.svg" alt="instagram" className="h-6 w-6" />
        <img src="./social/youtube.svg" alt="youtube" className="h-6 w-6" />
      </div>
      <h1 className="font-serif text-[35px] font-bold text-[#24416B]">
        MetooSpace
      </h1>
      <div className="flex ">
        <img
          src="./social/location.svg"
          alt="facebook"
          className="mr-3 h-6 w-6"
        />
        <p className=" whitespace-nowrap">
          205 Fida Walinton, Tongo Street Front, USA
        </p>
      </div>
    </div>
  )
}

export default AboveNavbar
