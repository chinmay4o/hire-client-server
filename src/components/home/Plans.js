import React from "react";
import { useHistory } from "react-router-dom";

const Plans = () => {
  const history = useHistory();
  return (
    <div className="plans-container">
      <h1>Our Best Selling Plans</h1>
      <p className="p-div">
        Experience Incredible Internet Speed In Kolhapur{" "}
        <button className="btn-plans" onClick={() => history.push("/plans")}>
          Checkout All Plans <i className="fa fa-arrow"></i>
        </button>{" "}
      </p>

      <div className="plans">
        <div className="first">
          <h1>Basic</h1>
          <h3>20 Mbps Unlimited</h3>

          <div className="plans-desc">
            <p>
              Speed : <div>20 Mbps </div>{" "}
            </p>
            <p>
              Data Allowance : <div>Unlimited</div>
            </p>
            <p>
              Special Offers :{" "}
              <div> Fibre To The Home (FTTH) connection with 5G Wi-Fi ONT</div>{" "}
            </p>
          </div>

          <button className="btn-buy">Get Now <i class="fa fa-long-arrow-right" aria-hidden="true"></i></button>
        </div>
        <div className="second">
          <h1>
            Popular{" "}
            <lord-icon
              src="https://cdn.lordicon.com/lupuorrc.json"
              trigger="loop"
              // colors="primary:#8930e8,secondary:#e8308c"
              colors="primary:#93e9be,secondary:#CBC7FC"
              className="lord-icon"
              style={{
                width: "80px",
                height: "80px",
                position: "absolute",
                top: "-12px",
                right: "5px",
              }}
            ></lord-icon>
          </h1>
          <h3>40 Mbps Unlimited</h3>

          <div className="plans-desc">
            <p>
              Speed : <div>40 Mbps</div>{" "}
            </p>
            <p>
              Data Allowance : <div>Unlimited</div>
            </p>
            <p>
              Special Offers :{" "}
              <div>Amazon Prime, ZEE5 Premium, Sony Premium, VOOT Select</div>{" "}
            </p>
          </div>

          <button className="btn-buy">Get Now <i class="fa fa-long-arrow-right" aria-hidden="true"></i></button>
        </div>
        <div className="third">
          <h1>Premium</h1>
          <h3>100 Mbps Unlimited</h3>

          <div className="plans-desc">
            <p>
              Speed : <div>100 Mbps</div>{" "}
            </p>
            <p>
              Data Allowance : <div>Unlimited</div>
            </p>
            <p>
              Special Offers :{" "}
              <div>Amazon Prime, ZEE5 Premium, Sony Premium, VOOT Select</div>{" "}
            </p>
          </div>

          <button className="btn-buy">Get Now <i class="fa fa-long-arrow-right" aria-hidden="true"></i></button>
        </div>
      </div>
    </div>
  );
};

export default Plans;
