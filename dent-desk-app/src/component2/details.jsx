import "./details.css"
import React,{useState,useEffect} from "react"

function Details (){
  const BookedDoctor = JSON.parse(localStorage.getItem("BookedDoctor"));
  const afterLogin = JSON.parse(localStorage.getItem("afterLogin"));
  let [item,SetItem] = useState(BookedDoctor)
  useEffect(()=>{

  },[JSON.parse(localStorage.getItem("BookedDoctor"))])
  if (!BookedDoctor) {
    return <h1 className="xyz">Not Booked Yet.</h1>;
  }

 
   
    return (<div>
         <h1 id="heading">Upcoming Appointment</h1>
     
     <div class="Doctors-card-container" >
     <div class="sc-eVspGN kEGmuv">
       
         <div data-test="polaris-doctor-photo" class="sc-bhNKFk dgcimL">
             <img alt="Dr. John Abraham" width="96" height="96"
                  src={BookedDoctor.img}
                  loading="eager" itemprop="image" data-test="default-doctor-photo-image"/>
         </div>
     </div>
       <div id="Doctor-details">
       <div class="sc-hOzowv hhMopY">
        
         <div class="sc-ZqFbI ldMTfT">
             <a href="/doctor/john-abraham-md-416658?LocIdent=219772&amp;reason_visit=76&amp;insuranceCarrier=-1&amp;insurancePlan=-1&amp;dr_specialty=153&amp;isNewPatient=true"
                title="View the profile of Dr. John Abraham, MD" data-test="doctor-card-info-name-full"
                class="sc-fbYMXx mWbpF">Doctor Name: {BookedDoctor.Name}</a>
         </div>
         <div itemprop="jobTitle" class="sc-UpCWa gVdZpt">
             <span>specialty :  {BookedDoctor.role}</span>
         </div>
     </div>

       <div>
         <h3>Patient Name : {afterLogin.name}</h3>
       </div>

       <div>
         <p>Timing : {BookedDoctor.Time}</p>
       </div>

     <div class="sc-jIILKH-GTYGt">
             <div data-test="polaris-v2-avg-rating-with-review-count-wrapper"
                  class="patient-web-app__sc-fe0b3-20 ccIZRx">
                 <div data-test="polaris-v2-ratings" class="patient-web-app__sc-fe0b3-17 bIfFwh">
                     <svg data-test="filled-star-icon" role="img" alt="filled star icon"
                          aria-label="filled star icon" viewBox="0 0 43 40"
                          class="patient-web-app_sc-1jwy0ls-0 patient-web-app_sc-iny64y-0 dIMPVP egcfdg">
                         <path d="M32.2 40l-10.7-7.8L10.8 40l-3.7-2.7 4.1-12.6L.5 17l1.4-4.4h13.2L19.2 0h4.6l4.1 12.6h13.2l1.4 4.4-10.7 7.8 4.1 12.6-3.7 2.6z" fill="#F84141"></path>
                     </svg>
                     <div class="patient-web-app__sc-fe0b3-18 ljZrQR">{BookedDoctor.rating}</div>
                 </div>
                 <div data-test="polaris-v2-review-count" class="patient-web-app__sc-fe0b3-19 gtSdRL">(4)</div>
             </div>
         </div>
         
         <div class="sc-jIILKH GTYGt">
<div class="sc-eYqcxL-dxazRo">
 <div class="sc-iFoMEM gvoA-Dl">
   <svg viewBox="0 0 10 15" class="patient-web-app__sc-1jwy0ls-0 sc-fmPOXC dIMPVP gBbBXd">
     <path d="M5 0C2.23571 0 0 2.23571 0 5C0 8.75 5 14.2857 5 14.2857C5 14.2857 10 8.75 10 5C10 2.23571 7.76429 0 5 0ZM5 6.78571C4.01429 6.78571 3.21429 5.98571 3.21429 5C3.21429 4.01429 4.01429 3.21429 5 3.21429C5.98571 3.21429 6.78571 4.01429 6.78571 5C6.78571 5.98571 5.98571 6.78571 5 6.78571Z" fill="#192A50"></path>
   </svg>
 </div>
 <div>
 <span class="sc-eVspGN cYEBAO">
   <span class="sc-iqPaeV griiFm">66.1 mi</span>
   <span class="sc-kSGOQU gfrcea">•</span>
   <span data-test="doctor-card-info-location-address" itemprop="streetAddress">21 N Greenwood Ave</span>,
   <span data-test="doctor-card-info-location-city" itemprop="addressLocality">Tulsa</span>,
   <span data-test="doctor-card-info-location-state" itemprop="addressRegion">OK</span>
   <span data-test="doctor-card-info-location-zip" itemprop="postalCode">74120</span>
 </span>
 </div>
</div>


</div>
  <div>
    <button id="button" onClick={()=>{
      localStorage.removeItem("BookedDoctor")
    SetItem(null)
    }}>Cancel</button>
  </div>





       </div>
       </div>
    </div>)
}


export default Details