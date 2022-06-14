import React from 'react'

function Footer() {
  return (
    <div className="flex h-[512px] flex-col gap-[43px] bg-[#38335F] px-[70px] py-[47px] text-white">
      <div className="grid grid-cols-4 justify-items-stretch">
        <div className="flex flex-col gap-[53px]">
          <div className="">
            <h1 className="text-[20px]  font-[500]">Metoospace</h1>
            <div className="mt-1 h-[6px] w-[30%] bg-[#7161EF]"></div>
          </div>
          <div className="flex flex-col gap-4 ">
            <a href="#" className="text-[14px]">
              Post space
            </a>
            <a href="#" className="text-[14px]">
              Book space
            </a>
            <a href="#" className="text-[14px]">
              About Us
            </a>
            <a href="#" className="text-[14px]">
              Privacy Policy
            </a>
            <a href="#" className="text-[14px]">
              Terms And Conditions
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-[53px]">
          <div className="">
            <h1 className="text-[20px]  font-[500]">Featured Space</h1>
            <div className="mt-1 h-[6px] w-[30%] bg-[#7161EF]"></div>
          </div>
          <div className="flex flex-col gap-4 ">
            <a href="#" className="text-[14px]">
              Houses
            </a>
            <a href="#" className="text-[14px]">
              Hotels
            </a>
            <a href="#" className="text-[14px]">
              Rooms
            </a>
            <a href="#" className="text-[14px]">
              Garages
            </a>
            <a href="#" className="text-[14px]">
              Kitchens
            </a>
            <a href="#" className="text-[14px]">
              Hostels
            </a>
            <a href="#" className="text-[14px]">
              Storages
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-[53px]">
          <div className="">
            <h1 className="text-[20px]  font-[500]">Contact Us</h1>
            <div className="mt-1 h-[6px] w-[30%] bg-[#7161EF]"></div>
          </div>
          <div className="flex flex-col gap-4 ">
            <a href="#" className="text-[14px]">
              Email : info@metoospace.com
            </a>
            <a href="#" className="text-[14px]">
              Phone No. : +99999999999,
            </a>
            <a href="#" className="text-[14px]">
              Address : North Virginia
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-[53px]">
          <div className="">
            <h1 className="text-[20px]  font-[500]">Connect With Us</h1>
            <div className="mt-1 h-[6px] w-[30%] bg-[#7161EF]"></div>
          </div>
          <div className="flex  gap-4 ">
            <img src="./homepage/fb.png" alt="facebook" className="h-6 w-6" />
            <img
              src="./homepage/twitter.png"
              alt="facebook"
              className="h-6 w-6"
            />
            <img
              src="./homepage/instagram.png"
              alt="facebook"
              className="h-6 w-6"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="m-auto mt-1 h-[1px] w-full bg-[#C5C0C0]"></div>
      </div>
      <p className="text-center">
        Copyright © 2022 Metoospace . All rights reserved.
      </p>
    </div>
  )
}

export default Footer
