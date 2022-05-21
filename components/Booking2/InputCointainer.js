import React from 'react'
import InputArea from './../Booking/InputArea'
import WhatyouNeed from './../Booking/WhatyouNeed'
import ButtonComponent from './../Booking/ButtonComponent'
import {
  UserIcon,
  MailIcon,
  GlobeAltIcon,
  PhoneIcon,
} from '@heroicons/react/outline'
function InputCointainer() {
  return (
    <div className="col-span-3 w-[95%]">
      <form>
        <h2 className="text-xl font-bold text-black">
          Let us Know Who You are?
        </h2>
        <InputArea
          width="w-[100%]"
          type="text"
          placeholder="Enter Your Full Name"
          icon={<UserIcon className="h-6 text-gray-600" />}
          required={true}
        />
        <InputArea
          width="w-[100%]"
          type="email"
          placeholder="Enter Your Email"
          icon={<MailIcon className="h-6 text-gray-600" />}
          required={true}
        />
        <p className="ml-2 mb-4 mt-1 text-sm text-gray-800">
          We will send confirmation to this email adress
        </p>
        <div className="flex flex-col md:flex-row">
          <InputArea
            width="w-full md:w-[50%]"
            type="tel"
            placeholder="Enter Your Phone Number (optional)"
            icon={<PhoneIcon className="h-6 text-gray-600" />}
            required={false}
          />
          <InputArea
            width="w-full md:w-[50%]"
            type="tel"
            placeholder="please select your country"
            icon={<GlobeAltIcon className="h-6 text-gray-600" />}
            required={false}
          />
        </div>

        <div className="mt-5 ml-3">
          <input type="checkbox" className="h-4 w-4" />
          <label className="ml-3 text-xl text-gray-500">
            Please click here if you want to book for someone else?
          </label>
        </div>
        <WhatyouNeed />
        <div class="py-4">
          <div class="w-full border-t border-gray-300"></div>
        </div>
        <div className="block md:hidden"></div>
        <div className="flex-start mt-3 flex flex-col gap-2 md:flex-row md:items-center md:justify-between md:gap-2 md:pb-10">
          <div className=" ml-3">
            <input type="checkbox" className="h-4 w-4" />
            <label className="ml-3 text-xl text-gray-500">
              I've read & accept the
              <a href="#" className="text-black">
                &nbsp; Terms and condition
              </a>
            </label>
          </div>
          <ButtonComponent name="Final step" />
        </div>
      </form>
    </div>
  )
}

export default InputCointainer
