import React from "react";
import "./Navbar.css";
import logo from "../../images/logo.png";

export default function Navbar() {
  return (
    <nav className="nav">
      <img className="nav--logo" src={logo} alt="Airbnb Logo" />
    </nav>
  );
}
