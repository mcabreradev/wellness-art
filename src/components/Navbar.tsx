import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import { Link } from 'react-scroll';

import Button from "../components/Button";

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
    bg-transparent
    md:bg-white
    md:border-gray-200
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

const BurgerButton = tw.a`
  md:hidden 
  inline-flex 
  items-center 
  p-2 
  text-sm 
  text-gray-500 
  rounded-lg
  hover:bg-transparent
  focus:outline-none 
  focus:ring-2 
  focus:ring-gray-200
  ml-2
`;

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    window.scrollY > 50 ? setSticky(true) : setSticky(false);
  };

  return (
    <Wrapper $sticky={sticky}>
      <Container>
        <div
          className="hidden justify-between items-center w-full md:flex md:w-auto"
          id="navbar-sticky"
        >
          <Link to="header" spy={true} smooth={true} offset={0} duration={500}>
            <a href="/" className="flex items-center">
              <img
                src="./wellness.svg"
                className="mr-4 h-8 sm:h-9"
                alt="Wellness Logo"
              />
            </a>
          </Link>

          <ul className="flex flex-col lg:pl-28 p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium ">
            <li>
              <Link to="services" spy={true} smooth={true} offset={-60} duration={750}>
                <NavbarItem className="navbar-item" href="#">Services</NavbarItem>
              </Link>
            </li>
            <li>
              <Link to="about-us" spy={true} smooth={true} offset={-50} duration={500}>
                <NavbarItem className="navbar-item" href="#">Therapists</NavbarItem>
              </Link>
            </li>
            <li>
              <Link to="location" spy={true} smooth={true} offset={-70} duration={500}>
                <NavbarItem className="navbar-item" href="#">Location</NavbarItem>
              </Link>
            </li>
            <li>
              <Link to="footer" spy={true} smooth={true} offset={50} duration={1000}>
                <NavbarItem className="navbar-item" href="#">Contact</NavbarItem>
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex">
          <Button type="button" className="hidden lg:block" href="https://wellnessartinc.clinicsense.com/">Book a masagge</Button>
          <BurgerButton
            data-collapse-toggle="navbar-sticky"
            type="button"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <img src="./burger.svg" />
          </BurgerButton>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Navbar;
