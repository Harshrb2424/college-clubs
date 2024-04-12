import React, { useState, useEffect } from 'react';
import Loading from './pages/Loading';

function HomePage() {

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <main id='home'>
      <h1>Welcome to College Clubs!</h1>
      <p>Explore and register for events hosted by various college clubs.</p>
    </main>
  );
}

export default HomePage;
