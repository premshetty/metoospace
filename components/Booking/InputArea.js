import React from 'react'

function InputArea({ ...props }) {
  const style = `items-cente ml-2 mt-3 flex ${props.width} rounded-md border-[1px] border-[#80808070]  p-2`
  const checkrequired = props.required ? (
    <div className={style}>
      {props.icon}
      <input
        className="ml-2  w-full flex-shrink items-center bg-transparent placeholder-gray-500 outline-none md:inline-flex"
        type={`${props.type}`}
        placeholder={`${props.placeholder}`}
        required
      />
    </div>
  ) : (
    <div className={style}>
      {props.icon}
      <input
        className="ml-2  w-full flex-shrink items-center bg-transparent placeholder-gray-500 outline-none md:inline-flex"
        type={`${props.type}`}
        placeholder={`${props.placeholder}`}
      />
    </div>
  )
  return checkrequired
}

export default InputArea
