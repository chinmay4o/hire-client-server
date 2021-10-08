import React from "react";
import hero from "../../images/he1.png";
import Map from "../home/Map";
import Footer from "../home/Footer";
import ContactWidget from "../contact/ContactWidget";

const Contact = () => {
  return (
    <div className="parent">
      <div className="layout-container">
        <div className="about-container">
          <img src={hero} alt="" />

          <h1>Contact Us</h1>
        </div>

        <div className="contact-container">
          <div className="sidebar">
            <h3>Get In Touch</h3>
          </div>

          <div className="form">
            <form>
              <input type="text" placeholder="Enter Name" />
              <input type="email" placeholder="Enter Email" />
              <input type="text" placeholder="Enter Phone No." />
              <textarea
                name="message"
                cols="45"
                rows="5"
                placeholder="Enter Message"
                resize="none"
              />

              <button>
                Send <i className="fa fa-envelope"></i>
              </button>
            </form>
          </div>
        </div>

        <div className="contact-values">
          <div className="val">
            <h2>
              {" "}
              <i class="fa fa-envelope-open" aria-hidden="true"></i>{" "}
            </h2>
            <p>care@onebroadband.in</p>
          </div>
          <div className="pur">
            <h2>
              <i class="fa fa-phone-square" aria-hidden="true"></i>
            </h2>
            <p>022 62581600</p>
          </div>

          <div className="mission"> 
            <h2>
              <i class="fa fa-comments-o" aria-hidden="true"></i>
            </h2>

            <p>Send Message</p>
          </div>
        </div>
        <ContactWidget />
        <Map />

        <Footer />
      </div>
    </div>
  );
};

export default Contact;

const main = () => {
  return (
    <div className="parent-con">
      <div className="layout-container-con">
        <div className="contact-container">
          <div className="sidebar">
            <h3>Get In Touch</h3>
          </div>

          <div className="form">
            <form>
              <input type="text" placeholder="Enter Name" />
              <input type="email" placeholder="Enter Email" />
              <input type="text" placeholder="Enter Phone No." />
              <textarea
                name="message"
                cols="45"
                rows="5"
                placeholder="Enter Message"
                resize="none"
              />

              <button>
                Send <i className="fa fa-envelope"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
