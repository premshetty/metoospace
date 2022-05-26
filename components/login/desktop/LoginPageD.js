import React from 'react'

function LoginPageD() {
  return (
    <div className="flex">
      <div
        className="h-[100vh] max-h-[100vh] w-[40%] pl-[50px]"
        style={{ backgroundImage: 'url(./login/mobilebg.png)' }}
      >
        <h2 className=" pt-[30px] font-sans text-[24px] font-bold leading-[40px] text-white">
          Metoospace
        </h2>
        <div className="flex flex-col">
          <h2 className=" mt-[30%] font-sans text-[40px] font-bold leading-[40px] text-white">
            LOREM IPSUM
          </h2>
          <p className=" mt-7 font-sans text-[16px] text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <div className="h-[100vh] w-[60%] pr-[50px]">
        <div className="float-right  mt-7 flex items-center justify-center gap-3">
          <p className=" font-sans text-[16px] text-black">
            Don’t have an account?
          </p>
          <button
            className="h-[48px] w-[108px] rounded-[4px]"
            style={{
              border: '1px solid #CECFD1',
            }}
          >
            SIGN UP
          </button>
        </div>
        <div className="m-auto mt-[120px] flex w-[80%] flex-col items-start justify-center">
          <div className="flex flex-col">
            <h1 className=" font-sans text-[40px] font-bold leading-[40px] text-black">
              Welcome Back
            </h1>
            <p className="font-sans text-[14px] font-light text-black">
              Sign in to continue
            </p>
          </div>
          <div className="mt-[40px] flex flex-col gap-[30px]">
            <div className="h-[48px] w-[454px]  rounded-md border-[1px] border-[#80808070]  p-2">
              <input
                className="ml-2  w-full flex-shrink items-center bg-transparent placeholder-gray-500 outline-none md:inline-flex"
                type="email"
                placeholder="Enter Email Address"
                required
              />
            </div>
            <div className="h-[48px] w-[454px] rounded-md border-[1px] border-[#80808070]  p-2">
              <input
                className="ml-2  w-full flex-shrink items-center bg-transparent placeholder-gray-500 outline-none md:inline-flex"
                type="password"
                placeholder="Enter Email Password"
                required
              />
            </div>
            <div>
              <input type="checkbox" className="ml-2" />
              <label className="ml-2 font-sans text-[16px] font-light text-black">
                Keep me signed in
              </label>
            </div>
            <p className="w-[454px] font-sans text-[14px] font-medium text-black ">
              By signing in, you agree with our{' '}
              <span className="text-[#185AAA]">Terms & Conditions</span>
              &nbsp; and{' '}
              <span className="text-[#185AAA]">Privacy Statement </span>
            </p>
            <div className="flex items-center gap-[50px]">
              <button
                className="h-[48px] w-[146px] rounded-[4px]"
                style={{
                  background:
                    'linear-gradient(282.25deg, #F4AB3E 0%, #F7C170 100%)',
                }}
              >
                SIGN IN NOW
              </button>
              <a
                href="#"
                className="font-sans text-[14px] font-medium text-[#185AAA]"
              >
                Forgot password?
              </a>
            </div>
            <div className="flex items-center gap-[30px]">
              <p className="font-sans text-[14px] font-light text-black">
                or continue with
              </p>
              <div className="flex items-center gap-[10px]">
                <img src="./login/fb.svg" className="h-[40px] w-[40px]" />
                <img src="./login/linkedin.svg" className="h-[40px] w-[40px]" />
                <img src="./login/google.svg" className="h-[40px] w-[40px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPageD
