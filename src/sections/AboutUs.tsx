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
  px-8 md:px-0
`;

const Title = tw.h1`
  font-normal 
  text-xl md:text-2xl
  leading-[2.65rem] md:leading-[3.5rem] 
  not-italic 
  text-black
  font-domine
`;

const BookTitle = tw(Title)`
  pt-5 
  md:text-lg
  hidden md:block
`;

const Paragraph = tw.p`
  font-normal 
  text-base md:text-lg 
  leading-7 md:leading-[1.8rem] 
  not-italic 
  text-black
  font-poppins
  pb-5 
  w-full md:w-[500px]
`;

const BookSchedule = tw(Paragraph)`
  pt-4 
  md:text-sm 
  md:leading-[1.35rem] 
  text-center 
  hidden md:block
`;

const Up = tw.div`
  flex 
  flex-col 
  items-start 
  justify-between 
  w-full md:w-[397px]
`;

const PeopleContainer = tw.div`
  flex 
  flex-col 
  items-start 
  justify-between 
  my-auto
  px-8 md:px-28
  py-20 md:py-36
  bg-gris
`;

const People = tw.div`
  flex 
  flex-col md:flex-row 
  items-center md:items-start 
  justify-between 
  mb-14
  self-center
`;

const PeoplePhoto = tw.div`
  flex
  flex-col
  items-center
  max-width
  pb-20 md:pb-0
`;

function AboutUs() {
  return (
    <Wrapper className={'about-us'} name="about-us">
      <Container>
        <Up>
          <Title className="pb-5 md:pb-4 text-2xl">
            We are a small brand with a huge heart
          </Title>
          <Paragraph>
            Nan is a talented massage therapist and Thai Yoga Massage instructor with expertise in a variety of pain
          </Paragraph>
        </Up>
      </Container>

      <PeopleContainer>
        <People>
          <PeoplePhoto>
            <img src="./nan.png"/>
            <BookTitle>
              Book Nan
            </BookTitle>
            <BookSchedule>
              Saturday: 10am - 6pm<br/>
              Friday and Sunday:<br/>
              2pm - 8pm
            </BookSchedule>
          </PeoplePhoto>
          <div className="md:pl-28 w-auto md:w-[600px]">
            <Title className="text-center md:text-start">Bowonkit Tubsuri - (Nan)</Title>
            <Paragraph className="pt-4 md:pt-3">
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
          <PeoplePhoto>
            <img src="./cata.png"/>
            <BookTitle>
              Book Cata
            </BookTitle>
            <BookSchedule>
              Tuesday, Wednesday, <br/>Thursday: 1-8pm
            </BookSchedule>
          </PeoplePhoto>
          <div className="md:pl-28 w-auto md:w-[600px]">
            <Title className="text-center md:text-start">Catalina Castañeda</Title>
            <Paragraph className="pt-4 md:pt-3">
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