import React from 'react'

function Cta() {
  return (
    <div className="mt-[117px] flex h-[450px] bg-[#7161EF] text-white">
      <div className="flex w-[60%] flex-col gap-20 p-[72px] pr-[100px]">
        <h1 className="text-[35px] font-bold ">
          Metoospace Is Now In Comfort Of Your Pocket
        </h1>
        <p className="w-[579px] text-base">
          Download the app and stay updated always. <br />
          <span className="text-[12px]">
            Available for both iPhone and Android.{' '}
          </span>
        </p>
        <div className="flex gap-6">
          <img src="./homepage/playstore.png" alt="playstore" />
          <img src="./homepage/applestore.png" alt="playstore" />
        </div>
      </div>
      <img
        src="./homepage/cta.png"
        className="h-full w-[40%] bg-cover"
        alt="cta"
      />
    </div>
  )
}

export default Cta
