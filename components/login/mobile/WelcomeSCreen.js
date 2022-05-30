import React from 'react'

function WelcomeSCreen(props) {
  return (
    <div
      style={{
        backgroundImage: "url('./login/mobilebg.png')",
        height: '100vh',
        width: '100%',
        gap: '80px',

        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className="flex  flex-col items-center justify-center"
    >
      <div>
        <p className="text-center font-sans text-[16px] font-semibold text-white">
          WELCOME TO
        </p>
        <h2 className="text-center font-sans text-[40px] font-bold leading-[40px] text-white">
          Metoospace
        </h2>
      </div>
      <div className="flex flex-col">
        <button
          className="h-[48px] w-[146px] rounded-[4px]"
          style={{
            background: 'linear-gradient(282.25deg, #F4AB3E 0%, #F7C170 100%)',
          }}
        >
          <a href="/register"> SIGN UP NOW</a>
        </button>
        <button
          onClick={props.gotoLoginScreen}
          className="mt-5 h-[48px] w-[146px] rounded-[4px] text-white"
          style={{
            border: '1px solid #FFFFFF',
          }}
        >
          SIGN IN NOW
        </button>
      </div>
      <div className="flex flex-col items-center justify-center gap-3">
        <p className="w-[146px] text-center font-sans text-[16px] font-semibold text-white">
          Or quick login with Touch ID
        </p>
        <img
          className="h-[71px] w-[80px]"
          src="./login/finger.svg"
          alt="finger print"
        />
      </div>
    </div>
  )
}

export default WelcomeSCreen
