import React from "react";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer1">
        {/* <img src="logo" alt="" /> */}
        <h1>OneBrand</h1>
      </div>
      <div className="footer2">
        <div className="group">
          <div>
            <h4> Mailing Address : </h4>
            <p>Lorem ipsum dolor sit am. Noribus fugit!</p>
          </div>
          <div>
            <h4> Phone Number : </h4>
            <p>+91 8237170617</p>
          </div>
          <div>
            <h4> Email Address : </h4>
            <p>chinmay@surve</p>
          </div>
        </div>
      </div>
      <div className="footer3">
      <h2>Newsletter</h2>
        <form className="footer-form">
            <input type="text" placeholder="Name"/>
            <input type="text" placeholder="Email"/>
            <button >Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Footer;
