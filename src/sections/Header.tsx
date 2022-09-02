import tw from "tailwind-styled-components";

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

const Wrapper = tw.div``;

function Header() {
  return (
    <Wrapper className={'header'} name={'header'}>
      <Navbar />
      <Hero />
    </Wrapper>
  )
}

export default Header