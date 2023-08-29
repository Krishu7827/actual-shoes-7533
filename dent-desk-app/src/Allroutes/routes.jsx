import  {BrowserRouter,Routes,Route} from "react-router-dom" 
import React from 'react';
import Booking from "../components/booking";
import Appointment from "../component2/appointment";
import AuthContextComponent from "./context";

const Allroutes = () => {
  return (
  
    <>
    
   <Routes>
    <Route path="/booking" element={<Booking/>}/>
        <Route path="/appointment" element={<Appointment/>}/>
  </Routes>

       
   
     </>
      
      
     
    
  );
};

export default Allroutes;
