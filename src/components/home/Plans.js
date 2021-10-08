import React from "react";
import {useHistory} from "react-router-dom";

const Plans = () => {
  const history = useHistory();
  return (
    <div className="plans-container">
      <h1>OUR BEST SELLING PLANS</h1>
      <p className="p-div">
        Experience Incredible Internet Speed In Kolhapur{" "}
        <button className="btn-plans" onClick={() => history.push("/plans")}>
          Checkout All Plans <i className="fa fa-arrow"></i>
        </button>{" "}
      </p>

      <div className="plans">
        <div className="first">
          <h1>Basic</h1>
          <h3>15 Mbps Unlimited</h3>

          <div className="plans-desc">
            <p>
              Speed :{" "}
              <div>Lorem ipsum t. Non,liquid expedita nisi voluptatum, </div>{" "}
            </p>
            <p>
              Data Allowance : <div>Lorem ipsum t. Non,liquid, </div>
            </p>
            <p>
              Special Offers :{" "}
              <div>Lorem ipsum t. Non,liquid expedita nisi voluptatum, </div>{" "}
            </p>
          </div>

          <button className="btn-buy">Get Now</button>
        </div>
        <div className="second">
          <h1>Popular</h1>
          <h3>25 Mbps Unlimited</h3>

          <div className="plans-desc">
            <p>
              Speed :{" "}
              <div>Lorem ipsum t. Non,liquid expedita nisi voluptatum, </div>{" "}
            </p>
            <p>
              Data Allowance : <div>Lorem ipsum t. Non,liquid, </div>
            </p>
            <p>
              Special Offers :{" "}
              <div>Lorem ipsum t. Non,liquid expedita nisi voluptatum, </div>{" "}
            </p>
          </div>

          <button className="btn-buy">Get Now</button>
        </div>
        <div className="third">
          <h1>Premium</h1>
          <h3>150 Mbps Unlimited</h3>

          <div className="plans-desc">
            <p>
              Speed :{" "}
              <div>Lorem ipsum t. Non,liquid expedita nisi voluptatum, </div>{" "}
            </p>
            <p>
              Data Allowance : <div>Lorem ipsum t. Non,liquid, </div>
            </p>
            <p>
              Special Offers :{" "}
              <div>Lorem ipsum t. Non,liquid expedita nisi voluptatum, </div>{" "}
            </p>
          </div>

          <button className="btn-buy">Get Now</button>
        </div>
      </div>
    </div>
  );
};

export default Plans;
