import tw from "tailwind-styled-components";

type Props = {
  children: React.ReactNode;
  type?: string;
  size?: string;
  href?: string;
  className?: string;
};

const Component = tw.a<{ size?: string }>`
  inline-flex 
  items-start 
  justify-start 
  px-24 
  lg:px-5 
  py-3
  lg:py-2.5 
  bg-primary 
  rounded-full 
  font-thin
  font-poppins 
  text-lg 
  text-white 
  hover:bg-primary-100 
  focus:ring-4 
  focus:outline-none 
  focus:ring-blue-100
  cursor-pointer

  ${({ size }: any) => size === "lg" && `lg:px-20`}

`;

const Button = ({ children, type, className, size, href }: Props) => {
  return (
    <Component type={type} className={className} size={size} href={href || null} target="_blank">
      {children}
    </Component>
  );
};

export default Button;
