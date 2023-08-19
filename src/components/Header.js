import React from 'react';
import Logo from "../assets/images/logo.png";
import Eye from "../assets/images/eye button.png";

const Header = () => {
    return (
        <header className="cash-app-header">
          <img src={Logo} className="logo" alt="logo" />
          <ul className="nav-links">
            <li>
              {" "}
              <a href="#">Sign In</a>{" "}
            </li>
            <li>
              {" "}
              <a href="#">Legal</a>{" "}
            </li>
            <li>
              {" "}
              <a href="#">Licenses</a>{" "}
            </li>
            <li>
              {" "}
              <a href="#">Security</a>{" "}
            </li>
            <li>
              {" "}
              <a href="#">Careers</a>{" "}
            </li>
            <li>
              {" "}
              <a href="#">Press</a>{" "}
            </li>
            <li>
              {" "}
              <a href="#">Support</a>{" "}
            </li>
            <li>
              {" "}
              <a href="#">Status</a>{" "}
            </li>
            <li>
              {" "}
              <a href="#">Codeblock</a>{" "}
            </li>
          </ul>
          <img src={Eye} className="eye" alt="eye" />
        </header>
    );
    }

export default Header;