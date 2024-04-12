import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loading from './pages/Loading';
import Nav from './pages/Nav';
import Home from './pages/Home';

function EventComponent() {
  const data = useParams();
  console.log(data);
  let root = document.documentElement;

  if (data.clubName === "plexus") {
    root.style.setProperty('--background-color',"#161a30");
    root.style.setProperty('--accent-color',"#31304d");
    root.style.setProperty('--accent-light-color',"rgb(184, 184, 255)");
    root.style.setProperty('--secondary-color',"#b6bbc4");
    root.style.setProperty('--primary-color',"#f0ece5");
    root.style.setProperty('--nav-c1',"rgba(0, 0, 0, 0)");
    root.style.setProperty('--nav-c2',"rgba(0, 0, 0, 0.35)");
  }




    const [loading, setLoading] = useState(true);
    useEffect(() => {
      const timeout = setTimeout(() => {
        setLoading(false);
      }, 2000);
      return () => clearTimeout(timeout);
    }, []);


  return loading ? (
    <Loading clubName={data.clubName} />
  ) : (
    <main id='club'>
      <Nav />
      <Home />
    </main>
  );
}

export default EventComponent;
