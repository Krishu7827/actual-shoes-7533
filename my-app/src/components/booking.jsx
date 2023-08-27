import React from "react";

import Doctors from "./doctors";
import Filter from "./filter";
import Navbar from "../component2/Navbar";
import { Footer } from "../component2/Footer";




 const Booking=()=>{
    console.log("name")

    return( <div>
       
        <Navbar/>
        <Doctors/>
        <Footer/>


    </div>)
}

export default Booking