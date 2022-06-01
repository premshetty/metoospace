import React from 'react'

function Filter() {
  const CheckBox = (props) => {
    return (
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="checkbox1"
          className="ml-2 h-[24px] w-[24px]"
        />
        <label
          htmlFor="checkbox1"
          className="ml-2  font-sans text-[16px] font-[400]  text-black"
        >
          {props.labelname}
        </label>
      </div>
    )
  }
  return (
    <div className="flex w-[302px] flex-col gap-[20px]">
      <div className="shadow-md ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100355.76559087214!2d-77.36345132258934!3d38.889520539985604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b64ba9535c7be9%3A0xb7e15199f5547c75!2sCheffy!5e0!3m2!1sen!2sin!4v1654103989622!5m2!1sen!2sin"
          width="302"
          height="118"
          allowfullscreen=""
          loading="lazy"
          className="h-[118px] w-[302px] rounded-md  "
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <button className="h-[56px] w-[302px] rounded-md  bg-transparent">
          View in map
        </button>
      </div>
      <div className=" h-[48px] w-[302px] items-center justify-center rounded-md border-[1px] border-[#CECFD1] p-2  md:flex">
        <img src="./icons/search.svg" className="m-auto h-[24px] w-[24px]" />
        <input
          className="ml-2 h-[18px] w-full flex-shrink items-center bg-transparent text-black placeholder-gray-500 outline-none md:inline-flex"
          type="text"
          placeholder="Search by property name"
        />
      </div>
      <div>//range slider</div>
      <div className="flex justify-between">
        <div className=" h-[48px] w-[40%] items-center  rounded-md border-[1px] border-[#CECFD1] p-2  md:flex">
          <img src="./icons/search.svg" className="m-auto h-[12px] w-[12px]" />
          <input
            className="ml-2 h-[18px]  flex-shrink items-center bg-transparent text-black placeholder-gray-500 outline-none md:inline-flex"
            type="text"
            placeholder="0"
          />
        </div>
        <div className=" h-[48px] w-[40%] items-center  rounded-md border-[1px] border-[#CECFD1] p-2  md:flex">
          <img src="./icons/search.svg" className="m-auto h-[12px] w-[12px]" />
          <input
            className="ml-2 h-[18px]  flex-shrink items-center bg-transparent text-black placeholder-gray-500 outline-none md:inline-flex"
            type="text"
            placeholder="50000"
          />
        </div>
      </div>

      <select
        placeholder="price per night"
        className="
        h-[48px]   w-full flex-shrink items-center  rounded-md
          border-[1px] border-[#CECFD1]  bg-transparent p-2  pl-3 text-black placeholder-gray-500 outline-none md:flex "
      >
        <option value="">Price per night</option>
        <option value="">$</option>
        <option value="">$$</option>
        <option value="">$$$</option>
      </select>
      <div className="flex flex-col gap-5">
        <h2 className="text-xl font-bold text-black"> Deals</h2>
        <CheckBox labelname="Free cancellation" />
        <CheckBox labelname="Reserve now, pay at stay" />
        <CheckBox labelname="Properties with special offers" />
        <CheckBox labelname="Hourly accepted" />
      </div>
      <div className="py-4">
        <div className="w-full border-t border-gray-300"></div>
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-xl font-bold text-black"> Amenities</h2>
        <CheckBox labelname="Internet" />
        <CheckBox labelname="Play station 4" />
        <CheckBox labelname="Pet friendly" />
        <CheckBox labelname="Smoking" />
        <CheckBox labelname="none kids" />
        <p className="text-blue-700"> Show 21 more</p>
      </div>
      <div className="py-4">
        <div className="w-full border-t border-gray-300"></div>
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-xl font-bold text-black"> Distance to center</h2>
        <CheckBox labelname="Inside city center" />
        <CheckBox labelname="<2 km to center" />
        <CheckBox labelname="2-5 km to center" />
        <CheckBox labelname="5-10 km to center" />
        <CheckBox labelname=">10 km to center" />
        <p className="text-blue-700"> Show 21 more</p>
      </div>
      <div className="py-4">
        <div className="w-full border-t border-gray-300"></div>
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-xl font-bold text-black">
          Near popular attractions
        </h2>
        <CheckBox labelname="Dubai marina" />
        <CheckBox labelname="The dubai fountain" />
        <CheckBox labelname="Burj Khalifa" />
        <CheckBox labelname="Dubai Creek" />
        <CheckBox labelname="Wild wadi waterpark" />
        <p className="text-blue-700"> Show 21 more</p>
      </div>
      <div className="py-4">
        <div className="w-full border-t border-gray-300"></div>
      </div>
    </div>
  )
}

export default Filter
