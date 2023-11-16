//import Container from 'react-bootstrap/Container';
//import Nav from 'react-bootstrap/Nav';
//import Navbar from 'react-bootstrap/Navbar';
import React, { useState } from 'react';
import "./Navbar.module.css";
import PopUpLogin from "./PopUpLogin"
import img from "../ThynkCafe-fotor-20230824141827.png"

// function ReactNavbar() {
//   return (
//     <>
//           <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary"  sticky="top" id='Navbar' bg='' data-bs-theme="" >
//       <Container id='Navbar-Container'>
//         <Navbar.Brand href="#home">
//             <img  alt=""  className='Navbar-logo'/>

//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#features" id=''  >Home</Nav.Link>
//             <Nav.Link href="#pricing" id='Navbar-Courses' >Courses</Nav.Link>
//             <Nav.Link href="#pricing" id='Navbar-Cart'  ><img className='Navbar-Cart-img' src="" alt="" /></Nav.Link>
//             <Nav.Link href="#pricing" id='Navbar-learning'  >My learning</Nav.Link>
//           </Nav>
//           <Nav>
//             <Nav.Link href="#deets"style={{fontFamily:"'Oswald', sans-serif"}} >Signup</Nav.Link>
//             <Nav.Link eventKey={2} href="#memes" id='Navbar-Login' style={{fontFamily:"'Oswald', sans-serif"}}>
//               Login
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//     </>
//   );
// }




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