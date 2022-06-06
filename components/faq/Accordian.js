import React, { useState } from 'react'

function Accordian() {
  const [visible, setvisible] = useState(false)
  const toogletext = () => {
    setvisible(!visible)
  }
  return (
    <div>
      <div className=" w-[628px] cursor-pointer rounded-[8px] border-[1px] border-[#CECFD1] px-[24px] py-[27px]">
        <div onClick={toogletext} className="flex items-center justify-between">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <img src="./icons/down.svg" className=" ml-5 h-[5px] w-[9px]" />
        </div>
        {visible ? (
          <p className="mt-[25px] text-[14px] text-[#292D32]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas
            purus viverra accumsan in nisl nisi Arcu cursus vitae congue mauris
            rhoncus aenean vel elit scelerisque In egestas erat imperdiet sed
            euismod nisi porta lorem mollis Morbi tristique senectus et netus
            Mattis pellentesque id nibh tortor id aliquet lectus proin Sapien
            faucibus et molestie ac feugiat sed lectus vestibulum Ullamcorper
            velit sed ullamcorper morbi tincidunt ornare massa eget
          </p>
        ) : null}
      </div>
    </div>
  )
}

export default Accordian
