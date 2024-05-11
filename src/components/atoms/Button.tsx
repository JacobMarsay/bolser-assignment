import React from "react";

interface Props {
  text: string;
  fcn: () => void;
}

const Button = ({ text, fcn }: Props) => {
  return <button onClick={fcn}>{text}</button>;
};

export default Button;
