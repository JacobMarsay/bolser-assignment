import Overlay from "../organisms/Overlay";
import CountdownTimer from "./CountDownTimer";

const Hero = () => {
  return (
    <div className="hero">
      <Overlay>
        <CountdownTimer />
      </Overlay>
    </div>
  );
};

export default Hero;
