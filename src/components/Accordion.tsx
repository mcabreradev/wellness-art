import { useState, useRef } from "react"
import tw from "tailwind-styled-components";

const Container = tw.div`
  lg:w-[529px]
  border-b 
  border-black
  cursor-pointer
`;

const Title = tw.div`
  font-normal 
  text-[25px] lg:text-xl 
  leading-[3.5rem] 
  not-italic 
  text-black
  font-domine
`;

const Content = tw.div`
  font-normal 
  text-base lg:text-lg 
  leading-7
  not-italic 
  text-black
  font-poppins
  pt-2
  pl-3 lg:pl-5
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

  const imgSrc = isOpened ? "./minus.svg" : "./plus.svg";

  return (
    <Container onClick={HandleOpening}>
      <div className={"flex text-base justify-between items-center py-3"}>
        <Title>{title}</Title>
        <img src={imgSrc} />
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
    {title: 'Relaxation', content: 'Nan is a talented massage therapist and Thai Yoga Massage instructor with expertise in a variety of pain management techniques. He has over 12 years of experience in Thai Massage and is accredited by the and is accredited by the and'},
    {title: 'Thai combo with deep tissue', content: 'Nan is a talented massage therapist and Thai Yoga Massage instructor with expertise in a variety of pain management techniques. He has over 12 years of experience in Thai Massage and is accredited by the and is accredited by the and'},
    {title: 'Cranial sacral', content: 'Nan is a talented massage therapist and Thai Yoga Massage instructor with expertise in a variety of pain management techniques. He has over 12 years of experience in Thai Massage and is accredited by the and is accredited by the and'},
    {title: 'Lymphatic drainage', content: 'Nan is a talented massage therapist and Thai Yoga Massage instructor with expertise in a variety of pain management techniques. He has over 12 years of experience in Thai Massage and is accredited by the and is accredited by the and'},
    {title: 'Express head & neck', content: 'Nan is a talented massage therapist and Thai Yoga Massage instructor with expertise in a variety of pain management techniques. He has over 12 years of experience in Thai Massage and is accredited by the and is accredited by the and'},
    {title: 'Foot reflexology', content: 'Nan is a talented massage therapist and Thai Yoga Massage instructor with expertise in a variety of pain management techniques. He has over 12 years of experience in Thai Massage and is accredited by the and is accredited by the and'},
    {title: 'Prenatal massage', content: 'Nan is a talented massage therapist and Thai Yoga Massage instructor with expertise in a variety of pain management techniques. He has over 12 years of experience in Thai Massage and is accredited by the and is accredited by the and'},
    {title: 'Cupping', content: 'Nan is a talented massage therapist and Thai Yoga Massage instructor with expertise in a variety of pain management techniques. He has over 12 years of experience in Thai Massage and is accredited by the and is accredited by the and'}
  ];

  return (
    <>
      {items.map(item => <AccordionUI key={`key-${item.title}`} {...item}/>)}
    </>
  ) 
}
