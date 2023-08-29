//import { GoogleLogin } from '@react-oauth/google';
import React, {useState} from 'react';
//import jwt_decoded from "jwt-decode"
import { HomeRouter } from '../HomeRouter';



function PopupLoginForm() {

    let [isOpen,SetisOpen]  = useState(true);
let [email,Setemail] = useState("")

let [password, SetPassword] = useState("")

let loginHandler = async()=>{
  console.log(email,password)
    async function signup_fetch() {
        try {
            let responce = await fetch(`http://localhost:8080/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "Application/json",
                },
                body: JSON.stringify({email:email,password:password}),
            });
            if (responce.ok) {
                let res = await responce.json();
                alert(res.msg);
     
                localStorage.setItem("afterLogin",JSON.stringify(res.findmail[0]))
            }
        } catch (error) {
            console.log("error", error);
            alert("Something Went Wrong");
        }
    }

    signup_fetch()
}

    if(!isOpen){
        return <HomeRouter/>
    }

    // const loginSucess=(res)=>{
    //     const decoded=jwt_decoded(res.credential);
    //     console.log(decoded)
    //     let obj={
    //       "name":decoded.name,
    //       "email":decoded.email,
    //       "picture":decoded.picture,
    //       "About":"Hey there i am using Whatsapp"
    //     }
    //     console.log(obj)
    //     // dispatch(PostUsers(obj))
    
    //     // setAccount(decoded)s
    //   }
    
    //   const LoginError=(res)=>{
       
    //   }   

    return (
        <div className="container">
            <div className="popup">
                <div className="popup-content">
                    <button className="close-popup-button" onClick={()=>{
                        SetisOpen(!isOpen)
                    }}>×</button>
                    <div className="form-group">
                        <h3>To Log in, enter email</h3>
                        <input type="email" className="form-control" placeholder="Enter email" onChange={(event)=>{Setemail(event.target.value)}} />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Password" onChange={(event)=>{SetPassword(event.target.value)}}/>
                    </div>
                    <div className="loginButtons">
                        <div className="divOfloginButtons" onClick={loginHandler}>Continue</div>
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
                             <img src="https://cdn-icons-png.flaticon.com/128/300/300221.png" alt="" /> 
                            {/* <GoogleLogin
                                onSuccess={loginSucess}
                                onError={LoginError}
                            /> */}
                            <p>Continue with Google</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PopupLoginForm;
