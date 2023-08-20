import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import tw from 'tailwind-styled-components';

import Button from '@/components/Button';

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

  ${({ $sticky }) =>
    $sticky &&
    `
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
  font-normal
  leading-7
  font-poppins
  text-gray-800
  cursor-pointer
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
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  const handleScroll = () => {
    window.scrollY > 50 ? setSticky(true) : setSticky(false);
  };

  const handleClick = () => {
    setToggle((prev) => !prev);
    setHidden(false);
  };

  return (
    <Wrapper $sticky={sticky}>
      <Container>
        <div
          className='hidden w-full items-center justify-between lg:flex lg:w-auto'
          id='navbar-sticky'
        >
          <Link to='header' spy={true} smooth={true} offset={0} duration={500}>
            <div className='flex items-center'>
              <img
                src='/images/wellness.svg'
                className='mr-4 h-8 sm:h-9'
                alt='Wellness Logo'
              />
            </div>
          </Link>

          <ul className='mt-4 flex flex-col rounded-lg p-4 lg:mt-0 lg:flex-row lg:space-x-8 lg:pl-28 lg:text-sm lg:font-medium '>
            <li>
              <Link
                to='services'
                spy={true}
                smooth={true}
                offset={-60}
                duration={750}
              >
                <NavbarItem className='navbar-item'>Services</NavbarItem>
              </Link>
            </li>
            <li>
              <Link
                to='about-us'
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                <NavbarItem className='navbar-item'>Therapists</NavbarItem>
              </Link>
            </li>
            <li>
              <Link
                to='location'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <NavbarItem className='navbar-item'>Location</NavbarItem>
              </Link>
            </li>
            <li>
              <Link
                to='footer'
                spy={true}
                smooth={true}
                offset={50}
                duration={1000}
              >
                <NavbarItem className='navbar-item'>Contact</NavbarItem>
              </Link>
            </li>
          </ul>
        </div>

        <div className='flex'>
          <Button
            type='button'
            className='hidden lg:block'
            href={process.env.NEXT_PUBLIC_BOOK_A_MASAGGE_LINK}
          >
            Book a masagge
          </Button>
          <BurgerButton
            data-collapse-toggle='navbar-sticky'
            type='button'
            onClick={handleClick}
          >
            <span className='sr-only'>Open main menu</span>
            <img src='/images/burger.svg' alt='' />
          </BurgerButton>
        </div>

        <div
          className={`absolute right-0 top-0 flex h-[100vh] w-full flex-col bg-white p-10 ${
            hidden && 'hidden'
          } ${toggle ? 'slide-out-left' : 'slide-in-left'}`}
        >
          <img
            className='w-[60px] rotate-45 self-end'
            src='/images/plus.svg'
            onClick={handleClick}
            alt=''
          />

          <Link
            to='header'
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={handleClick}
          >
            <div className=''>
              <img
                src='/images/wellness.svg'
                className='h-12'
                alt='Wellness Logo'
              />
            </div>
          </Link>

          <ul className='mt-4 flex flex-col py-4'>
            <li className='border-b border-gray-300 pb-4 pt-8'>
              <Link
                to='services'
                spy={true}
                smooth={true}
                offset={20}
                duration={750}
                onClick={handleClick}
              >
                <NavbarItem className='text-[24px]'>Services</NavbarItem>
              </Link>
            </li>
            <li className='border-b border-gray-300 pb-4 pt-8'>
              <Link
                to='about-us'
                spy={true}
                smooth={true}
                offset={0}
                duration={750}
                onClick={handleClick}
              >
                <NavbarItem className='text-[24px]'>Therapists</NavbarItem>
              </Link>
            </li>
            <li className='border-b border-gray-300 pb-4 pt-8'>
              <Link
                to='location'
                spy={true}
                smooth={true}
                offset={0}
                duration={750}
                onClick={handleClick}
              >
                <NavbarItem className='text-[24px]'>Location</NavbarItem>
              </Link>
            </li>
            <li className='border-b border-gray-300 pb-4 pt-8'>
              <Link
                to='footer'
                spy={true}
                smooth={true}
                offset={0}
                duration={750}
                onClick={handleClick}
              >
                <NavbarItem className='text-[24px]'>Contact</NavbarItem>
              </Link>
            </li>
            <li className='pt-12'>
              <Button
                className='inline-flex items-start justify-start rounded-full bg-indigo-600 px-12 py-2.5'
                size='lg'
                href={process.env.NEXT_PUBLIC_BOOK_A_MASAGGE_LINK}
              >
                Book a masagge
              </Button>
            </li>
          </ul>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Navbar;
