import React, { useState, useContext } from "react";
import { Authcontext } from "../Allroutes/context";
import data from "../components/db.json";

const RatingFilter = () => {
  const user = useContext(Authcontext);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedRange, setSelectedRange] = useState(null);

  const ratingRanges = [
    { label: "1-2", min: 1, max: 2 },
    { label: "2-3", min: 2, max: 3 },
    { label: "3-4", min: 3, max: 4 },
    { label: "4-5", min: 4, max: 5 },
  ];

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };r

  const handleRangeChange = (range) => {
    setSelectedRange(selectedRange === range ? null : range);
  };

  const handleClearFilters = () => {
  
    setSelectedRange(null);
    // Reset the filters and show all data
    user.setData(data);
  };

  const handleApplyFilters = () => {
    console.log("ok")
    const filteredItems = data.filter((item) => {
      const rating = parseFloat(item.Rating);
      if (selectedRange) {
        const { min, max } = ratingRanges.find(
          (range) => range.label === selectedRange
        );
        return rating >= min && rating < max;
      }
      return true; // No range selected, no filtering
    });
    user.setData(filteredItems);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedRange(null); // Reset selected range when closing
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
            Rating
          </div>
          <div
            data-test="facet-chip-clear-btn"
            hidden
            className="patient-web-app__sc-1xpo6zd-1 kyxhbV"
          >
            {/* Clear button icon */}
          </div>
        </div>
      </div>
      {showPopup && (
        <div className="popup">
          <button className="close-button" onClick={handleClosePopup}>
            Close
          </button>
          <h3>Select Rating Range</h3>
          {ratingRanges.map((range) => (
            <label key={range.label}>
              <input
                type="radio"
                name="ratingRange"
                value={range.label}
                checked={selectedRange === range.label}
                onChange={() => handleRangeChange(range.label)}
              />
              {range.label}
            </label>
          ))}
           <button onClick={handleClearFilters}>Clear Filters</button>
          <button onClick={handleApplyFilters}>Apply Filters</button>
        </div>
      )}
    </div>
  );
};

export default RatingFilter;
