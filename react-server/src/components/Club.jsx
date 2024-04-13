import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loading from './pages/Loading';
import Nav from './pages/Nav';
import Home from './pages/Home';
import Error from './pages/Error';

let info = {
  plexus: {title: "Where Minds Connect, Ideas Ignite, and Boundaries Fade Away",
subTitle: "Plexus Club, MRCE"},
  nss: {title: "NSS",
  subTitle: "NSS, MRCE"},
  innovista: {title: "Innovista",
  subTitle: "Innovista, MRCE"},
}

function validClub(name) {
  const clubs = ["nss", "plexus", "innovista"];
    return clubs.includes(name);
}

function Club(p) {
  const data = useParams();
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
     validClub(data.clubName) ?
    <main id='club'>
      <Nav logo={p.logo} club={true} validClub={validClub} event={true} />
      <Home info={info[data.clubName]} />
    </main> : 
    <main id='club'>
    <Nav logo={p.logo} validClub={validClub} home={true} />
    <Error />
    </main>
  );
}

export default Club;
