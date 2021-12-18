import React, { useState, useEffect } from "react";
import "../scss/newcon.css";

const Modal = () => {
  const [show, setShow] = useState(false);
  const [click, setClick] = useState("one");

  const onSubmitHandler = () => {
    setClick("two");
    // setShow(false);
  };

  const closeButton = () => {
    setShow(false);
  }

//   useEffect(() => {
//     setTimeout(() => {
//       setShow(true);
//     }, 6000);
//   });

  return show ? (
    <div className="newconnection-container">
      <div className="newconnection-modal">
      <p className="close" onClick={() => closeButton()}>X</p>
        <div className="form">
          <h3>Get a new connection</h3>
          {click === "one" ? (
            <form>
              <input type="text" placeholder="Enter Name" />
              <input type="email" placeholder="Enter Email" />
              <input type="text" placeholder="Enter Phone No." />
              <input type="text" placeholder="Enter Address" />
              <button onClick={() => onSubmitHandler()}>
                Submit <i className="fa fa-envelope"></i>
              </button>
            </form>
          ) : (
            <i
              className="fa fa-check done"
              aria-hidden="true"
            //   style={{ fontSize: "60px", color: "green" }}
            ></i>
          )}
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;
