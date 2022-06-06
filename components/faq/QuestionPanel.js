import React from 'react'
import Accordian from './Accordian'

function QuestionPanel() {
  return (
    <div>
      <h1 className="mb-[16px] text-[18px] font-bold">
        Most frequently question
      </h1>
      <div className="flex flex-col gap-5">
        <Accordian />
        <Accordian />
      </div>
      <h1 className="mb-[16px] mt-[30px] text-[18px] font-bold">Booking</h1>
      <div className="flex flex-col gap-5">
        <Accordian />
        <Accordian />
        <Accordian />
        <Accordian />
        <Accordian />
      </div>
      <h1 className="mb-[16px] mt-[30px] text-[18px] font-bold">
        Cancellation
      </h1>
      <div className="flex flex-col gap-5">
        <Accordian />
        <Accordian />
        <Accordian />
      </div>
      <h1 className="mb-[16px] mt-[30px] text-[18px] font-bold">
        Change Booking
      </h1>
      <div className="flex flex-col gap-5">
        <Accordian />
        <Accordian />
        <Accordian />
      </div>
    </div>
  )
}

export default QuestionPanel
