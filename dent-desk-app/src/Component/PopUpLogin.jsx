import { GoogleLogin } from '@react-oauth/google';
import React from 'react';
import jwt_decoded from "jwt-decode"


function PopupLoginForm() {
    const loginSucess=(res)=>{
        const decoded=jwt_decoded(res.credential);
        console.log(decoded)
        let obj={
          "name":decoded.name,
          "email":decoded.email,
          "picture":decoded.picture,
          "About":"Hey there i am using Whatsapp"
        }
        console.log(obj)
        // dispatch(PostUsers(obj))
    
        // setAccount(decoded)
      }
    
      const LoginError=(res)=>{
       
      }   

    return (
        <div className="container">
            <div className="popup">
                <div className="popup-content">
                    <button className="close-popup-button">×</button>
                    <div className="form-group">
                        <h3>To Log in, enter email</h3>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Password" />
                    </div>
                    <div className="loginButtons">
                        <div className="divOfloginButtons">Continue</div>
                        <a href="" className="forgot-pass">
                            Forgot Password?
                        </a>
                    </div>
                    <div className="LoginByGoogleOuath">
                        <div className="LoginLine">
                            <div className="gwMIGZ"></div>
                            <h5>or</h5>
                            <div className="gwMIGZ"></div>
                        </div>
                        <div className="GoogleOuathButton">
                            {/* <img src="https://cdn-icons-png.flaticon.com/128/300/300221.png" alt="" /> */}
                            <GoogleLogin
                                onSuccess={loginSucess}
                                onError={LoginError}
                            />
                            <p>Continue with Google</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PopupLoginForm;
