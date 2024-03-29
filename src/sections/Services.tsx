import tw from "tailwind-styled-components";

import { DivProps } from '../Interfaces';

import Button from "../components/Button";
import Accordion from "../components/Accordion";

const Wrapper = tw.div<DivProps>`
  bg-beige
`;

const Container = tw.div`
  flex 
  flex-col lg:flex-row 
  items-start 
  justify-between 
  py-24 lg:py-36
  max-w-7xl 
  mx-auto
  px-8 lg:px-0
`;

const Left = tw.div`
  flex 
  flex-col 
  items-start 
  justify-between 
  lg:w-[397px]
`;

const Right = tw.div`
  flex 
  flex-col 
  items-end 
  justify-between 
`;

const Title = tw.h1`
  font-normal 
  text-xl lg:text-2xl
  leading-[3.5rem] 
  not-italic 
  text-black
  font-domine
`;

const Paragraph = tw.p`
  font-normal 
  text-base lg:text-lg 
  leading-[1.8rem] 
  not-italic 
  text-black
  font-poppins
`;

const Image = tw.img`
  w-[70px] 
  pb-6
`;

type Props = {}

function Services() {
  return (
    <Wrapper name="services" className={'services'}>
      <Container>
        <Left>
          <Image src="./gray-star.svg" />
          <Title className="pb-1">
            Our Service
          </Title>
          <Paragraph className="pb-8 lg:pb-5">
            We crafted our services making sure to cover all our clients' needs.
          </Paragraph>
          <Button 
            className="mt-5 hidden lg:block" 
            size="lg" 
            href={import.meta.env.VITE_BOOK_A_MASAGGE_LINK}
            >Book a masagge</Button>
        </Left>

        <Right>
          <Accordion/>
        </Right>

      </Container>
    </Wrapper>
  )
}

export default Services