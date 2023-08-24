import React, { useState, useEffect } from "react";
import data from "./db.json";
import "../Css/doctors.css";
import Buttonforbooking from "./bookingbutton";
import MapboxMap from "./map"

const Doctors = () => {
  const doctorsPerPage = 4; // Number of doctors per page
  const [content, change_data] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // You can perform any additional logic here when content or currentPage changes.
    // For now, we won't add any additional logic.
  }, [content, currentPage]);

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * doctorsPerPage;
  const endIndex = startIndex + doctorsPerPage;

  // Slice the data array to get doctors for the current page
  const doctorsForPage = content.slice(startIndex, endIndex);

  return (
    <div className="Doctors">
      {doctorsForPage.map(({ id, image, first_name, role, address }) => (
        <div className="Doctors-card-container" key={id}>
          <img src={image} alt="error" />
          <div id="Doctor-details">
            <h1>{first_name}</h1>
            <p>{role}</p>
            <p>{address}</p>
          </div>
          <div>{<Buttonforbooking/>}</div>
        </div>
      ))}

      <div>{<MapboxMap/>}</div>
   
      <div className="pagination">
        {Array.from({ length: Math.ceil(content.length / doctorsPerPage) }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
