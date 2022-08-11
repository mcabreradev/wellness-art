import { useState } from "react";
import tw from "tailwind-styled-components";

interface NavbarProps {
  sticky?: boolean;
}

const NavbarWrapper = tw.nav`
  bg-transparent
  px-2 
  sm:px-4 
  py-2.5 
  fixed 
  w-full 
  z-20 
  top-0 
  left-0 

  ${(p: NavbarProps) =>
    p.sticky &&
    `
    bg-red-500
    border-b 
    border-gray-200
    transition 
    ease-in-out 
    delay-300
  `}
`;

const NavbarItem = tw.a`
  text-base 
  leading-7 
  font-poppins 
  text-gray-800
  hover:underline
`;

const Button = tw.button`
  inline-flex 
  items-start 
  justify-start 
  px-5 
  py-2.5 
  bg-primary 
  rounded-full 
  font-thin
  font-poppins 
  text-lg 
  text-white 
  hover:bg-primary-100 
  focus:ring-4 
  focus:outline-none 
  focus:ring-blue-100
`;

const MobileButton = tw.button`
  md:hidden 
  inline-flex 
  items-center 
  p-2 text-sm 
  text-gray-500 
  rounded-lg
  hover:bg-gray-100 
  focus:outline-none 
  focus:ring-2 
  focus:ring-gray-200
`;

const Navbar = () => {
  const [sticky, setsticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setsticky(true);
    } else {
      setsticky(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <NavbarWrapper sticky={sticky}>
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="/" className="flex items-center">
          <img
            src="./wellness.svg"
            className="mr-4 h-8 sm:h-9"
            alt="Wellness Logo"
          />
        </a>

        <div
          className="hidden justify-between items-center w-full md:flex md:w-auto"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavbarItem href="#">Services</NavbarItem>
            </li>
            <li>
              <NavbarItem href="#">Therapists</NavbarItem>
            </li>
            <li>
              <NavbarItem href="#">Location</NavbarItem>
            </li>
            <li>
              <NavbarItem href="#">Contact</NavbarItem>
            </li>
          </ul>
        </div>

        <div className="flex">
          <Button type="button">Book a masagge</Button>

          <MobileButton
            data-collapse-toggle="navbar-sticky"
            type="button"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </MobileButton>
        </div>

      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
