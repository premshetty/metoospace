import React from 'react'
import Links from './Links'
import Overview from './Overview'

function DetailsAboutHotel() {
  return (
    <div className="flex">
      <div className="flex flex-col  gap-6">
        <Links />
        <div className="flex h-[82px] items-center justify-center gap-4 rounded-[8px] bg-[#FFF4A3] py-[23px] pl-[27px] pr-[30px]">
          <img src="./icons/warning.svg" className="h-6 w-6" alt="warning" />
          <p>
            As part of the Coronavirus (COVID-19) restrictions, the property may
            request additional documentation from guests to validate
            identification, travel itinerary, and other relevant information.
            Please contact the property for more details.
          </p>
        </div>
        <Overview />
      </div>
    </div>
  )
}

export default DetailsAboutHotel
