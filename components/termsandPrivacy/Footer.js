import React from 'react'

function Footer() {
  return (
    <div className="mt-[60px] flex  w-full flex-col">
      <div className=" grid  grid-cols-2 bg-[#E8F0FE]  px-7 py-5 lg:grid-cols-4">
        <div className="flex flex-col gap-5 lg:pl-7">
          <p className="text-[20px] font-bold">Help </p>
          <div className="flex flex-col">
            <a href="#" className="text-[16px]">
              Help Ceneter
            </a>
            <a href="#" className="text-[16px]">
              FAQs
            </a>
            <a href="#" className="text-[16px]">
              Privacy Policy
            </a>
            <a href="#" className="text-[16px]">
              Cookie Policy
            </a>
            <a href="#" className="text-[16px]">
              Terms of Use
            </a>
            <a href="#" className="text-[16px]">
              Advertise with Us
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-[20px] font-bold"> About Us </p>
          <div className="flex flex-col">
            <a href="#" className="text-[16px]">
              About
            </a>
            <a href="#" className="text-[16px]">
              Blog
            </a>
            <a href="#" className="text-[16px]">
              How we work
            </a>
            <a href="#" className="text-[16px]">
              Jobs
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-[20px] font-bold">Destination </p>
          <div className="flex flex-col">
            <a href="#" className="text-[16px]">
              countries
            </a>
            <a href="#" className="text-[16px]">
              cities
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-[20px] font-bold">Get the app </p>
          <div className="flex flex-col">
            <a href="#" className="text-[16px]">
              ios app
            </a>
            <a href="#" className="text-[16px]">
              Android app
            </a>
          </div>
        </div>
      </div>
      <div className="flex h-auto w-full items-center justify-between bg-[#292D32] py-5 pl-10 md:h-[64px] md:py-0">
        <p className="text-white">
          © 2022 Metoospace.com is a Cheffy Group company. All rights reserved.
        </p>
        <div className="flex gap-7 pr-7">
          <a
            href="#"
            className="flex gap-1 text-[16px] font-medium text-[white] "
          >
            <img
              src="./icons/globeWhite.svg"
              alt="language"
              className="h-[24px] w-[24px]"
            />
            English
          </a>
          <a
            href="#"
            className="flex items-center gap-1 text-[16px] font-medium text-[white] "
          >
            USD
            <img
              src="./icons/downWhite.svg"
              alt="language"
              className="h-[10px] w-[10px]"
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
