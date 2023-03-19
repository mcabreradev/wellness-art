import tw from "tailwind-styled-components";

import { DivProps } from '../Interfaces';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

const Wrapper = tw.div<DivProps>``;

function Header() {
  return (
    <Wrapper className={'header'} name="header">
      <Navbar />
      <Hero />
    </Wrapper>
  )
}

export default Header