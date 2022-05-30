import React from 'react'

function RegisterMob() {
  return (
    <div className="m-auto flex h-[100vh] w-[90%] flex-col items-center justify-center gap-[50px]">
      <div className="flex flex-col">
        <h1 className=" text-center font-sans text-[40px] font-bold leading-[40px] text-black">
          Welcome
        </h1>
        <p className=" text-center font-sans text-[14px] font-light text-black">
          Register to continue
        </p>
      </div>
      <div className=" flex flex-col gap-[30px]">
        <div className="flex h-[48px] w-[327px] rounded-md border-[1px] border-[#80808070]  p-2">
          <img
            src="./icons/userinput.svg"
            className="m-auto h-[24px] w-[24px]"
          />
          <input
            className="ml-2  w-full flex-shrink items-center bg-transparent placeholder-gray-500 outline-none md:inline-flex"
            type="text"
            placeholder="Enter Your Full Name"
            required
          />
        </div>
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
            placeholder="Enter  Password"
            required
          />
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
            CONTINUE
          </button>
          <div className="py-4">
            <div className="w-full border-t border-gray-300"></div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-[10px]">
          <p className="font-sans text-[14px] font-light text-black">
            Create account with
          </p>
          <div className="flex items-center gap-[30px]">
            <img src="./login/fb.svg" className="h-[40px] w-[40px]" />
            <img src="./login/linkedin.svg" className="h-[40px] w-[40px]" />
            <img src="./login/google.svg" className="h-[40px] w-[40px]" />
          </div>
        </div>
        <div className="m-auto">
          <a href="/login" className="text-center">
            {' '}
            Already have a account ?{' '}
            <span className="text-[#185AAA]">SIGN IN</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default RegisterMob
