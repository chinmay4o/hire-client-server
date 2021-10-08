import React from "react";
import shri from "../../images/shri.png";
import group from "../../images/group.png";
import ContactWidget from "../contact/ContactWidget";
import Map from "../home/Map";
import Footer from "../home/Footer";

const Hinduja = () => {
  return (
    <div className="parent">
      <div className="layout-container">
        <div className="hinduja-container">
          <h1>Hinduja Group</h1>

          <div className="logo">
            <img src={shri} alt="" />

            <img src={group} alt="" className="group" />
          </div>

          <div className="info">
            <p>
              The foundation of the Hinduja Group was laid by Shri Parmanand
              Deepchand Hinduja, a self-made young entrepreneur from the fabled
              town of Shikarpur (now in Pakistan). An entrepreneur, committed
              philanthropist and a visionary, Parmanand Deepchand Hinduja (P. D.
              Hinduja) entered the international arena with an office in Iran
              (the first outside India) in 1919. The twin pillars of the
              business were Merchant Banking and Trade. The Group remained
              headquartered in Iran till 1979. It then moved to Europe. Today,
              the Hinduja Group has become one of the largest diversified groups
              in the world spanning all the continents.
              <br></br>
              <br></br>
              The Group employs over 150,000+ people and has offices in many key
              cities of the world and all the major cities in India. The Hinduja
              Family has always adapted to free-market reforms, moving quickly
              in new markets that have opened and capitalizing on new economic
              opportunities. As a result, Hinduja Group is now strategically
              positioned to contribute to old economy sectors, such as Banking &
              Finance, Transport and Energy, as well as the new economy sectors
              of Technology, Media and Renewables.
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

export default Hinduja;
