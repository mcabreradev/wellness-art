import tw from "tailwind-styled-components";
import Button from "./Button";

type Props = {};

const Wrapper = tw.div`
  flex 
  flex-col-reverse
  md:flex-row
  items-center 
  justify-between
  max-w-7xl 
  md:mx-auto
  md:mb-28
  mx-5
`;

const Container = tw.div`
  flex 
  flex-col 
  items-start 
  justify-between 
  md:w-[382px]
`;

const Title = tw.h1`
  font-normal 
  text-2xl 
  md:text-3xl 
  leading-[3.5rem] 
  not-italic 
  text-black
  font-domine
`;

const Paragraph = tw.p`
  font-normal 
  text-base
  md:text-lg 
  leading-[1.8rem] 
  not-italic 
  text-black
  font-poppins
`;

const Hero = ({}: Props) => {
  return (
    <Wrapper>
      <Container>
        <Title className="pt-16 md:py-5">
          Sientete bien y llega más lejos
        </Title>
        <Paragraph className="py-5">
          Tenemos los masajes necesarios para ayudarte a alcanzar tus metas
        </Paragraph>
        <Button 
          className="mt-5 mx-auto md:mx-0" 
          size="lg"
          href="https://wellnessartinc.clinicsense.com/"
          >Book a masagge</Button>
      </Container>

      <div className="">
        <img src="./hands.png" />
      </div>
    </Wrapper>
  );
};

export default Hero;
