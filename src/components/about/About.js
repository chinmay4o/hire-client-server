import React from "react";
import hero from "../../images/he1.png";
import about from "../../img2/about us.png"
import Map from "../home/Map";
import Footer from "../home/Footer";
import ContactWidget from "../contact/ContactWidget"

const About = () => {
  return (
    <div className="parent">
      <div className="layout-container">
        <div className="about-container">
          <img src={about} alt="" />

          {/* <h1>About Us</h1> */}
        </div>

        <div className="about-info">
          <h2>OneBrand International</h2>

          <p>
            ONEOTT iNTERTAINMENT LTD. (OIL) is a subsidiary of NXTDIGITAL
            LIMITED, part of the Media Vertical of Hinduja Group, holds a
            Unified Access Services - ISP, PAN India License and Infrastructure
            Provider - Category I Certificate granted by the Department of
            Telecommunications (DoT), Ministry of Communications, Government of
            India & Downlinking Permission granted by Ministry of Information &
            Broadcasting (MIB). OIL leads the on-demand entertainment economy by
            offering convergent solutions in the CDCA eco-system (Connectivity,
            Devices, Content & Apps) over ONE wire, supporting multiple screens
            for ONE Subscribers, by, bringing “Future"-To-The-Home® powered by
            OIL's high speed Fiber-Optic To The Home (FTTH) network. OIL is
            evolving from the traditional “DST” or Direct Sales Team method of
            'PUSH' sales to using "digital sales teams" thereby generating the
            necessary demand "PULL" for its unique services.
          </p>
        </div>

        <div className="about-values">
          <div className="val">
            <h2>01 <span>Values</span></h2>
            <p>
              "The single biggest value at ONE is to keep our employee morale
              high and motivated”
            </p>
          </div>
          <div className="pur">
            <h2>02 <span>Purpose</span></h2>
            <p>
              “To lead contribution to digital inclusion in India by connecting
              homes & offices online.”
            </p>
          </div>

          <div className="mission">
            <h2>03 <span>Mission</span></h2>

            <p>
              “To be in Top 3 Players connecting homes & offices on-line by
              aligning last-mile-cable ”
            </p>
          </div>
        </div>
        <ContactWidget />
        <Map />

        <Footer />
      </div>
    </div>
  );
};

export default About;
