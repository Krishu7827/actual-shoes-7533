import React, { useState, useEffect ,useContext} from "react";
import data from "./db.json";
import "../Css/doctors.css";
import Buttonforbooking from "./bookingbutton";
import { startOfDay, addDays, format } from "date-fns";
import MapboxMap from "./map"
import Filter from "./filter";
import { Authcontext } from "../Allroutes/context";


const Doctors = () => {
  const user=useContext(Authcontext)
 
  

 
  console.log(user)
  const doctorsPerPage = 4; // Number of doctors per page
  // const [content, change_data] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);

  const today = startOfDay(new Date());
const availableDates = [...Array(14)].map((_, index) => {
  const currentDate = addDays(today, index);
  const endDate = addDays(currentDate, 13); // Adding 13 days for the range

  const formattedToday = format(currentDate, "MMM d");
  const formattedEnd = format(endDate, "MMM d");

  const formattedRange = `${formattedToday} – ${formattedEnd}`;
  return formattedRange;
});


useEffect(() => {
  // Only use currentPage as a dependency since you're not directly using user.details here
  // Your other logic...
}, [currentPage]);


  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * doctorsPerPage;
  const endIndex = startIndex + doctorsPerPage;

  // Slice the data array to get doctors for the current page
  const doctorsForPage = user.details.slice(startIndex, endIndex);


  return (<>

    {user.details.length==0?(<div><Filter/>

    <h1 className="heading-2">No Data is Available</h1>
    
    </div>):
    
    (<div className="Doctors">



      <div className="">
        <Filter/>


        <div className="Doctor-heading">
        <p>{doctorsForPage.length} providers</p>
      <h2>
           {availableDates[0]} 
        </h2>
        
        </div>
      {doctorsForPage.map(({ id, rating, first_name, role, address }) => (

        <div className="parent-element">
        <div className="Doctors-card-container" key={id}>
        <div class="sc-eVspGN kEGmuv">
          
            <div data-test="polaris-doctor-photo" class="sc-bhNKFk dgcimL">
                <img alt="Dr. John Abraham" width="96" height="96"
                     src="https://d3wnzga3fpd9a.cloudfront.net/photos/Dr-John-Abraham-MD-416658-circle_medium__v2__.png"
                     loading="eager" itemprop="image" data-test="default-doctor-photo-image"/>
            </div>
        </div>
          <div id="Doctor-details">
          <div class="sc-hOzowv hhMopY">
           
            <div class="sc-ZqFbI ldMTfT">
                <a href="/doctor/john-abraham-md-416658?LocIdent=219772&amp;reason_visit=76&amp;insuranceCarrier=-1&amp;insurancePlan=-1&amp;dr_specialty=153&amp;isNewPatient=true"
                   title="View the profile of Dr. John Abraham, MD" data-test="doctor-card-info-name-full"
                   class="sc-fbYMXx mWbpF">{first_name}</a>
            </div>
            <div itemprop="jobTitle" class="sc-UpCWa gVdZpt">
                <span>{role}</span>
            </div>
        </div>

        <div class="sc-jIILKH-GTYGt">
                <div data-test="polaris-v2-avg-rating-with-review-count-wrapper"
                     class="patient-web-app__sc-fe0b3-20 ccIZRx">
                    <div data-test="polaris-v2-ratings" class="patient-web-app__sc-fe0b3-17 bIfFwh">
                        <svg data-test="filled-star-icon" role="img" alt="filled star icon"
                             aria-label="filled star icon" viewBox="0 0 43 40"
                             class="patient-web-app__sc-1jwy0ls-0 patient-web-app__sc-iny64y-0 dIMPVP egcfdg">
                            <path d="M32.2 40l-10.7-7.8L10.8 40l-3.7-2.7 4.1-12.6L.5 17l1.4-4.4h13.2L19.2 0h4.6l4.1 12.6h13.2l1.4 4.4-10.7 7.8 4.1 12.6-3.7 2.6z" fill="#F84141"></path>
                        </svg>
                        <div class="patient-web-app__sc-fe0b3-18 ljZrQR">{rating}</div>
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
<div class="sc-jNJNQp fkqLMu">
  <div class="sc-jTMoxg-gKplPz">
    <div class="sc-ePBJll iqZhIg">
      <svg data-test="insurance-add" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 16" class="patient-web-app__sc-1jwy0ls-0 patient-web-app__sc-ck6ocq-0 dIMPVP">
        <path d="M6.514.103C4.415 1.851 1.137 2.218.219 2.264c-.132 0-.219.138-.219.276.219 10.989 5.246 13.104 6.383 13.426a.71.71 0 00.437 0c1.136-.322 6.164-2.391 6.513-13.334 0-.138-.087-.276-.218-.276-.918-.092-4.197-.46-6.208-2.253-.131-.137-.306-.137-.393 0z" fill="#4E93F3"></path>
        <path d="M6.516 1.575C4.855 3 2.188 3.276 1.446 3.368c-.132 0-.22.092-.22.184.175 8.92 4.241 10.666 5.159 10.942.131.046.262.046.35 0 .918-.275 4.983-1.93 5.29-10.85 0-.138-.088-.23-.175-.23-.744-.046-3.41-.368-5.072-1.84-.043-.091-.174-.091-.262 0z" fill="#4E93F3"></path>
        <path d="M4 7.112h2.133V5h.923v2.112h2.126v.923H7.056v2.14h-.923v-2.14H4v-.923z" fill="#FFF"></path>
      </svg>
    </div>
    <div class="sc-eQVdPn bgCcHC">
      <span data-test="insurance-picker-text" class="sc-iOdfRm joWaks">
        <span class="sc-cCmLNy gKzccH">See if they're in network</span>
      </span>
      <span class="sc-izDtrv cqRlld"></span>
    </div>
  </div>
</div> 
<div class="sc-jIILKH GTYGt">
  <div class="sc-ktaQEB imvYwC">
    <span>New patient appointments</span>
    <span> • Highly recommended</span>
    <span> • Excellent wait time</span>
  </div>
</div>



          </div>
          
        </div>
        <div>{<Buttonforbooking Name={first_name} role={role} rating={rating} />}</div>
        </div>
      ))}
   
      <div className="pagination">
        {Array.from({ length: Math.ceil(user.details.length / doctorsPerPage) }, (_, index) => (
          <button id="page-button"
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>
      </div>
      
      <div>{<MapboxMap pincode={"831001"}/>}</div>
    </div>
  )}</>);
};

export default Doctors;
