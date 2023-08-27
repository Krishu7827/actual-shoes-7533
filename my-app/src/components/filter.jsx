import React from "react";
import "../Css/filter.css"
import RatingFilter from "./ratingfilter";
import FilterGender from "./gender";





 const Filter=()=>{
    

    return( <div id="filter-item">

  
  <FilterGender/>

 <RatingFilter/>


 </div>)
}

export default Filter