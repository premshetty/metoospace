import React from 'react'

function WhatyouNeed() {
  return (
    <div className="mt-5  h-auto w-full rounded-[17px] border-[1px] border-[#80808070] bg-blue-50 py-8 px-5 shadow-md">
      <h2 className="-mt-3 text-xl font-bold text-black">
        Let us Know What you need ?
      </h2>
      <p className="mt-3 text-sm  text-gray-600">
        {' '}
        Do you have a Smoking preference ?
      </p>
      <div className="mt-3">
        <input type="radio" name="whatyouneed1" value="1" className="h-4 w-4" />
        <label htmlFor="1" className="ml-2 text-xl text-gray-600">
          Non Smoking
        </label>
        <input
          type="radio"
          name="whatyouneed1"
          value="2"
          className="ml-20 h-4 w-4"
        />
        <label htmlFor="2" className="ml-2 text-xl text-gray-600">
          Smoking
        </label>
      </div>
      <p className="mt-3 text-sm  text-gray-600">
        {' '}
        What Bed configuration do you prefer ?{' '}
      </p>

      <div className="mt-3">
        <input type="radio" name="whatyouneed2" value="1" className="h-4 w-4" />
        <label htmlFor="1" className="ml-2 text-xl text-gray-600">
          Large Bed
        </label>
        <input
          type="radio"
          name="whatyouneed2"
          value="2"
          className="ml-28 h-4 w-4"
        />
        <label htmlFor="2" className="ml-2 text-xl text-gray-600">
          Twin Bed
        </label>
      </div>
      <p className="mt-3 text-sm  text-gray-600">
        {' '}
        Any personal requests ? let us know in english
      </p>
      <textarea className="mt-3 ml-2 hidden h-28 w-full flex-shrink items-center rounded-md border-[1px] border-[#80808070] p-3 text-sm font-bold text-gray-600 placeholder-gray-500  shadow-md outline-none md:inline-flex">
        Your message
      </textarea>
    </div>
  )
}

export default WhatyouNeed
