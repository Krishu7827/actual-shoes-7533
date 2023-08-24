import  {BrowserRouter,Routes,Route} from "react-router-dom" 
import React from 'react';
import Booking from "../components/booking";

const Allroutes = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/booking" element={<Booking/>}/>
      </Routes>
      </BrowserRouter>
      
     
    </div>
  );
};

export default Allroutes;
