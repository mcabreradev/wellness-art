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
    lg:bg-white
    lg:border-gray-200
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

const NavbarItem = tw.span`
  text-base 
  leading-7 
  font-poppins 
  text-gray-800
`;

const BurgerButton = tw.a`
  lg:hidden 
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
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    window.scrollY > 50 ? setSticky(true) : setSticky(false);
  };

  const handleClick = () => {
    setToggle((prev) => !prev)
  }

  return (
    <Wrapper $sticky={sticky}>
      <Container>
        <div
          className="hidden justify-between items-center w-full lg:flex lg:w-auto"
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

          <ul className="flex flex-col lg:pl-28 p-4 mt-4 rounded-lg lg:flex-row lg:space-x-8 lg:mt-0 lg:text-sm lg:font-medium ">
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
            onClick={handleClick}
          >
            <span className="sr-only">Open main menu</span>
            <img src="./burger.svg" />
          </BurgerButton>
        </div>

        <div className={`bg-white flex flex-col w-full h-[100vh] p-10 absolute top-0 right-0 ${toggle&&'hidden'}`}>
          <img 
            className="rotate-45 w-[60px] self-end" 
            src="./plus.svg" 
            onClick={handleClick}/>

          <Link to="header" spy={true} smooth={true} offset={0} duration={500} onClick={handleClick}>
            <a href="/" className="">
              <img
                src="./wellness.svg"
                className="h-12"
                alt="Wellness Logo"
              />
            </a>
          </Link>

          <ul className="flex flex-col py-4 mt-4">
            <li className="border-b border-gray-300 pt-8 pb-4">
              <Link to="services" spy={true} smooth={true} offset={20} duration={750} onClick={handleClick}>
                <NavbarItem 
                  className="text-[24px]" 
                  href="#">Services
                  </NavbarItem>
              </Link>
            </li>
            <li className="border-b border-gray-300 pt-8 pb-4">
              <Link to="about-us" spy={true} smooth={true} offset={0} duration={750} onClick={handleClick}>
                <NavbarItem className="text-[24px]" href="#">Therapists</NavbarItem>
              </Link>
            </li>
            <li className="border-b border-gray-300 pt-8 pb-4">
              <Link to="location" spy={true} smooth={true} offset={0} duration={750} onClick={handleClick}>
                <NavbarItem className="text-[24px]" href="#">Location</NavbarItem>
              </Link>
            </li>
            <li className="border-b border-gray-300 pt-8 pb-4">
              <Link to="footer" spy={true} smooth={true} offset={0} duration={750} onClick={handleClick}>
                <NavbarItem className="text-[24px]" href="#">Contact</NavbarItem>
              </Link>
            </li>
            <li className="pt-12">
              <Button 
                className="inline-flex items-start justify-start px-12 py-2.5 bg-indigo-600 rounded-full" 
                size="lg"
                href="https://wellnessartinc.clinicsense.com/"
                >Book a masagge</Button>
            </li>
          </ul>

        </div>
      </Container>
    </Wrapper>
  );
};

export default Navbar;
