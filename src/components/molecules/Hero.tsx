import React from "react";
import Overlay from "../organisms/Overlay";
import CountdownTimer from "./CountDownTimer";

const Hero = () => {
  return (
    <section>
      <div className="hero__wrapper">
        <div className="hero">
          <Overlay>
            <CountdownTimer />
          </Overlay>
        </div>
      </div>
    </section>
  );
};

export default Hero;
