import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ClubsPage from './pages/ClubsPage';
import HomePage from './pages/HomePage';
import EventPage from './pages/EventPage';
import { getCollegeDetails, getClubByName, getEventByName } from './api/localDB';
import "./styles/styles.css";
import "./styles/nav.css";
import "./styles/background.css";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<HomePage getCollegeDetails={getCollegeDetails} />} />
      {/* <Route path="/login" element={<LoginPage />} /> */}
      <Route path="/:clubName" element={<ClubsPage getClubByName={getClubByName} />} />
      <Route path="/:clubName/:eventName" element={<EventPage getEventByName={getEventByName} getClubByName={getClubByName} />} />
      {/* <Route path="/:clubName/:eventName/register" element={<RegisterPage getEventByName={getEventByName} getClubByName={getClubByName} />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
