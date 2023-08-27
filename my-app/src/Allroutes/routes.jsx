import  {BrowserRouter,Routes,Route} from "react-router-dom" 
import React from 'react';
import Booking from "../components/booking";
import Appointment from "../component2/appointment";


const Allroutes = () => {
  return (
    <div>
    
      <BrowserRouter>
      <Routes>
        <Route path="/booking" element={<Booking/>}/>
        <Route path="appointment" element={<Appointment/>}/>
      </Routes>
      </BrowserRouter>
      
      
     
    </div>
  );
};

export default Allroutes;
