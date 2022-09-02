import tw from "tailwind-styled-components";

import Phil from '../components/Pill';

const Wrapper = tw.div`
  container 
  max-w-7xl 
  mx-auto
`;

const Container = tw.div`
  flex 
  flex-col 
  items-start 
  justify-between 
  py-36
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

const Up = tw.div`
  flex 
  flex-col 
  items-start 
  justify-between 
  w-[397px]
`;

const PeopleContainer = tw.div`
  flex 
  flex-col 
  items-start 
  justify-between 
  my-auto
  px-28
  py-36
  bg-gris
`;

const People = tw.div`
  flex 
  flex-row 
  items-start 
  justify-between 
  mb-14
  self-center
`;

const PeoplePhoto = tw.div`
  flex
  flex-col
  items-center
  max-width
`;

function AboutUs() {
  return (
    <Wrapper className={'about-us'} name="about-us">
      <Container>
        <Up>
          <Title className="pb-4">
            We are a small brand with a huge heart
          </Title>
          <Paragraph className="pb-5 w-[500px]">
            Nan is a talented massage therapist and Thai Yoga Massage instructor with expertise in a variety of pain
          </Paragraph>
        </Up>
      </Container>

      <PeopleContainer className="">
        <People className="">
          <PeoplePhoto className="">
            <img src="./nan.png"/>
            <Title className="text-lg pt-5">
              Book Nan
            </Title>
            <Paragraph className="pt-4 text-sm leading-snug text-center">
              Saturday: 10am - 6pm<br/>
              Friday and Sunday:<br/>
              2pm - 8pm
            </Paragraph>
          </PeoplePhoto>
          <div className="pl-28 w-[600px]">
            <Title>Bowonkit Tubsuri - (Nan)</Title>
            <Paragraph className="pt-3">
            Nan is a talented massage therapist and Thai Yoga Massage instructor with expertise in a variety of pain management techniques. He has over 12 years of experience in Thai Massage and is accredited by the and is accredited by the and is accredi...
            </Paragraph>

            <p className="text-lg leading-snug text-gray-800 font-domine pt-8 pb-5">Services</p>

            <Phil>Tissues</Phil>
            <Phil>Relaxation</Phil>
            <Phil>Thai combo with deep tissue</Phil>
            <Phil>Cranial sacral</Phil>
            <Phil>Lympathic drainage</Phil>
            <Phil>Express head & neck</Phil>
            <Phil>Foot reflexology</Phil>
            <Phil>Prenatal massage</Phil>
            <Phil>Cupping</Phil>
          </div>
        </People>

        <People className="">
          <PeoplePhoto className="">
            <img src="./cata.png"/>
            <Title className="text-lg pt-5">
              Book Cata
            </Title>
            <Paragraph className="pt-4 text-sm leading-snug text-center">
              Tuesday, Wednesday, <br/>Thursday: 1-8pm
            </Paragraph>
          </PeoplePhoto>
          <div className="pl-28 w-[600px]">
            <Title>Catalina Castañeda</Title>
            <Paragraph className="pt-3">
            Nan is a talented massage therapist and Thai Yoga Massage instructor with expertise in a variety of pain management techniques. He has over 12 years of experience in Thai Massage and is accredited by the and is accredited by the and is accredi...
            </Paragraph>

            <p className="text-lg leading-snug text-gray-800 font-domine pt-8 pb-5">Services</p>

            <Phil>Tissues</Phil>
            <Phil>Relaxation</Phil>
            <Phil>Thai combo with deep tissue</Phil>
            <Phil>Cranial sacral</Phil>
            <Phil>Lympathic drainage</Phil>
            <Phil>Express head & neck</Phil>
            <Phil>Foot reflexology</Phil>
          </div>
        </People>
      </PeopleContainer>
    </Wrapper>
  )
}

export default AboutUs