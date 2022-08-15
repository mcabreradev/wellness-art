import tw from "tailwind-styled-components";

type Props = {
  children: React.ReactNode;
  type?: string;
  size?: string;
  className?: string;
};

const Component = tw.button<{ size?: string }>`
  inline-flex 
  items-start 
  justify-start 
  px-5 
  py-2.5 
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

  ${({ size }: any) => size === "lg" && `px-20`}
`;

const Button = ({ children, type, className, size }: Props) => {
  return (
    <Component type={type} className={className} size={size}>
      {children}
    </Component>
  );
};

export default Button;
