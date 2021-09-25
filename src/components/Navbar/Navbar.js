import React from "react";

const Navbar = () => {
  return (
    <div className="navbar-parent">
      <div className="navbar-inner">

        <h1 className="logo">Broadband</h1>

        <ul className="menu">
          <li>Home</li>
          <li>About Us</li>
          <li>Plans</li>
          <li>Services</li>
          <li>Contact Us</li>
        </ul>

      </div>
    </div>
  );
};

export default Navbar;
