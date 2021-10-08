import React from "react";
import send from "../../images/icons/send.png";
import {useHistory} from "react-router-dom";
const ContactWidget = () => {
    const history = useHistory();
  return (
    <div className="widget-container">
      <div className="wid-grid">
        <div className="wid1">
          <h1>Got Any Questions ?</h1>
          <p onClick={() => history.push("/contact")}>connect with us
          <i class="fa fa-volume-control-phone ph" aria-hidden="true"></i>
          </p>
        </div>

        <div className="wid2">
          <img src={send} alt="" onClick={() => history.push("/contact")}/>
        </div>
      </div>
    </div>
  );
};

export default ContactWidget;
