import React from "react";
import reactLogo from "../image/logo192.png"

function Navbar(){
  return(
    <nav>
      <div className="logo">
        <img src={reactLogo} alt="React Logo" className="nav-item" />
        <h3 className="nav--logo-text">ReactsFacts</h3>
      </div>
      <h4 className="nav--title">React Course - Project 1</h4>
    </nav>
  )
}

export default Navbar;