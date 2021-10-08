import React from "react";
import airtel from "../../images/airtel-postpaid copy.png"

const Best = () => {
  return (
    <div className="best-container">
      <div className="best-box1">
        <h1>Best selling plans starting from Rs 499 /-</h1>

        <p>
          Unlimited calling, fastest speed , Amazon prime , and xtreme fiber for
          free.
        </p>
        <p>Choose from out best selling prepaid plans</p>

        <div className="sec">
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
        </div>
      </div>
      <div className="best-box2">
        <img src={airtel} alt="girl" />
      </div>
    </div>
  );
};

export default Best;
