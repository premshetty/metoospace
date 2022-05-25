import React, { useEffect, useState } from 'react'

function Navbar() {
  const [Navbar, setNavbar] = useState(false)
  useEffect(() => {
    changeBackground()
    window.addEventListener('scroll', changeBackground)
  })
  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  return (
    <nav
      className={
        Navbar == false
          ? ' h-[64px] bg-[#CC8C18] py-5  '
          : ' sticky top-[-1px] z-50 h-[64px] bg-[#000] py-5  '
      }
    >
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
          <svg
            className="hidden h-6 w-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className=" hidden w-full md:block md:w-auto" id="mobile-menu">
          <ul className="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
            <li>
              <a
                href="#"
                className="text-white hover:text-black"
                aria-current="page"
              >
                HOME
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-black">
                ABOUT
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-black">
                ROOM
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-black">
                SERVICES
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-black">
                SHOP
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-black">
                TESTIMONIALS
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-black">
                GALLARY
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-black">
                BLOG
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-black">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
        <div className="flex">
          <img
            src="./social/phone.svg"
            className=" absolute -ml-[7%] -mt-[16px] h-[72px] w-[72px] rounded-full border-4 border-gray-300 "
            alt="phone"
          />
          <p className="text-white hover:text-black">+000 1234 5678</p>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
