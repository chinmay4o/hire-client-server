import React from "react";
import airtel from "../../images/airtel-postpaid copy.png"
import img1 from "../../img2/1best selling plan 2.png"

const Best = () => {
  return (
    <div className="best-container">
      {/* <img src={img1} alt="" style={{ "height": "100%", "width": "100%"}}/> */}
      <div className="best-box1">
        <h1>Best selling plans starting from Rs 499 /-</h1>

        <p className="dis">
          Unlimited calling, fastest speed , Amazon prime , and xtreme fiber for
          free.
        </p>
        <p className="dis">Choose from out best selling prepaid plans</p>

        <div className="sec">
          <div className="one"> 
          <div className="a c">10<span>mbps</span> </div>
          <div className="b c">₹ 400</div>
          </div>
          <div className="two">
          <div className="a c">20<span>mbps</span></div>
          <div className="b c">₹ 500</div>
          </div>
          <div className="three">
          <div className="a c">30<span>mbps</span></div>
          <div className="b c">₹ 600</div>
          </div>
        </div>
      </div>
      <div className="best-box2">
        <img src={img1} alt="girl" />
      </div>
    </div>
  );
};

export default Best;


{/* <div className="best-container">
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
    </div> */}