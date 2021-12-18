import React from "react";
import send1 from "../../img2/Rectangle 1.png";
import {useHistory} from "react-router-dom";
import "../../scss/mobile.css";


const ContactWidget = () => {
    const history = useHistory();
  return (
    <div className="widget-container" onClick={() => history.push("/contact")}>
      <div className="wid-grid">
        <div className="wid1">
          <h1>Got Any Questions ?</h1>
          {/* <p onClick={() => history.push("/contact")}>connect with us
          <i class="fa fa-volume-control-phone ph" aria-hidden="true"></i>
          </p> */}
        </div>

        <div className="wid2">
          <img src={send1} alt="" onClick={() => history.push("/contact")}/>
        </div>
      </div>
    </div>
  );
};

export default ContactWidget;
