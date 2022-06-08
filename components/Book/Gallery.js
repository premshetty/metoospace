import React from 'react'

function Gallery() {
  return (
    <div className="flex h-[80%]  flex-col gap-[24px]  md:flex-row">
      <img
        src="./hotels/gallery1.png"
        className="w-full cursor-pointer bg-cover transition duration-500 hover:scale-[1.02] md:w-1/2"
        alt="hotelimg"
      />
      <div className="flex w-1/2 gap-[24px]  md:w-1/4 md:flex-col">
        <img
          src="./hotels/gallery2.png"
          className="h-[240px] cursor-pointer bg-cover transition duration-500 hover:scale-105"
          alt="hotelimg"
        />
        <img
          src="./hotels/gallery3.png"
          className="h-[240px] cursor-pointer bg-cover transition duration-500 hover:scale-105"
          alt="hotelimg"
        />
      </div>
      <div className="flex w-1/2 gap-[24px]  md:w-1/4 md:flex-col">
        <img
          src="./hotels/gallery2.png"
          className="h-[240px] cursor-pointer bg-cover transition duration-500 hover:scale-105"
          alt="hotelimg"
        />
        <img
          src="./hotels/Overlay.png"
          className="h-[240px] cursor-pointer bg-cover transition duration-500 hover:scale-105 "
          alt="hotelimg"
        />
      </div>
    </div>
  )
}

export default Gallery
