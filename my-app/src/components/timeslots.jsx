import React, { useState } from 'react';
import "../Css/timeslot.css"

const generateRandomTime = () => {
  const hours = Math.floor(Math.random() * 11) + 10; // Generate hours between 10 and 8
  const minutes = Math.random() < 0.5 ? '00' : '30'; // Randomly choose 00 or 30 minutes
  const period = hours < 12 ? 'am' : 'pm';
  return `${hours}:${minutes} ${period}`;
};

const Timeslot = () => {
  const [randomTimeSlots, setRandomTimeSlots] = useState(Array(10).fill(null).map(generateRandomTime));
  const handleTimeSlotClick = (startTime) => {
    // Replace this with your logic to handle the click event for the time slot
    console.log(`Clicked on time slot: ${startTime}`);
  };

  return (
    <div>
    <div className="booking">
      <div class="patient-web-app__sc-1ibplyt-3 lzebK">
        <div class="patient-web-app__sc-1ibplyt-4 cfHiZj">
            
            <div class="patient-web-app__sc-1ibplyt-5-hFBkEj">
                <div class="patient-web-app__sc-lxewn3-0 gjnUwl">
                    <div>
                        <picture data-test="doctor-card-photo-picture" class="patient-web-app__sc-nvjjn4-0 bXaHqm">
                            <img alt="Sarah Jirinzu Carratala, MSN, PMHNP-BC" data-test="doctor-card-photo-img" itemprop="image" src="//d3wnzga3fpd9a.cloudfront.net/photos/Sarah-Jirinzu-Carratala-MSN-PMHNP-BC-331421-circle_medium__v1__.png" loading="lazy" class="patient-web-app__sc-13qe5ad-0 jeXWlC"/>
                        </picture>
                        <div font-size="10" class="patient-web-app__sc-lxewn3-1 csyRLm">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 163.67 97" class="patient-web-app__sc-1jwy0ls-0 patient-web-app__sc-6gxtwm-0 dIMPVP jkfiNK">
                                <polygon fill="none" points="118 36.19 118 61.39 118 61.39 157.67 77.51 157.67 48.54 157.67 19.57 118 36.19 118 36.19" stroke="currentcolor" stroke-miterlimit="10" stroke-width="12px"></polygon>
                                <rect fill="none" height="85" stroke="currentcolor" stroke-miterlimit="10" stroke-width="12px" width="112" x="6" y="6"></rect>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="patient-web-app__sc-1ibplyt-8 eRKqGm">
                    <span class="">
                        <a data-test="quick-links-header-doctor-name" href="/doctor/sarah-jirinzu-carratala-msn-pmhnp-bc-331421?LocIdent=197752&amp;reason_visit=76&amp;insuranceCarrier=-1&amp;insurancePlan=-1&amp;dr_specialty=153&amp;isNewPatient=true" class="patient-web-app__sc-1ibplyt-6 fOMiBE">Sarah Jirinzu Carratala, MSN, PMHNP-BC</a>
                    </span>
                    <div class="patient-web-app__sc-1ibplyt-9 bUkTpJ">Adult Psychiatric &amp; Mental Health Nurse Practitioner</div>
                    <div class="patient-web-app__sc-1ibplyt-10 hxKNpZ">Virtual Visit</div>
                    <div class="patient-web-app__sc-1ibplyt-11 eZoXGJ">
                        <div data-test="doctor-card-info-rating-summary" class="patient-web-app__sc-pna3q0-2 fJlGSC">
                            <svg data-rating="4.22" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.6 43" class="patient-web-app__sc-1jwy0ls-0 patient-web-app__sc-pna3q0-0 dIMPVP gabros">
                                <g>
                                    <path d="M32.2 40l-10.7-7.8L10.8 40l-3.7-2.7 4.1-12.6L.5 17l1.4-4.4h13.2L19.2 0h4.6l4.1 12.6h13.2l1.4 4.4-10.7 7.8 4.1 12.6-3.7 2.6z" fill="#FF6473"></path>
                                </g>
                            </svg>
                            <div data-test="doctor-card-info-rating-number" class="patient-web-app__sc-pna3q0-1 imIKyZ">4.22</div>
                        </div>
                        <span class="patient-web-app__sc-1ibplyt-13 dCLxWX">(54)</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="patient-web-app__sc-onc107-0 bBnuhJ">
            
           
        </div>
        <div data-test="choose-time-text" class="patient-web-app__sc-1ibplyt-12 eFWmwb">Choose a time with Jirinzu Carratala that works for you</div>
    </div>
    </div>
    <div className="patient-web-app__sc-efinr5-5-eVhHvs">
      {randomTimeSlots.map((time, index) => (
        <button
          key={index}
          onClick={() => handleTimeSlotClick(time)}
          className="patient-web-app__sc-efinr5-6 bNGaPR"
          data-test="availability-modal-timeslot"
        >
          {time}
        </button>
      ))}
    </div>
    </div>
  );
};

export default Timeslot;
