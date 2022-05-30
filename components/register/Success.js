import React from 'react'

function Success() {
  return (
    <div className="m-auto flex h-[100vh] w-full flex-col items-center justify-center gap-5">
      <h1 className="h-[40px] font-bold">Done! </h1>
      <img src="./icons/done.svg" alt="done" className="h-[108px] w-[108px]" />
      <div className="flex w-[90%] justify-center gap-2 bg-[#D9EEE1] p-5 text-center md:w-[40%] ">
        <img src="./icons/tick.svg" alt="done" className="h-[24px] w-[24px]" />
        <p className="text-[16px] font-semibold text-[#292D32]">
          Success! Your email has been verfied.
        </p>
      </div>
      <button
        className="h-[48px] w-[146px] rounded-[4px]"
        style={{
          background: 'linear-gradient(282.25deg, #F4AB3E 0%, #F7C170 100%)',
        }}
      >
        Return to Login
      </button>
    </div>
  )
}

export default Success
