import React from "react";
// import boy from "../../img2/boy 1.png";
import boy from "../../img2/Layer 2.png";
import about from "../../img2/about us bg1.png";
import Footer from "../home/Footer";

const Contact = () => {
  return (
    <div className="parent">
      <div className="layout-container">
        <div className="contact-up">
        <img src={boy} alt="alt" className="img" />
          <img src={about} alt="alt" />
          <h1>Contact Us</h1>
        </div>

        <div className="contact-container">
          <div className="form">
            <h3>Get In Touch</h3>
            <form>
              <input type="text" placeholder="Enter Name" />
              <input type="email" placeholder="Enter Email" />
              <input type="text" placeholder="Enter Phone No." />
              <input type="text" placeholder="Enter Message" />
              
              <button>
                Send <i className="fa fa-envelope"></i>
              </button>
            </form>
          </div>

          <div className="sidebar-map">
            <iframe
              width="100%"
              height="90%"
              style={{ border: 0 }}
              loading="lazy"
              allowfullscreen
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBJYwR3_5u-w4IirV3oPGCvnjh9p7ezHmw
&q=Space+Needle,Mumbai"
            ></iframe>
          </div>
        </div>

        <div className="contact-values">
          <div className="val">
            <h2>
              {" "}
              <i class="fa fa-envelope-open" aria-hidden="true"></i>{" "}
            </h2>
            <p>customersupport@bhima-group.in</p>
          </div>
          <div className="pur">
            <h2>
              <i class="fa fa-phone-square" aria-hidden="true"></i>
            </h2>
            <p>0231 6655577</p>
          </div>

          <div className="mission">
            <h2>
            <a href="https://wa.me/8991000906" target="_blank" rel="noopener noreferrer">
              <i class="fa fa-comments-o" aria-hidden="true"></i>
              </a>
            </h2>

            <p>Send Message</p>
          </div>
        </div>
        {/* <ContactWidget /> */}
        {/* <Map /> */}

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
