import tw from "tailwind-styled-components";
import { Element } from 'react-scroll'

import Button from "../components/Button";
import Accordion from "../components/Accordion";

const Wrapper = tw.div`
  bg-beige
`;

const Container = tw.div`
  flex 
  flex-row 
  items-start 
  justify-between 
  py-36
  container 
  max-w-7xl 
  mx-auto
`;

const Left = tw.div`
  flex 
  flex-col 
  items-start 
  justify-between 
  w-[397px]
`;

const Right = tw.div`
  flex 
  flex-col 
  items-end 
  justify-between 
`;

const Title = tw.h1`
  font-normal 
  text-2xl
  leading-[3.5rem] 
  not-italic 
  text-black
  font-domine
`;

const Paragraph = tw.p`
  font-normal 
  text-lg 
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
          <Paragraph className="pb-5">
            Nan is a talented massage therapist and Thai Yoga Massage instructor with expertise
          </Paragraph>
          <Button className="mt-5" size="lg">Book a masagge</Button>
        </Left>

        <Right>
          <Accordion/>
        </Right>

      </Container>
    </Wrapper>
  )
}

export default Services