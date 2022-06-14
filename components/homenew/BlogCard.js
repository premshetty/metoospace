import React from 'react'

function BlogCard({ image, heading }) {
  return (
    <div
      className="flex h-[264px] w-[619px] "
      style={{
        boxShadow: ' 0px 4px 16px rgba(0, 0, 0, 0.25)',
        borderRadius: ' 8px',
      }}
    >
      <img src={image} className="w-1/1 h-full bg-cover" alt="blog image" />
      <div className="flex  w-1/2 flex-col gap-6 py-6 px-[19px]">
        <div>
          <h2 className="text-[18px] font-[500] text-[#252525]">{heading}</h2>
          <p className="text-[14px] text-[#B7B4B4] ">By Andrew</p>
        </div>
        <p className="text-[14px] text-[#7B7979] ">
          lorem ipsum dolor sit amet lorem ipsum dolor sit amet loreum ipsum
          dolor sit amet lorem ipsum dolor sit amet.
          <br /> lorem ipsum dolor sit amet lorem ipsum dolor sit amet loreum
          ipsum dolor ........
        </p>

        <p className="text-[12px] font-[500] text-[#7161EF]">Read More</p>
      </div>
    </div>
  )
}

export default BlogCard
