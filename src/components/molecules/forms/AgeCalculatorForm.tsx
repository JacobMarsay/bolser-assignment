import React, { useState } from "react";

const AgeCalculatorForm = () => {
  const [ageInput, setAgeInput] = useState("");
  const [monthsOfSummer, setMonthsOfSummer] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let input = event.target.value;

    // Filter out non-numeric characters using regular expression
    input = input.replace(/[^0-9]/g, ""); // Only allow digits

    setAgeInput(input);

    // Validate if the input is a valid number
    const isValidNumber = input.trim() !== "";
    setDisabled(!isValidNumber);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Calculate months of summer (age * 3)
    const age = parseInt(ageInput);
    if (!isNaN(age)) {
      const months = age * 3;
      setMonthsOfSummer(months);
      setShowResult(true);
    }
  };

  const handleReset = () => {
    setAgeInput("");
    setMonthsOfSummer(0);
    setShowResult(false);
    setDisabled(true);
  };

  return (
    <div className="form__wrapper">
      <form className="form" onSubmit={handleSubmit}>
        {!showResult && (
          <input
            type="text"
            value={ageInput}
            onChange={handleChange}
            placeholder="Your age"
          />
        )}
        {!showResult && (
          <button type="submit" disabled={disabled}>
            Calculate
          </button>
        )}
        {showResult && (
          <div>
            <h3>
              You have lived {monthsOfSummer} <br />
              months of summer!
            </h3>
            <button
              type="button"
              onClick={handleReset}
              className={disabled ? "disabled" : ""}
            >
              Reset
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default AgeCalculatorForm;
