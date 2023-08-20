import tw from 'tailwind-styled-components';

import type { DivProps } from '@/types';

const Wrapper = tw.div<DivProps>`
  bg-secondary
  h-max
`;

const Container = tw.div`
  flex
  flex-col lg:flex-row
  justify-between
  py-24
  container
  max-w-6xl
  mx-auto
  px-8 lg:px-0

`;

const Text = tw.p`
  font-normal
  not-italic
  font-poppins
  text-base
  leading-7
  text-gray-300
`;

export default function Footer() {
  return (
    <Wrapper className='footer' name='footer'>
      <Container>
        <div className='height-[150px] self-center pb-12 lg:pb-0'>
          <img src='/images/wellness-footer.svg' />
        </div>
        <div className='w-[320px]'>
          <Text className='font-bold'>Address</Text>
          <Text className='pb-7 lg:pb-6'>
            12328 102 Ave. Evolve Strenght. Office 105 Edmonton, AB - T5N 0L9
          </Text>

          <Text className='font-bold'>Phone</Text>
          <Text>
            (587) 223-0966
            <br />
            (825) 365-1822
          </Text>
        </div>

        <div className='w-[320px]'>
          <Text className='font-bold'>Email</Text>
          <Text className='pb-7 lg:pb-6'>booking@wellnessartmassage.com</Text>

          <Text className='pb-7 font-bold lg:pb-6'>Find us on</Text>
          <div className='flex flex-row items-center justify-start'>
            <a href='#'>
              <img className='pr-6' src='/images/ig.svg' />
            </a>
            <a href='#'>
              <img className='pr-6' src='/images/in.svg' />
            </a>
            <a href='#'>
              <img className='' src='/images/facebook.svg' />
            </a>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
}
