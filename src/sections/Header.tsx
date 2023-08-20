import tw from 'tailwind-styled-components';

import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';

import type { DivProps } from '@/types';

const Wrapper = tw.div<DivProps>``;

function Header() {
  return (
    <Wrapper className='header' name='header'>
      <Navbar />
      <Hero />
    </Wrapper>
  );
}

export default Header;
