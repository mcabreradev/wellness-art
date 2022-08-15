import tw from "tailwind-styled-components";
import Button from "./Button";

type Props = {};

const Container = tw.div`
  container 
  mx-auto 
  px-24 
  flex 
  flex-row 
  items-center 
  justify-between
`;

const Wrapper = tw.div`
  flex 
  flex-col 
  items-start 
  justify-between 
  w-[382px]
`;

const Title = tw.h1`
  font-normal 
  text-3xl 
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

const Hero = ({}: Props) => {
  return (
    <Container>
      <Wrapper>
        <Title className="py-5">
          Sientete bien y llega más lejos
        </Title>
        <Paragraph className="py-5">
          Tenemos los masajes necesarios para ayudarte a alcanzar tus metas
        </Paragraph>
        <Button className="mt-5" size="lg">Book a masagge</Button>
      </Wrapper>

      <div className="">
        <img src="./hands.png" />
      </div>
    </Container>
  );
};

export default Hero;
