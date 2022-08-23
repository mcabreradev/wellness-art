import tw from "tailwind-styled-components";
import Button from "../components/Button";

const Container = tw.div`
  my-20
bg-beige
`;

const Wrapper = tw.div`
  flex 
  flex-col 
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

type Props = {className?: string}

function Services({className}: Props) {
  return (
    <Container className={className}>
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

      </Wrapper>
    </Container>
  )
}

export default Services