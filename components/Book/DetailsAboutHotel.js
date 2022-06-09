import React, { useState } from 'react'
import Links from './Links'
import Overview from './Overview'
import Rooms from './Rooms/Rooms'
import Facilities from './Facilities'
function DetailsAboutHotel() {
  const [now, setnow] = useState(<Overview />)

  const overviewcomp = () => {
    setnow(<Overview />)
  }
  const roomscomp = () => {
    setnow(<Rooms />)
  }
  const facilitiescomp = () => {
    setnow(<Facilities />)
  }

  return (
    <div className="flex">
      <div className="flex flex-col  gap-6">
        <Links
          Overview={overviewcomp}
          rooms={roomscomp}
          facilities={facilitiescomp}
        />
        <div className="flex h-[82px] items-center justify-center gap-4 rounded-[8px] bg-[#FFF4A3] py-[23px] pl-[27px] pr-[30px]">
          <img src="./icons/warning.svg" className="h-6 w-6" alt="warning" />
          <p>
            As part of the Coronavirus (COVID-19) restrictions, the property may
            request additional documentation from guests to validate
            identification, travel itinerary, and other relevant information.
            Please contact the property for more details.
          </p>
        </div>
        {now}
      </div>
    </div>
  )
}

export default DetailsAboutHotel
