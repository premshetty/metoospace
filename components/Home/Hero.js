import React from 'react'

function Hero() {
  return (
    <div>
      <div
        className="m-auto flex h-[83vh] flex-col items-center justify-center gap-[30px]"
        style={{
          backgroundImage: "url('./herobg.png')",
          height: '100vh',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          textAlign: 'center',
          margin: 'auto',
        }}
      >
        <h1 className="font-['cursive'] text-[150px] text-white">
          Make Memories
        </h1>
        <p className="text-white">
          Discover the place where you have fun & enjoy a lot
        </p>
        <div className=" grid grid-cols-5 justify-items-center gap-[30px]">
          <div className="max-w-[200px] bg-white p-[35px]">
            <p> ARRIVAL DATE</p>
            <input className="m1-[10px]" type="date" />
          </div>
          <div className="max-w-[200px] bg-white p-[35px]">
            <p> DEPARTURE DATE</p>
            <input className="m1-[10px]" type="date" />
          </div>
          <div className="max-w-[200px] bg-white p-[35px]">
            <p> ADULTS</p>
            <input
              className="m1-[10px] w-[130px]"
              type="number"
              placeholder="1"
            />
          </div>
          <div className="max-w-[200px] bg-white p-[35px]">
            <p> CHILDREN</p>
            <input
              className="m1-[10px] w-[130px]"
              type="number"
              placeholder="1"
            />
          </div>
          <div className="max-w-[200px] bg-white p-[35px]">
            <p> CHILDREN</p>
            <input className="m1-[10px]" type="number" />
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: "url('./zigjag.png')",
          content: '',

          position: 'absolute',
          bottom: '-20%',
          transform: 'rotate(180deg)',
          left: ' 0',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: '50px',
          width: '100%',
        }}
      >
        {' '}
      </div>
    </div>
  )
}

export default Hero
