
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';

import FCRegistration from './Functional Comps/FCRegistration';
import FCUpload from './Functional Comps/FCUpload';
import FCManualLook from  './Functional Comps/FCManualLook'
import { Route, Router, Routes } from 'react-router-dom'
import CalendarPage from './Functional Comps/CalendarPage';
import TopSelectionPage from './Functional Comps/TopSelectionPage';
import BottomSelectionPage from './Functional Comps/BottomSelectionPage';
function App() {

  const [selectedTop, setSelectedTop] = useState(null);
  const [selectedBottom, setSelectedBottom] = useState(null);

  return (
    <div>

      <Routes>
          <Route index element={<FCManualLook selectedTop={selectedTop} selectedBottom={selectedBottom} setSelectedTop={setSelectedTop} setSelectedBottom={setSelectedBottom} />} />  
          <Route path="/manual-look" element={<FCManualLook selectedTop={selectedTop} selectedBottom={selectedBottom} setSelectedTop={setSelectedTop} setSelectedBottom={setSelectedBottom} />} />  
          <Route path="/select-top" element={<TopSelectionPage setSelectedTop={setSelectedTop} />} />
          <Route path="/select-bottom" element={<BottomSelectionPage setSelectedBottom={setSelectedBottom} />} />
          <Route path="/calendar" element={<CalendarPage selectedTop={selectedTop} selectedBottom={selectedBottom} />} />
        </Routes>
       
    </div>
  );
}

export default App;
