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
    {title: 'Deep tissue', content: 'Is a massage technique that’s commonly used to treat musculoskeletal problems, this could include both strains and injuries. It involves applying sustained pressure using slow, deep strokes to target the inner layers of your muscles and tissues'},
    {title: 'Relaxation', content: 'Is a form of massage therapy that focuses on providing general relaxation, relieving muscle tension and improving blood circulation.'},
    {title: 'Cupping massage', content: 'Involve placing silicone cups on top of the skin. A vacuum is made when the air inside the cup becomes warm, so when the cup is placed on the skin, it gets drawn up. This loosens the connective tissue and improves blood flow.'},
    {title: 'Thai Table combo with Deep Tissue', content: 'The treatment involves the therapists pressing up and down the body along the Sen lines using their palms, thumbs, forearms and knees. Combo with deep tissue helps to increase flexibility, decrease back and joint pain.'},
    {title: 'Prenatal', content: 'A pregnancy massage is a specially adapted gentle and soothing massage tailored specifically for the mother-to-be. Typically, deeper tissue techniques will be avoided, and more gentle techniques will be used.'},
    {title: 'Lymphatic Drainage', content: 'This is a gentle, non-invasive treatment which can help to treat the pain, stiffness and inflammation that can occur all over the body.  This treatment has been used to ease the effects of conditions ranging from eczema to fibromyalgia.'},
    {title: 'Cranial sacral therapy', content: 'It’s a type of bodywork that relieves compression in the bones of the head, sacrum and spinal column. The therapist uses gentle pressure on the head, neck, and back to relieve the stress and pain caused by compression'},
    {title: 'Express Head & Neck', content: '30 minutes of head and neck massage only. Focus on shoulders, neck, scalp and face tension. Helps to reduce migraines, neck pain, TMJ, tension headaches and stress.'},
    {title: 'Foot Reflexology', content: "Foot Reflexology involves applying different amounts of pressure to the feet. It's based on a theory that the feet are connected to certain organs and body systems. It helps to reduce general pain, poor digestion, stress and anxiety and more."}
  ];

  return (
    <>
      {items.map(item => <AccordionUI key={`key-${item.title}`} {...item}/>)}
    </>
  ) 
}
