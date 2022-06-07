import React, { useState } from 'react'

function Accordian() {
  const [visible, setvisible] = useState(false)
  const [likeimg, setlikeimg] = useState(true)
  const [dislikeimg, setdislikeimg] = useState(true)
  const toogletext = () => {
    setvisible(!visible)
  }
  const tooglelike = () => {
    setlikeimg(!likeimg)
  }
  const toogledislike = () => {
    setdislikeimg(!dislikeimg)
  }
  return (
    <div>
      <div className=" w-[628px] cursor-pointer rounded-[8px] border-[1px] border-[#CECFD1] px-[24px] py-[27px]">
        <div onClick={toogletext} className="flex items-center justify-between">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <img src="./icons/down.svg" className=" ml-5 h-[5px] w-[9px]" />
        </div>
        {visible ? (
          <div>
            <p className="mt-[25px] text-[14px] text-[#292D32]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas
              purus viverra accumsan in nisl nisi Arcu cursus vitae congue
              mauris rhoncus aenean vel elit scelerisque In egestas erat
              imperdiet sed euismod nisi porta lorem mollis Morbi tristique
              senectus et netus Mattis pellentesque id nibh tortor id aliquet
              lectus proin Sapien faucibus et molestie ac feugiat sed lectus
              vestibulum Ullamcorper velit sed ullamcorper morbi tincidunt
              ornare massa eget
            </p>
            <div className="mt-10 flex gap-2">
              <img
                src={likeimg ? './icons/like.svg' : './icons/likegreen.svg'}
                onClick={tooglelike}
                className="h-7  w-7"
                alt="like"
              />
              <img
                src={
                  dislikeimg ? './icons/dislike.svg' : './icons/dislikered.svg'
                }
                onClick={toogledislike}
                className="h-7 w-7"
                alt="like"
              />
              <p className=" text-[14px] text-[#292D32]">
                Did this help solve your issue?
              </p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Accordian
