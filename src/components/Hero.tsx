import Carousel from 'framer-motion-carousel';
import tw from 'tailwind-styled-components';

import Button from '@/components/Button';
import NextImage from '@/components/NextImage';

const Wrapper = tw.div`
  flex
  flex-col-reverse
  lg:flex-row
  items-center
  justify-between
  max-w-7xl
  lg:mx-auto
  lg:mb-28
  mx-5
  mb-16
`;

const Container = tw.div`
  flex
  flex-col
  items-start
  justify-between
  lg:w-[500px]
`;

const Title = tw.h1`
  font-normal
  text-2xl
  lg:text-3xl
  leading-[3.5rem]
  not-italic
  text-black
  font-domine
`;

const Paragraph = tw.p`
  font-normal
  text-base
  lg:text-lg
  leading-[1.8rem]
  not-italic
  text-black
  font-poppins
`;

const Hands = () => {
  return (
    <>
      <Container>
        <Title className='pt-16 lg:py-5'>
          The art of creating ourselves anew
        </Title>
        <Paragraph className='py-5'>
          The massage table is our easel and our client is our canvas. Our job,
          as artists and therapists, is to allow our canvas to represent
          relaxation and good health.
        </Paragraph>
        <Button
          className='mx-auto mt-5 lg:mx-0'
          size='lg'
          href={process.env.NEXT_PUBLIC_BOOK_A_MASAGGE_LINK}
        >
          Book a masagge
        </Button>
      </Container>

      <div className='lg:flex lg:w-[633px]'>
        <Carousel
          autoPlay={true}
          interval={process.env.NEXT_PUBLIC_CAROUSEL_INTERVAL}
          loop={true}
          renderArrowLeft={() => null}
          renderArrowRight={() => null}
          renderDots={() => null}
        >
          <NextImage src='/images/hands1.jpg' alt='' height={336} width={328} />
          <NextImage src='/images/hands2.jpg' alt='' height={336} width={328} />
        </Carousel>
      </div>
    </>
  );
};

const Hero = () => {
  return (
    <Wrapper>
      <Hands />
    </Wrapper>
  );
};

export default Hero;
