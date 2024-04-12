import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ClubsPage from './components/Club';
import HomePage from './components/Home';
import EventPage from './components/Event';
import './styles/meta.css';
import './styles/loading.css';

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
