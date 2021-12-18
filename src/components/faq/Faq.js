import React from "react";
import hero from "../../images/he1.png";
import Map from "../home/Map";
import faqs from "./faqData.js";
import Footer from "../home/Footer";
import ContactWidget from "../contact/ContactWidget";

const Faq = () => {
  return (
    <div className="parent">
      <div className="layout-container">
        <div className="about-container">
          <img src={hero} alt="" />

          <h1>FAQ's</h1>
        </div>

        <div className="about-info">
          <div className="accordion accord-container" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button accord-head"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  What is FTTx Technology?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  FTTx. (Fiber To The X) means all possible optical fiber
                  topologies from a telecom or cable carrier to its customers,
                  based on the location of the fiber's termination point. X can
                  be anything from below mentioned list. FTT” H” = Home FTT” B”
                  = Building FTT” F” = Floor
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed  accord-head"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  What is FTTH?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Fiber to the Home (FTTH), also called "fiber to the premises"
                  (FTTP), is the installation and use of optical fiber from a
                  central point directly to individual buildings such as
                  residences, apartment buildings and businesses to provide
                  unprecedented high-speed Internet access.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed accord-head"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  What is the difference between ADSL and FTTH?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  ADSL (Asymmetric Digital Subscriber Line) services are given
                  on copper (telephone) lines. Whereas FTTH (Fiber To The Home),
                  on the other hand, adopts optical fiber that allows
                  long-distance transmission and more stable signals.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed accord-head"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse4"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  What is GPON?
                </button>
              </h2>
              <div
                id="collapse4"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  GPON is Gigabit PON (Passive Optical Network). It delivers
                  2.488 Gbits/s downstream and 1.244 Gbits/s upstream. GPON uses
                  optical wavelength division multiplexing (WDM) so a single
                  fiber can be used for both downstream and upstream data.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed accord-head"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse5"
                  aria-expanded="false"
                  aria-controls="collapse5"
                >
                  What benefits we offer to the society under FTTx Service?
                </button>
              </h2>
              <div
                id="collapse5"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  We offer below benefits to the society who permit us to lay
                  Fiber for FTTx service: • Gigabit Home Broadband •
                  Intercom/Telephone • Ready Infrastructure for Surveillance &
                  Automation - Most of the upcoming surveillance and automation
                  solutions run on IP/Ethernet, the fiber optic network could be
                  reused for connecting the same. • Common Wi-Fi Area{" "}
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed accord-head"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse6"
                  aria-expanded="false"
                  aria-controls="collapse5"
                >
                  What benefits we offer to the Residents of the Society for
                  FTTx Service?
                </button>
              </h2>
              <div
                id="collapse6"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  We offer below benefits to the Residents of society for FTTx
                  service: • High Speed Broadband [Plans up to 1 Gbps] • Buffer
                  Free Streaming of your favourite apps like YouTube, Amazon,
                  Netflix • Enjoy Lag Free Online Gaming experience • Future
                  Ready for Online Education & Health Applications • Be
                  Connected within your society premises on our Wi-Fi • 24 x 7
                  Customer Support via Self-care & Toll-Free Help Line
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed accord-head"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse8"
                  aria-expanded="false"
                  aria-controls="collapse5"
                >
                  What support you shall require from our Managing Committee for
                  connecting our society?
                </button>
              </h2>
              <div
                id="collapse8"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  We would request the Managing Committee to accept our Proposal
                  and give us permission to: • Carry out the FTTH Survey •
                  Deploy the ONE GigaFiber Optical Network • Allow access to
                  authorized personnel for deployment and maintenance purpose
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed accord-head"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse7"
                  aria-expanded="false"
                  aria-controls="collapse5"
                >
                  How will you connect our Building with your Fiber and carry
                  out the installation?
                </button>
              </h2>
              <div
                id="collapse7"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  We will bring our Fiber to your Building’s basement/terrace
                  using existing pathways and ducts. We will wire up the
                  building vertically using existing Shafts/Ducts. Our
                  Authorized and Trained Personnel will carry out the
                  installation at a scheduled time without disturbance or
                  inconvenience to the residents. All Installation & Testing
                  material will be provided by Us.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed accord-head"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse11"
                  aria-expanded="false"
                  aria-controls="collapse5"
                >
                  What support you require from society to connect our Building
                  with ONE GigaFiber?
                </button>
              </h2>
              <div
                id="collapse11"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  We will require society permission to lay down our Fiber
                  within your premises, space & power in the Electrical room at
                  the Basement of your building. We shall set up an activation
                  camp within the society at agreeable dates to sign up the
                  residents who wish to avail our Services.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed accord-head"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse10"
                  aria-expanded="false"
                  aria-controls="collapse5"
                >
                  Where will you deploy the Wifi Point for access?
                </button>
              </h2>
              <div
                id="collapse10"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  ONE-GigaFiber Team will deploy Wi-Fi Access Points (AP) to
                  create a Hotspot at an identified location in the common
                  facilities. Space & Power for the Wi-Fi AP’s to be provisioned
                  by the Society. There are certain pre-requisites for deploying
                  Wi-Fi in common areas which our team will explain to you post
                  survey of the building.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed accord-head"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse9"
                  aria-expanded="false"
                  aria-controls="collapse5"
                >
                  We want to connect our society with ONE-GigaFiber what should
                  we do?
                </button>
              </h2>
              <div
                id="collapse9"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Thanks for showing interest in our FTTH Service, We will be
                  glad to have you on board as part of our ONE Broadband family.
                  Click here to register your interest in ONE GigaFiber. Our
                  Business Team will get back to you in next 24 hrs for further
                  discussion.
                </div>
              </div>
            </div>
          </div>
        </div>

        <ContactWidget />
        <Map />

        <Footer />
      </div>
    </div>
  );
};

export default Faq;
