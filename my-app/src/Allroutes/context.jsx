import React, { createContext,useState } from "react";
import Doctors from "../components/doctors";
import { da } from "date-fns/locale";
import data from "../components/db.json"

export   const  Authcontext=createContext()


function AuthContextComponent({children}) {

  
  const [details, setData] = useState(data);
  const context = {
    details,
    setData,
  };
 
  console.log(context)
  return ( <Authcontext.Provider value={context}>

      {children}


  </Authcontext.Provider>)





}

export default AuthContextComponent;

