import { useEffect, useState } from "react";
import Button from "../components/Button";

import tw from "tailwind-styled-components";

const Wrapper = tw.nav<{ $sticky?: boolean }>`
  bg-transparent
  px-2 
  sm:px-4 
  py-2.5 
  fixed 
  w-full 
  z-20 
  top-0 
  left-0 

  ${({ $sticky }:any) =>
    $sticky &&`
    bg-white
    border-b 
    border-gray-200
    transition 
    ease-in-out 
    delay-100
  `}
`;

const Container = tw.div`
  flex 
  flex-wrap 
  justify-between 
  items-center

  container 
  max-w-8xl 
  mx-auto
`;

const NavbarItem = tw.a`
  text-base 
  leading-7 
  font-poppins 
  text-gray-800
`;

const BurgerButton = tw.button`
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
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    window.scrollY > 100 ? setSticky(true) : setSticky(false);
  };

  return (
    <Wrapper $sticky={sticky}>
      <Container>

        <div
          className="hidden justify-between items-center w-full md:flex md:w-auto"
          id="navbar-sticky"
        >
          <a href="/" className="flex items-center">
            <img
              src="./wellness.svg"
              className="mr-4 h-8 sm:h-9"
              alt="Wellness Logo"
            />
          </a>

          <ul className="flex flex-col lg:pl-28 p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium ">
            <li>
              <NavbarItem className="navbar-item" href="#">Services</NavbarItem>
            </li>
            <li>
              <NavbarItem className="navbar-item" href="#">Therapists</NavbarItem>
            </li>
            <li>
              <NavbarItem className="navbar-item" href="#">Location</NavbarItem>
            </li>
            <li>
              <NavbarItem className="navbar-item" href="#">Contact</NavbarItem>
            </li>
          </ul>
        </div>

        <div className="flex">
          <Button type="button" className="sm:hidden lg:block">Book a masagge</Button>
          <BurgerButton
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
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </BurgerButton>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Navbar;
