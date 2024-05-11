import Countdown from "react-countdown-now";

const CountdownTimer = () => {
  const targetDate = new Date("2024-09-22T00:00:00");

  // Define a type for the renderer function
  type RendererProps = {
    days: number;
    hours: number;
    completed: boolean;
  };

  // Renderer function with explicit type annotations
  const renderer = ({ days, hours, completed }: RendererProps) => {
    if (completed) {
      // Render something when countdown is completed
      return <h1>Countdown is over!</h1>;
    } else {
      // Render countdown timer
      return (
        <h1>
          {days} days, {hours} hours
          <br />
          of summer to go!
        </h1>
      );
    }
  };

  return <Countdown date={targetDate} renderer={renderer} />;
};

export default CountdownTimer;
