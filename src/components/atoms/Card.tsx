import React from "react";
interface CardProps {
  className?: string;
}

const Card = ({ className }: CardProps) => {
  // Use classNames utility to conditionally assign classes
  return <div className={`card ${className}`}></div>;
};

export default Card;
