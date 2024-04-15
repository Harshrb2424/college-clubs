import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ClubsPage from './components/ClubsPage';
import HomePage from './components/HomePage';
import EventPage from './components/EventPage';
import { getCollegeDetails, getClubByName, getEventByName } from './api/localDB';

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
