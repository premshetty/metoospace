import React from 'react'

function Explore() {
  return (
    <div className="m-auto">
      <h1 className="pt-[20px] text-center font-semibold tracking-[5px] text-[#CC8C18]">
        EXPLORE
      </h1>
      <h2 className="mt-[10px] mb-[20px] text-center font-serif text-[45px] font-bold text-[#24416B]">
        We are cool to give you pleasure
      </h2>
      <div className="mt-[80px] grid grid-cols-1 md:grid-cols-2">
        <div className=" p-[20px]">
          <h3 className="mb-[20px] font-serif text-[35px] font-bold text-[#24416B]">
            As much as comfort want to get from us everything
          </h3>
          <p className="mb-[20px] text-[15px] leading-[30px] text-[#a4a4a4]">
            Lorem ipsum dolor sit amet, consectetur adipisicing <br />
            elit, sed do eiusmod tempor incididunt ut labore <br />
            et dolore magna aliqua. Ut enim ad minim veniam,
            <br />
            quis nostrud exercitation ullamco laboris nisi ut aliquip
            <br />
            ex ea commodo consequat. Duis aute irure dolor in <br />
            reprehenderit in voluptate velit esse cillum dolore eu fugiat .
            <br />
            <br />
            <span className="mt-10 text-black">Check Availablity</span>
          </p>
        </div>
        <div className=" p-[20px]">
          <img src="./explore.png" alt="explore" />
        </div>
      </div>
      <div
        style={{
          backgroundImage: "url('./zigjag.png')",
          content: '',
          position: 'absolute',
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

export default Explore
