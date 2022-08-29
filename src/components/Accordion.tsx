import { useState, useRef } from "react"
import tw from "tailwind-styled-components";

const Container = tw.div`
  w-[529px]
  border-b 
  border-black
  cursor-pointer
`;

const Title = tw.div`
  font-normal 
  text-xl 
  leading-[3.5rem] 
  not-italic 
  text-black
  font-domine
`;

const Content = tw.div`
  font-normal 
  text-lg 
  leading-7
  not-italic 
  text-black
  font-poppins
  pt-2
  pl-5
  pb-10
`;

const AccordionUI = ({ title, content }: any) => {
  const [isOpened, setOpened] = useState<boolean>(false)
  const [height, setHeight] = useState<string>("0px")
  const contentElement = useRef(null)

  const HandleOpening = () => {
    setOpened(!isOpened)
    setHeight(!isOpened ? `${contentElement?.current?.scrollHeight}px` : "0px")
  }
  return (
    <Container onClick={HandleOpening}>
      <div className={"flex text-base justify-between items-center py-3"}>
        <Title>{title}</Title>
        {isOpened ? <img src="./minus.svg" /> : <img src="./plus.svg" />}
      </div>
      <div
        ref={contentElement}
        style={{ height: height }}
        className="overflow-hidden transition-all duration-500"
      >
        <Content>{content}</Content>
      </div>
    </Container>
  )
}

export default function Accordion() {
  const items = [
    {title: 'Deep tissue', content: 'Nan is a talented massage therapist and Thai Yoga Massage instructor with expertise in a variety of pain management techniques. He has over 12 years of experience in Thai Massage and is accredited by the and is accredited by the and'},
    {title: 'Relaxation', content: ''},
    {title: 'Thai combo with deep tissue', content: ''},
    {title: 'Cranial sacral', content: ''},
    {title: 'Lymphatic drainage', content: ''},
    {title: 'Express head & neck', content: ''},
    {title: 'Foot reflexology', content: ''},
    {title: 'Prenatal massage', content: ''},
    {title: 'Cupping', content: ''}
  ];

  return (
    <>
      {items.map(item => <AccordionUI key={`key-${item.title}`} {...item}/>)}
    </>
  ) 
}
