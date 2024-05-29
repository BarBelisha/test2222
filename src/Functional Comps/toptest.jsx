// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import { PiTShirtThin, PiPantsThin } from 'react-icons/pi';
// import TopSelectionPage from './TopSelectionPage';
// import BottomSelectionPage from './BottomSelectionPage';
// import CalendarPage from './CalendarPage'; // קומפוננטה של הלוח שנה
// import '../styles.css';
// import { CiSquarePlus } from "react-icons/ci";

// const FCManualLook = (props) => {
//   const { selectedTop, selectedBottom, setSelectedTop, setSelectedBottom } = props;

//   const handleAddToCalendar = () => {
//     // מעבר לעמוד הלוח שנה
//     window.location.href = "/calendar";
//   };

//   return (
//     <>
//       <div className="app-container">
//         <h1>Build Your New Outfit</h1>
//         <div className="icon-section">
//           <div className="icon-container">
//             <Link to="/select-top">
//               {selectedTop ? (
//                 <img src={props.selectedTop.image} alt={props.selectedTop.name} className="icon" />
//               ) : (
//                 <CiSquarePlus className="icon-button" onClick={() => props.setSelectedTop(/* הערך החדש של selectedTop */)} />
//               )}
//               {!props.selectedTop && <PiTShirtThin className="icon" />}
//             </Link>
//           </div>
//           <div className="icon-container">
//             <Link to="/select-bottom">
//               {selectedBottom ? (
//                 <img src={props.selectedBottom.image} alt={props.selectedBottom.name} className="icon" />
//               ) : (
//                 <CiSquarePlus className="icon-button" onClick={() => props.setSelectedBottom(/* הערך החדש של selectedBottom */)} />
//               )}
//               {!props.selectedBottom && <PiPantsThin className="icon" />}
//             </Link>
//           </div>
//         </div>

//         <button onClick={handleAddToCalendar}>Add to Calendar</button>

      
//       </div>
//     </>
//   );
// };

// export default FCManualLook;






// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import React from 'react';

// import FCRegistration from './Functional Comps/FCRegistration';
// import FCUpload from './Functional Comps/FCUpload';
// import FCManualLook from  './Functional Comps/FCManualLook'
// import { Route, Router, Routes } from 'react-router-dom'
// import CalendarPage from './Functional Comps/CalendarPage';
// import TopSelectionPage from './Functional Comps/TopSelectionPage';
// import BottomSelectionPage from './Functional Comps/BottomSelectionPage';
// function App() {

//   const [selectedTop, setSelectedTop] = useState(null);
//   const [selectedBottom, setSelectedBottom] = useState(null);

//   return (
//     <div>

//       <Routes>
//           <Route index element={<FCManualLook selectedTop={selectedTop} selectedBottom={selectedBottom} setSelectedTop={setSelectedTop} setSelectedBottom={setSelectedBottom} />} />  
//           <Route path="/select-top" element={<TopSelectionPage setSelectedTop={setSelectedTop} />} />
//           <Route path="/select-bottom" element={<BottomSelectionPage setSelectedBottom={setSelectedBottom} />} />
//           <Route path="/calendar" element={<CalendarPage selectedTop={selectedTop} selectedBottom={selectedBottom} />} />
//         </Routes>
       
//     </div>
//   );
// }

// export default App;
