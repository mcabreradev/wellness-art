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
  px-8 lg:px-0
`;

const Title = tw.h1`
  font-normal 
  text-xl lg:text-2xl
  leading-[2.65rem] lg:leading-[3.5rem] 
  not-italic 
  text-black
  font-domine
`;

const BookTitle = tw(Title)`
  pt-5 
  lg:text-lg
  hidden lg:block
  text-center
`;

const Paragraph = tw.p`
  font-normal 
  text-base lg:text-lg 
  leading-7 lg:leading-[1.8rem] 
  not-italic 
  text-black
  font-poppins
  pb-5 
  w-full lg:w-[500px]
`;

const DescriptionContainer = tw.div`
  font-normal 
  text-base lg:text-lg 
  leading-7 lg:leading-[1.8rem] 
  not-italic 
  text-black
  font-poppins
  pb-5 
  w-full lg:w-[500px]
`;

const BookSchedule = tw(Paragraph)`
  pt-4 
  lg:text-sm 
  lg:leading-[1.35rem] 
  text-center 
  hidden lg:block
`;

const Up = tw.div`
  flex 
  flex-col 
  items-start 
  justify-between 
  w-full lg:w-[397px]
`;

const PeopleContainer = tw.div`
  flex 
  flex-col 
  items-start 
  justify-between 
  my-auto
  px-8 lg:px-28
  py-20 lg:py-36
  bg-gris
`;

const People = tw.div`
  flex 
  flex-col lg:flex-row 
  items-center lg:items-start 
  justify-between 
  mb-14
  self-center
`;

const PeoplePhoto = tw.div`
  flex
  flex-col
  items-center
  max-width
  pb-20 lg:pb-0
`;

function AboutUs() {
  return (
    <Wrapper className={'about-us'} name="about-us">
      <Container>
        <Up>
          <Title className="pb-5 lg:pb-4 text-2xl">
            We are a small brand with a huge heart
          </Title>
          <Paragraph>
            Find more about us
          </Paragraph>
        </Up>
      </Container>

      <PeopleContainer>
        <People>
          <PeoplePhoto>
            <img src="./nan.png"/>
            <BookTitle>
              Book Nan
              <br/>
              RMT
            </BookTitle>
            <BookSchedule>
              You can find Nan:
              <br/>
              Monday to Sunday
            </BookSchedule>
          </PeoplePhoto>
          <div className="lg:pl-28 w-auto lg:w-[600px]">
            <Title className="text-center lg:text-start">Bowonkit (Nan) Tubsuri</Title>
            <DescriptionContainer className="pt-4 lg:pt-3">
              <p className="mb-5">
              Nan is a talented massage therapist and Thai Yoga Massage instructor with expertise in a variety of pain management techniques. He has over 12 years of experience in Thai Massage and is accredited by the Thailand Ministry of Labor and Education as an Advanced Master Trainer.
              </p>
              <p className="mb-5">
              Nan has been in Canada since 2019, graduating from the 2200-hour certification training in advanced clinical massage therapy at The Canadian Institute of Traditional Chinese Medicine in Calgary, and from the South Edmonton School of Massage Therapy in Edmonton.
              </p>
              <p className="mb-5">
              He enjoys helping people to relieve stress and improve circulation and mobility. As a teacher and massage therapist he loves to share his knowledge about how to create a healthy and balanced life.
              </p>
              <p className="mb-5">
              Nan performs holistic treatments mixing western and eastern techniques including deep tissue, relaxation, reflexology, Thai Yoga Massage, acupressure, energy lines and trigger point therapy.
              </p>
            </DescriptionContainer>

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
              <br/>
              RMT & MOT
            </BookTitle>
            <BookSchedule>
              You can find Cata: 
              <br/> 
              Tuesday, Thursday, Friday <br/>and Sunday
            </BookSchedule>
          </PeoplePhoto>
          <div className="lg:pl-28 w-auto lg:w-[600px]">
            <Title className="text-center lg:text-start">Catalina Castañeda</Title>
            <DescriptionContainer className="pt-4 lg:pt-3">
              <p className="mb-5">
              Catalina cultivates a peaceful and compassionate environment in which to provide nourishing experiences for mind, body and soul.
              </p>
              <p className="mb-5">
              She offers deep tissue, therapeutic, sports, pre/post natal, cupping, hot stones, foot reflexology and Thai yoga massage. She enjoys using a variety of techniques, and incorporates Thai stretching, energy lines and trigger point therapy to ensure that clients feel restored and renewed after each treatment.
              </p>
              <p className="mb-5">
              In addition to completing Advanced Clinical Massage Therapy training at Alberta’s  Makami College, Catalina studied ITM (International Training Massage) in Chiang Mai, Thailand, and was certified to perform Thai yoga massage in Calgary in 2017.  
              </p>
              <p className="mb-5">
                She came back to the school to become a Manual Osteopathic Therapist and graduate in March 2022. Under the scope of MOT, she can do myofascial remodeling, osteoarticular adjustment, visceral manipulation, craniosacral and lymphatic drainage treatments.
              </p>
              <p className="mb-5">
              She recommends 75-90 minute sessions to allow time for all of the healing benefits of her treatments.
              </p>
            </DescriptionContainer>

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