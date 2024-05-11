import AgeCalculatorForm from "./forms/AgeCalculatorForm";

interface Props {
  heading: string;
}

const FormSection = ({ heading }: Props) => {
  return (
    <div className="form__section">
      <div className="form__heading">
        <h2>{heading}</h2>
        <AgeCalculatorForm />
      </div>
    </div>
  );
};

export default FormSection;
