import React from "react";
import data from "../../data.js";
import Footer from "../home/Footer";

const Plans = () => {
  return (
    <div className="parent-wifi">
      <div className="layout-container-wifi">
        <div className="wifi-container">
          <div className="sidebar">
            <h3>Browse Recharge Plans</h3>
          </div>

          <div className="wifi-main">

            <div className="wifi-head">
              <div className="head">Name</div>

              <div className="head">Data</div>

              <div className="head">Validity</div>

              <div className="head">Price</div>

            </div>

            {data.map((ele, index) => {
              return (
                <div className="each-plan" key={ele.id}>
                  <div className="name">{ele.price}</div>

                  <div className="data">{ele.data} /day</div>

                  <div className="validity">{ele.validity}</div>

                  <button className="buy">₹{ele.price}</button>
                </div>
              );
            })}
          </div>
        </div>

        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Plans;
