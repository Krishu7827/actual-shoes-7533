

import React, { useState } from 'react';
import "./Navbar.module.css";
import PopUpLogin from "./PopUpLogin"
import img from "../ThynkCafe-fotor-20230824141827.png"





function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin,SetLogin] = useState(false)
  console.log(isLogin)
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleLogin = function(){
    SetLogin(!isLogin)
  }

  return (
    <nav>
    <div className="logo">
    <img src={img} alt="" />
    <h3>DentDesk</h3>
    </div>
    <input type="checkbox" id="click" />
    <label htmlFor="click" className="menu-btn">
      <i className="fas fa-bars"></i>
    </label>
    <ul>
      <li><a className="active" href="#">Service <span>|</span></a></li>
      <li><a href="#">My Appointment <span>|</span></a></li>
      <li><a href="#">Past Appointment <span>|</span></a></li>
      <li><a href="#" onClick={toggleLogin}>Login<span>|</span></a></li>
      <li><a href="#">Signup</a></li>
    </ul>
    {isLogin?<PopUpLogin/>:<PopUpLogin/>}
  </nav>
  );
}





export default Navbar ;