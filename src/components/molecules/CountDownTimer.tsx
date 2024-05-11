import React from "react";
import Countdown from "react-countdown-now";

type RendererProps = {
  days: number;
  hours: number;
  completed: boolean;
};

const CountdownTimer = () => {
  // Define the start and end dates for the countdown
  const currentYear = new Date().getFullYear();
  const startDate = new Date(`${currentYear}-06-20`);
  const endDate = new Date(`${currentYear}-09-22`);

  // Get the current date
  const now = new Date();

  // Determine if today's date is before or after the start date
  const isBeforeStartDate = now < startDate;

  // Calculate the appropriate countdown start date and end date
  const countdownEndDate = isBeforeStartDate ? startDate : endDate;

  // Renderer function for the countdown
  const renderer = ({ days, hours, completed }: RendererProps) => {
    if (completed) {
      return <h1>Countdown is over!</h1>;
    } else {
      return (
        <h1>
          {days} days, {hours} hours
          <br />
          {isBeforeStartDate ? "until summer begins!" : "of summer to go!"}
        </h1>
      );
    }
  };

  return (
    <Countdown
      date={countdownEndDate.getTime()}
      renderer={renderer}
      intervalDelay={1000}
      precision={3}
    />
  );
};

export default CountdownTimer;
