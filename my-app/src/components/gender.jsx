import React, { useState } from "react";

const FilterGender= () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedGenders, setSelectedGenders] = useState([]);

  const availableGenders = ["Male", "Female", "Other"];

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleCheckboxChange = (gender) => {
    if (selectedGenders.includes(gender)) {
      setSelectedGenders(selectedGenders.filter((g) => g !== gender));
    } else {
      setSelectedGenders([...selectedGenders, gender]);
    }
  };

  // Filtering logic using selectedGenders array

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
          {availableGenders.map((gender) => (
            <label key={gender}>
              <input
                type="checkbox"
                checked={selectedGenders.includes(gender)}
                onChange={() => handleCheckboxChange(gender)}
              />
              {gender}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterGender;
