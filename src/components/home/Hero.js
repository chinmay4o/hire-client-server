import React, { useState, useEffect } from "react";
import ban1 from "../../img3/Banner 1.jpg";
import ban2 from "../../img3/Banner 2.jpg";
import ban3 from "../../img3/Banner 3.jpg";

const Hero = () => {
  const today = new Date();

  const [img, setImg] = useState(ban1);
  const [time, setTime] = useState();

  useEffect(() => {
    setTimeout(() => {
      if (img === ban1) {
        setImg(ban2);
      } else if (img === ban2) {
        setImg(ban3);
      } else if (img === ban3) {
        setImg(ban1);
      }

      setTime(today.getSeconds());
    }, 5000);
  });

  return (
    <div className="hero-container">
      {/* <img src={hero} alt="" /> */}
      <img src={img} alt="hero" key={time} />

      {/* <h1>
        Unlimited Data <span className="line"></span>
        <br />
        Unlimited Entertainment <span className="line1"></span>
      </h1> */}
    </div>
  );
};

export default Hero;
