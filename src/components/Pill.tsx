import tw from "tailwind-styled-components";

const Component = tw.div`
  inline-flex 
  items-center 
  justify-center 
  px-4 
  py-1 
  mr-3
  mb-3
  border 
  rounded-full 
  border-black
`;
const Text = tw.p`
  text-sm 
  leading-loose 
  text-gray-800
`;

type Props = {
  children: any
}

export default function Pill({children}: Props) {
  return (
    <Component>
      <Text>{children}</Text>
    </Component>
  )
}