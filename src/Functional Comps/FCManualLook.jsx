import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { PiTShirtThin, PiPantsThin } from 'react-icons/pi';
import TopSelectionPage from './TopSelectionPage';
import BottomSelectionPage from './BottomSelectionPage';
import CalendarPage from './CalendarPage'; // קומפוננטה של הלוח שנה
import '../styles.css';
import { CiSquarePlus } from "react-icons/ci";

const FCManualLook = (props) => {
  
  const { selectedTop, selectedBottom, setSelectedTop, setSelectedBottom } = props;


  const savelook = () => {
    // לוגיקה של שמירת לוק בלבד בלי יומן
  };



  return (
    <>
      <div className="app-container">
        <h1>Build Your New Outfit</h1>
        <div className="icon-section">
          <div className="icon-container">
            <Link to="/select-top">
              {selectedTop ? (
                <img src={props.selectedTop.image} alt={props.selectedTop.name} className="icon" />
              ) : (
                <CiSquarePlus className="icon-button" onClick={() => props.setSelectedTop(/* הערך החדש של selectedTop */)} />
              )}
              {!props.selectedTop && <PiTShirtThin className="icon" />}
            </Link>
          </div>
          <div className="icon-container">
            <Link to="/select-bottom">
              {selectedBottom ? (
                <img src={props.selectedBottom.image} alt={props.selectedBottom.name} className="icon" />
              ) : (
                <CiSquarePlus className="icon-button" onClick={() => props.setSelectedBottom(/* הערך החדש של selectedBottom */)} />
              )}
              {!props.selectedBottom && <PiPantsThin className="icon" />}
            </Link>
          </div>
        </div>


        <button onClick={savelook}>SAVE LOOK</button>
        <Link to="/calendar">
        <button >Add to Calendar</button>
        </Link>

      
      </div>
    </>
  );
};

export default FCManualLook;


