import { GoogleLogin } from '@react-oauth/google';
import React from 'react';
import jwt_decoded from "jwt-decode"


function PopupLoginForm() {
    
    
       

    return (
        <div className="container">
        <label for="show" className="close-btn fas fa-times" title="close"></label>
        <div className="text">
           Login Form
        </div>
        <form action="#">
           <div className="data">
              <label>Email or Phone</label>
              <input type="text" required/>
           </div>
           <div className="data">
              <label>Password</label>
              <input type="password" required/>
           </div>
           <div className="forgot-pass">
              <a href="#">Forgot Password?</a>
           </div>
           <div className="btn">
              <div className="inner"></div>
              <button type="submit">login</button>
           </div>
           <div className="signup-link">
              Not a member? <a href="#">Signup now</a>
           </div>
        </form>
     </div>
    );
}

export default PopupLoginForm;
