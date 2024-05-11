import React from "react";
import Button from "../atoms/Button";

interface Props {
  toggle: () => void;
}

const ForeCastTrigger = ({ toggle }: Props) => {
  return (
    <div className="forecast">
      <div className="header">
        <h2>
          What's the weather
          <br />
          like at Bolser?
        </h2>
      </div>
      <div className="showme__btn">
        <Button text="show me" fcn={toggle} />
      </div>
    </div>
  );
};

export default ForeCastTrigger;
