import React from 'react'
import BlogCard from './BlogCard'

function BlogSection() {
  return (
    <div className="mt-[120px]  w-full  px-[70px]">
      <div className="">
        <h1 className="text-[24px] font-[500]">RECENT BLOGS</h1>
        <div className="mt-1 h-[6px] w-[10%] bg-[#7161EF]"></div>
      </div>
      <div className="mt-14 flex gap-6">
        <BlogCard
          image="./homepage/blog1.png"
          heading="10 Amazing View Hotels"
        />
        <BlogCard image="./homepage/blog2.png" heading="Spaces To Wishlist " />
      </div>
    </div>
  )
}

export default BlogSection
