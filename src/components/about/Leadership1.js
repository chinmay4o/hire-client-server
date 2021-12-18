import React, { useState } from "react";
import ContactWidget from "../contact/ContactWidget";
import Map from "../home/Map";
import Footer from "../home/Footer";
import l1 from "../../img2/leadership/l1.jpg";
import l2 from "../../img2/leadership/l2.jpg";
import l3 from "../../img2/leadership/l3.jpg";
import l4 from "../../img2/leadership/l4.jpg";

const Leadership = () => {

  return (
    <div className="parent">
      <div className="layout-container">
        <div className="leadership-page">
          <h1>Our Leadership</h1>

          <div className="leaders-grid">
            <div className="each-member">
              <img src={l1} alt="" />

              <h4>Nagesh Chhabria</h4>
              <a href={`mailto:me`}>
                <i class="fa fa-envelope-o" aria-hidden="true"></i>
                <i class="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </div>

            <div className="each-member">
              <img src={l2} alt="" />

              <h4>Dhananjay Mahadik</h4>
              <a href={`mailto:dm@bhima-group.in`}>
                <i class="fa fa-envelope-o" aria-hidden="true"></i>
                <i class="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </div>

            <div className="each-member">
              <img src={l3} alt="" />

              <h4>Harish Gulabani</h4>
              <a href={`mailto:harish_gulabani@yahoo.co.in`}>
                <i class="fa fa-envelope-o" aria-hidden="true"></i>
                <i class="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </div>

            <div className="each-member">
              <img src={l4} alt="" />

              <h4>Pruthviraj Mahadik</h4>
              <a href={`mailto:pm@bhima-group.in`}>
                <i class="fa fa-envelope-o" aria-hidden="true"></i>
                <i class="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          {/* ======== end grid ======== */}
        </div>
        <ContactWidget />
        <Map />

        <Footer />
      </div>
    </div>
  );
};

export default Leadership;
