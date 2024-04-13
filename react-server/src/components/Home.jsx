import React, { useState, useEffect } from 'react';
import Loading from './pages/Loading';
import Nav from './pages/Nav';




function HomePage(p) {

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
    <div>
      <Nav logo={p.logo} home={true} about={true} />
    <main id='home'>
      <h1>Welcome to College Clubs!</h1>
      <p>Explore and register for events hosted by various college clubs.</p>
    </main>
    </div>
  );
}

export default HomePage;
