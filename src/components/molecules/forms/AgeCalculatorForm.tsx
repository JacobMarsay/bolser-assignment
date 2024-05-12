// AgeCalculatorForm.tsx

import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeInFromLeft } from "../../../animations/animations";

const AgeCalculatorForm = () => {
  const [ageInput, setAgeInput] = useState("");
  const [monthsOfSummer, setMonthsOfSummer] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let input = event.target.value;
    input = input.replace(/[^0-9]/g, ""); // Only allow digits
    setAgeInput(input);
    const isValidNumber = input.trim() !== "";
    setDisabled(!isValidNumber);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
          <motion.div
            variants={fadeInFromLeft} // Use type assertion
            initial="hidden"
            animate="show"
          >
            <input
              type="text"
              value={ageInput}
              onChange={handleChange}
              placeholder="Your age"
            />
            <button type="submit" disabled={disabled}>
              Calculate
            </button>
          </motion.div>
        )}

        {showResult && (
          <motion.div
            variants={fadeInFromLeft} // Use type assertion
            initial="hidden"
            animate="show"
            className="result"
          >
            <h3>You have lived {monthsOfSummer} months of summer!</h3>
            <button
              type="button"
              onClick={handleReset}
              className={disabled ? "disabled" : ""}
            >
              Reset
            </button>
          </motion.div>
        )}
      </form>
    </div>
  );
};

export default AgeCalculatorForm;
