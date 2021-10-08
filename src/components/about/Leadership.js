import React, { useState } from "react";
import lead1 from "./images/l2.jpg";
import ContactWidget from "../contact/ContactWidget";
import Map from "../home/Map";
import Footer from "../home/Footer";
import { Button, Modal } from "react-bootstrap";
import leaders from "./aboutLeader.js";

const Leadership = () => {
  const [show, setShow] = useState(false);
  const[info,setInfo] = useState(``);
  const handleShow = (info) => {
    
    setShow(true);

    setInfo(info);
  };

  return (
    <div className="parent">
      <div className="layout-container">
        <div className="leadership-page">
          <h1>Our Leadership</h1>

          <div className="leaders-grid">
            {leaders.map((leader) => {
              return (
                <div className="each-member" key={leader.id}>
                  <img src={lead1} alt="" />

                  <h4>{leader.name}</h4>
                  <p>{leader.work}</p>

                  <button className="know" onClick={() => handleShow(leader.info)}>
                    Know More
                  </button>
                
                </div>
              );
            })}
          </div>

          {/* ======== end grid ======== */}
        </div>
        <ContactWidget />
        <Map />

        <Footer />
      </div>
      <ModLeader info={info} show={show} setShow={setShow} />
    </div>
  );
};

const ModLeader = ({ info, show, setShow }) => {
  const handleClose = () => setShow(false);
  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Name</Modal.Title>
      </Modal.Header>
      <Modal.Body>{info}</Modal.Body>
    </Modal>
  );
};

export default Leadership;
