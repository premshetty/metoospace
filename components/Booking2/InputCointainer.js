import React, { useState } from 'react'
import InputArea from './../Booking/InputArea'
import WhatyouNeed from './../Booking/WhatyouNeed'
import {
  UserIcon,
  MailIcon,
  GlobeAltIcon,
  PhoneIcon,
} from '@heroicons/react/outline'
function InputCointainer() {
  const [guest, setguest] = useState(false)
  const toggleGuest = () => {
    setguest(!guest)
  }
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
            placeholder="select Country/Region"
            icon={<GlobeAltIcon className="h-6 text-gray-600" />}
            required={false}
          />
        </div>

        <div className="mt-5 ml-3">
          <input type="checkbox" onChange={toggleGuest} className="h-4 w-4" />
          <label className="ml-3 text-xl text-gray-500">
            Please click here if you want to book for someone else?
          </label>
        </div>
        {guest == true ? (
          <div className="mt-5  h-auto w-full rounded-[17px] border-[1px] border-[#80808070] bg-blue-50 py-8 px-5 shadow-md">
            <InputArea
              width="w-full md:w-[50%]"
              type="text"
              placeholder="Enter Guests Full Name"
              icon={<UserIcon className="h-6 text-gray-600" />}
              required={true}
            />
            <InputArea
              width="w-full md:w-[50%]"
              type="tel"
              placeholder="select Country/Region"
              icon={<GlobeAltIcon className="h-6 text-gray-600" />}
              required={false}
            />
          </div>
        ) : null}

        <WhatyouNeed />
      </form>
    </div>
  )
}

export default InputCointainer
