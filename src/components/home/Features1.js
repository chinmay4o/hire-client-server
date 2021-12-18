import React from "react";
import i1 from "../../img3/icons/speedometer.png";
import i2 from "../../img3/icons/stopwatch.png";
import i3 from "../../img3/icons/buffer.png";
import i4 from "../../img3/icons/smart-city.png";
import i5 from "../../img3/icons/rocket.png";
import i6 from "../../img3/icons/power-supply.png";
import i7 from "../../img3/icons/infinity.png";
import i8 from "../../img3/icons/shield.png";

const Features1 = () => {
  return (
    <div className="experience-container">
      <h1>Experience Our Services</h1>

      <div className="grid">
        <div className="one box">
          <div className="img">
            <img src={i1} alt="" />
          </div>

          <p>Uninterrupted</p>
        </div>
        <div className="two box">
          <div className="img">
            <img src={i2} alt="" />
          </div>
          <p>Fast</p>
        </div>
        <div className="three box">
          <div className="img">
            <img src={i3} alt="" />
          </div>
          <p>Buffer-free</p>
        </div>
        <div className="four box">
          <div className="img">
            <img src={i8} alt="" />
          </div>
          <p>Affordable tariff</p>
        </div>
        <div className="five box">
          <div className="img">
            <img src={i4} alt="" />
          </div>
          <p>City wide feasibility</p>
        </div>
        <div className="six box">
          <div className="img">
            <img src={i5} alt="" />
          </div>
          <p>24x7 Promised Speed</p>
        </div>
        <div className="sev box">
          <div className="img">
            <img src={i6} alt="" />
          </div>
          <p>Secure Sharing</p>
        </div>
        <div className="eight box">
          <div className="img">
            <img src={i7} alt="" />
          </div>
          <p>Unlimited Symmetric speed</p>
        </div>
      </div>
    </div>
  );
};

export default Features1;
