import React, { useState } from "react";
import { startOfDay, addDays, format } from "date-fns";
import Modal from "react-modal";
import "../Css/doctors.css";
import Timeslot from "./timeslots";

const Buttonforbooking = () => {
  const today = startOfDay(new Date());
  const availableDates = [...Array(12)].map((_, index) =>
    format(addDays(today, index), "MMM d ")
  );

  const [selectedDate, setSelectedDate] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  

  const handleDateButtonClick = (date) => {
    setSelectedDate(date);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedDate(null);
    setModalIsOpen(false);
  };

  return (
    <div className="booking">
      <div className="date-list">
        {availableDates.map((date) => (
          <button
            key={date}
            className="date-button"
            onClick={() => handleDateButtonClick(date)}
          >
            {date}
            <br />
            10 appts
          </button>
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Time Slots Modal"
        overlayClassName="custom-overlay" 
      >
        <h2>Select a Time Slot for {selectedDate}</h2>
      
          {<Timeslot/>}
          
        
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

export default Buttonforbooking;
