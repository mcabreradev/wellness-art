import tw from "tailwind-styled-components";
import Map from '../components/Map'

const Container = tw.div`
  bg-white
  flex
  items-center 
  justify-center 
  flex-col
  pb-32
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

export default function Location() {
  return (
    <Container className={'location'} name="location">
      <div className="my-24 lg:my-28 px-8 lg:px-0">
        <Title>Located in the center of Edmont</Title>
        <Paragraph>We offer you the best instalaciones para birndarte el mejor servicio</Paragraph>
      </div>
      <Map/>
    </Container>
  )
}
