import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import logo from "../../img2/logo-br.jpeg"

const Navbar = () => {
  const history = useHistory();
  const [right, setRight] = useState("-100%");

  const menuHandler = (e) => {
    if(right === "-100%") {
      setRight("0%");
    } else {
      setRight("-100%");
    }
  };

  return (
    <div className="navbar-parent">
      <div className="navbar-inner">
        {/* <h1 className="logo" onClick={() => history.push("/")} style={{cursor : "pointer"}}>Broadband</h1> */}
         <img className="logo" src={logo} alt="logo" />

        <i
          class="fa fa-bars menu-bar"
          aria-hidden="true"
          onClick={(e) => menuHandler(e)}
          
        ></i>

        <ul className="menu ul" style={{ right: right}}>
          <li onClick={() => history.push("/")}>Home</li>
          <li>
            <p class="desktop-item">
              About Us <i class="fa fa-angle-down" aria-hidden="true"></i>
            </p>

            <ul class="dropd-menu" >
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
