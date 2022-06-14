import React from 'react'

function EScard({ img, hotelname, price, category, length }) {
  return (
    <div
      className="mt-20 h-[376px] w-[300px]"
      style={{
        boxShadow: ' 2px 29px 42px 10px #EFECEC',
        borderRadius: '10px',
      }}
    >
      <div
        className="h-[280px]"
        style={{
          borderRadius: '10px',
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
      <div className="mt-5 flex flex-col gap-5">
        <div className="flex justify-between px-4">
          <p className="text-[14px] font-[500] text-[#252525]">{hotelname}</p>
          <p className="text-[#7161EF]">{price} </p>
        </div>
        <div className="flex justify-between px-4">
          <p className="text-[14px] font-[500] text-[#7B7979]">
            Category : {category}
          </p>
          <p className="text-[14px] font-[500] text-[#7B7979]"> {length}</p>
        </div>
      </div>
    </div>
  )
}

export default EScard
