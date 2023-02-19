import React from "react";

// ASSETS
import logo from "../assets/Netflix_Logo_PMS.png";

const Navbar = () => {
  return (
    <nav className="container py-4">
      <div className="logo">
        <img src={logo} alt="Netflix logo" className="img-fluid" />
      </div>
      <ul>
        <li className="link-option me-3">
          <select>
            <option value="English">
              English
            </option>
            <option value="Filipino">Filipino</option>
          </select>
        </li>
        <li className="link-sign-in">
          <a href="#" className="sign-in">
            Sign in
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
