import Image from 'next/image'
import React from 'react'
function BookingForm() {
  return (
    <div>
      <form>
        <h2 className="text-xl font-bold text-black">
          {' '}
          Let us Know Who You are?
        </h2>
        <div className="border-2 border-[#000000ad]">
          <Image src="/icons/user.svg" alt="user" width="50" height="50" />
          <input type="text" placeholder="Name" />
        </div>
      </form>
    </div>
  )
}

export default BookingForm
