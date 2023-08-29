
import React, { useState } from 'react';
import "./Navbar.module.css";
import img from "../ThynkCafe-fotor-20230824141827.png"
import {useNavigate}   from "react-router-dom"
import PopupLoginForm from './PopUpLogin';




function Navbar() {
 
 let Navigation = useNavigate()

 let NavigationHandler = ()=>{
  Navigation("/")
 }

 let handler = ()=>{
Navigation("/login")
 }


  return (
    <nav>
    <div className="logo">
    <img src={img} alt="" onClick={NavigationHandler}/>
    <h3>DentDesk</h3>
    </div>
    <input type="checkbox" id="click" />
    <label htmlFor="click" className="menu-btn">
      <i className="fas fa-bars"></i>
    </label>
    <ul>
      <li><a className="active" href="/booking">Service <span>|</span></a></li>
      <li><a href="/appointment">My Appointment <span>|</span></a></li>
      <li><a href="#">Past Appointment <span>|</span></a></li>
     
      {JSON.parse(localStorage.getItem("afterLogin"))?(<><li className='LoginName'><a>{JSON.parse(localStorage.getItem("afterLogin")).name}</a></li><li  style= {{cursor:"pointer"}}onClick={()=>{ localStorage.removeItem("afterLogin") 
       Navigation("/")
    }}><a>logout</a></li></>):(<><li><a href="#"onClick={handler} >Login<span>|</span></a></li>
      <li><a href="#">Signup</a></li></>)}
    

    </ul>

  </nav>
  );
}





export default Navbar ;