import AgeCalculatorForm from "./forms/AgeCalculatorForm";
import React from "react";

interface Props {
  heading: string;
}

const FormSection = ({ heading }: Props) => {
  return (
    <div className="form__section">
      <div className="form__heading">
        <h2>{heading}</h2>
      </div>
      <AgeCalculatorForm />
    </div>
  );
};

export default FormSection;
