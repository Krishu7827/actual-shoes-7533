import React from "react";
import { startOfDay, addDays, format } from "date-fns";
import "../Css/doctors.css";

const Buttonforbooking = () => {
  const today = startOfDay(new Date());
  const availableDates = [...Array(14)].map((_, index) =>
    format(addDays(today, index), "MMM d ")
  );
   console.log(availableDates)
  return (
    <div className="booking">
      <div className="date-list">
        {availableDates.map((date) => (
          <button key={date} className="date-button">
            {date}
            <br></br>
            10 appts
          </button>
        ))}
      </div>
    </div>
  );
};

export default Buttonforbooking;
