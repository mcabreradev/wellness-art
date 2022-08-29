import tw from "tailwind-styled-components";
import Button from "../components/Button";
import Accordion from "../components/Accordion";

const Container = tw.div`
bg-beige
`;

const Wrapper = tw.div`
  flex 
  flex-row 
  items-start 
  justify-between 
  container 
  mx-auto 
  py-36
  px-24
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
    <Container className={'services'}>
      <Wrapper>
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

      </Wrapper>
    </Container>
  )
}

export default Services