import React from "react";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const history = useHistory();

  return (
    <div className="navbar-parent">
      <div className="navbar-inner">
        <h1 className="logo">Broadband</h1>

        {/* <i class="fa fa-bars" aria-hidden="true"></i> */}

        <ul className="menu ul">
          <li onClick={() => history.push("/")}>Home</li>
          <li>
            <p class="desktop-item">About Us</p>

            <ul class="dropd-menu">
              <li onClick={() => history.push("/about")}>About Company</li>
              <li onClick={() => history.push("/leadership")}>Leadership</li>
              <li onClick={() => history.push("/hinduja")}>Hinduja Group</li>
            </ul>
          </li>
          <li onClick={() => history.push("/plans")}>Wifi-Plans</li>
          <li onClick={() => history.push("/faq")}>FAQ</li>
          <li onClick={() => history.push("/contact")}>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
