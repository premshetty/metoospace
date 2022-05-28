import React from 'react'

function LoginScreen() {
  return (
    <div className="m-auto flex h-[100vh] w-[90%] flex-col items-center justify-center gap-[50px]">
      <div className="flex flex-col">
        <h1 className=" text-center font-sans text-[40px] font-bold leading-[40px] text-black">
          Welcome Back
        </h1>
        <p className=" text-center font-sans text-[14px] font-light text-black">
          Sign in to continue
        </p>
      </div>
      <div className=" flex flex-col gap-[30px]">
        <div className="flex h-[48px] w-[327px] rounded-md border-[1px] border-[#80808070]  p-2">
          <img src="./icons/mail.svg" className="m-auto h-[24px] w-[24px]" />
          <input
            className="ml-2  w-full flex-shrink items-center bg-transparent placeholder-gray-500 outline-none md:inline-flex"
            type="email"
            placeholder="Enter Email Address"
            required
          />
        </div>
        <div className="flex h-[48px] w-[327px] rounded-md border-[1px] border-[#80808070]  p-2">
          <img src="./icons/lock.svg" className="m-auto h-[24px] w-[24px]" />

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
        <p className="w-[327px] font-sans text-[14px] font-medium text-black ">
          By signing in, you agree with our{' '}
          <span className="text-[#185AAA]">Terms & Conditions</span>
          &nbsp; and <span className="text-[#185AAA]">Privacy Statement </span>
        </p>
        <div className="flex flex-col items-center gap-[10px]">
          <button
            className="h-[48px] w-[327px] rounded-[4px]"
            style={{
              background:
                'linear-gradient(282.25deg, #F4AB3E 0%, #F7C170 100%)',
            }}
          >
            SIGN IN NOW
          </button>
          <div className="py-4">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <a
            href="#"
            className="font-sans text-[14px] font-medium text-[#185AAA]"
          >
            Forgot password?
          </a>
        </div>
        <div className="flex flex-col items-center gap-[10px]">
          <p className="font-sans text-[14px] font-light text-black">
            or continue with
          </p>
          <div className="flex items-center gap-[30px]">
            <img src="./login/fb.svg" className="h-[40px] w-[40px]" />
            <img src="./login/linkedin.svg" className="h-[40px] w-[40px]" />
            <img src="./login/google.svg" className="h-[40px] w-[40px]" />
          </div>
        </div>
        <div>
          <p className="text-center">
            {' '}
            do you have a account ?{' '}
            <span className="text-[#185AAA]">SIGN UP</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginScreen
