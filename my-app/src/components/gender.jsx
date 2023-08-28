import React, { useState, useContext } from "react";
import data from "../components/db.json";
import { Authcontext } from "../Allroutes/context";
import "../Css/filter.css";

const FilterGender = () => {
  const user = useContext(Authcontext);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedGender, setSelectedGender] = useState("");

  const availableGenders = ["", "Male", "Female", "Other"]; // Add an empty option as the default

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleSelectChange = (event) => {
    setSelectedGender(event.target.value);
  };

  const handleApplyFilters = () => {
    const filteredItems = data.filter((item) => {
      if (!selectedGender) {
        return true; // No gender selected, no filtering
      }
      return item.gender === selectedGender;
    });
    user.setData(filteredItems);
    togglePopup();
  };

  const handleClearFilters = () => {
    setSelectedGender("");
    user.setData(data); // Reset to original data
    togglePopup();
  };

  return (
    <div className="patient-web-app__sc-1xpo6zd-12 gSFgra">
      <div className="patient-web-app__sc-1mzfv3y-10 hkILqW">
        <div
          tabIndex="0"
          role="button"
          aria-pressed="false"
          className="patient-web-app__sc-1xpo6zd-0 djNeDv"
          onClick={togglePopup}
        >
          <div
            data-test="facet-chip-button"
            className="patient-web-app__sc-1xpo6zd-3 coypUp"
          >
            Gender
          </div>
          <div
            data-test="facet-chip-clear-btn"
            hidden
            className="patient-web-app__sc-1xpo6zd-1 kyxhbV"
          ></div>
        </div>
      </div>
      {showPopup && (
        <div className="popup">
          <select value={selectedGender} onChange={handleSelectChange}>
            {availableGenders.map((gender) => (
              <option key={gender} value={gender}>
                {gender || "Select Gender"}
              </option>
            ))}
          </select>
          <div className="popup-buttons">
            <button className="popup-button" onClick={handleApplyFilters}>
              Apply
            </button>
            <button className="popup-button" onClick={handleClearFilters}>
              Clear
            </button>
            <button className="popup-button" onClick={togglePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterGender;
