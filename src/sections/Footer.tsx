import tw from "tailwind-styled-components";

const Wrapper = tw.div`
  bg-secondary
`;

const Container = tw.div`
  flex 
  flex-row 
  justify-between 
  py-24
  container 
  max-w-6xl 
  mx-auto
`;

const Text = tw.p`
  font-normal
  not-italic 
  font-poppins
  text-base 
  leading-7 
  text-gray-300
`;

export default function Footer() {
  return (
    <Wrapper className={'footer'}>
      <Container>
        <img src="./wellness-footer.svg"/>
        <div className="w-[320px]">
          <Text className="font-bold">Address</Text>
          <Text className="pb-6">
            12328 102 Ave. Evolve Strenght. Office 105 Edmonton, AB - T5N 0L9
          </Text>

          <Text className="font-bold">Phone</Text>
          <Text>
          (587) 223-0966<br/>(825) 365-1822
          </Text>
        </div>

        <div className="w-[320px]">
          <Text className="font-bold">Email</Text>
          <Text className="pb-6">
            booking@wellnessartmassage.com
          </Text>

          <Text className="font-bold mb-4">Find us on</Text>
          <div 
            className="flex flex-row justify-start items-center">
            <a href="#">
              <img className="pr-6" src="./ig.svg" />
            </a>
            <a href="#">
              <img className="pr-6" src="./in.svg" />
            </a>
            <a href="#">
              <img className="" src="./facebook.svg" />
            </a>
          </div>
        </div>
      </Container>
    </Wrapper>
  )
}
