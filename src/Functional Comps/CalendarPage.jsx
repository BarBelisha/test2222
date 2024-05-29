import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const CalendarPage = ({ selectedTop, selectedBottom }) => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleAddToCalendar = async () => {
    const outfit = {
      lookId: -1,
      topSelection_ItemId: selectedTop.id,
      buttomSelection_ItemId: selectedBottom.id,
      topSelection_Image: selectedTop.image,
      buttomSelection_Image: selectedBottom.image,
      createdDate: new Date().toISOString(), // תאריך הנוכחי
      calendarDate: date.toISOString(), // תאריך שנבחר על ידי המשתמש
      userEmail:userEmail
    };
    try {
      const response = await fetch('https://localhost:7215/api/ManualLook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(outfit),
      });

      if (response.ok) {
        alert('Outfit saved successfully');
      } else {
        alert('Failed to save outfit');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error saving outfit');
    }

  
    console.log("LOOK:", outfit);
  };

  return (
    <div>
      <h2>Calendar</h2>
      <h4 className='h4'>Choose a date on which you will wear your new outfit and decide whether to receive a notification</h4>
      <div className='calendar'>
        <Calendar
          onChange={handleDateChange}
          value={date}
        />
      </div>
      <div>
      <Link to="/manual-look">
        <button onClick={handleAddToCalendar}>Add Outfit to Calendar</button>
        </Link>
      </div>
    </div>
  );
};

export default CalendarPage;
