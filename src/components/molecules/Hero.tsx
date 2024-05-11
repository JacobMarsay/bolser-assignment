import Overlay from "../organisms/Overlay";
import CountdownTimer from "./CountDownTimer";

const Hero = () => {
  return (
    <div className="hero__wrapper">
      <div className="hero">
        <Overlay>
          <CountdownTimer />
        </Overlay>
      </div>
    </div>
  );
};

export default Hero;
