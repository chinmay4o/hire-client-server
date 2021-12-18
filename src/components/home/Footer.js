import React from "react";
// import logo from "../../img2/logo-br.jpeg";
import logo from "../../img3/logoR.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer1">
        {/* <img src={logo} alt="logo" /> */}
        <p className="logo">Bhima Riddhi Broadband Private Limited (BRBPL)</p>
      </div>
      <div className="footer2">
        <div className="group">
          <div>
            <h4> Mailing Address : </h4>
            <p>
              Plot No. 49/50,12th Cross Road, MIDC,Andheri East- 400093, Mumbai,
              Maharasthra
            </p>
          </div>
          <div>
            <h4> Phone Number : </h4>
            <p>0231 6655577</p>
          </div>
          <div>
            <h4> Email Address : </h4>
            <p>customersupport@bhima-group.in</p>
          </div>
          <div>
            <h4> Find Us On : </h4>
            <p>
              <a
                href="https://www.instagram.com/b_internet_official/"
                target="_blank"
              >
                {" "}
                <i class="fa fa-instagram insta" aria-hidden="true"></i>
              </a>

              <a
                href="https://www.facebook.com/btvinternet"
                target="_blank"
              >
                <i class="fa fa-facebook-official face" aria-hidden="true"></i>
              </a>

              <a
                href="https://www.facebook.com/btvinternet"
                target="_blank"
              >
                <i class="fa fa-linkedin link" aria-hidden="true"></i>
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="footer3">
        <h2>Newsletter</h2>
        <form className="footer-form">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <button>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Footer;
