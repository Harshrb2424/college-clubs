import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ClubsPage from './components/ClubsPage';
import HomePage from './components/HomePage';
import EventPage from './components/EventPage';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/:clubName" element={<ClubsPage />} />
      <Route path="/:clubName/:eventName" element={<EventPage />} />
      <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
