import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ClubsPage from './components/Club';
import HomePage from './components/Home';
import EventPage from './components/Event';
import './styles/meta.css';
import './styles/loading.css';

function logo(club) {
  if (club === 'plexus') {
      return (
          <svg
          width="60"
          height="60"
          viewBox="0 0 458 299"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="logo-plexus">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M301.435 277.571C290.868 285.994 265.016 299 225.346 299C185.632 299 160.853 285.965 151.011 277.543C149.344 276.117 149.103 273.708 150.211 271.815L213.346 164L190.346 131L205.346 109L225.346 142.535C229.613 136.024 243.787 113.6 266.346 76C288.905 38.4 335.346 45 357.346 76L452.978 240.487C454.916 243.82 452.511 248 448.656 248H418.346C352.619 248 324.583 216.645 318.525 200.491C318.4 200.157 318.252 199.847 318.064 199.544C318.064 199.544 284.839 145.873 266.346 116L238.148 164L302.352 271.656C303.525 273.623 303.225 276.144 301.435 277.571ZM225.346 186L274.346 265C237.488 282.229 217.549 282.44 183.357 265L225.346 186ZM338.346 186L284.346 93C305.435 67.3321 317.258 65.1586 338.346 93L418.346 226C367.146 226 343.68 199.333 338.346 186Z"
            />
            <path d="M115.346 186C108.013 200 82.1463 227.6 37.3463 226L115.346 91C122.013 79.3333 142.346 63.4 170.346 93L183.357 71C140.166 35 107.354 59.3333 96.3464 76L1.5 241C-0.590102 244 0 248 5.5 248H37.3463C100.818 244.826 128.226 215.162 134.202 200.366C134.251 200.243 134.3 200.121 134.346 200L134.552 199.65L225.346 45L247.346 76L260.346 55L229.721 6.87407C227.718 3.72654 223.098 3.80199 221.199 7.01324L183.357 71L170.346 93L115.346 186Z" />
          </g>
        </svg>
      )
  }
  else if(club === 'innovista'){
      return (
          <img src="https://www.innovista.in/static/images/inno.jpg" alt="innovista-PNG" />
      )
  }else if(club === 'nss'){
  return <img src="https://upload.wikimedia.org/wikipedia/commons/9/90/NSS-symbol.jpeg" alt="NSS-PNG" />
  } else {
    return <img src="https://mrce.in/assets/images/logo.png" alt="MRCE-PNG" />
  }
}

function validClub(name) {
  const clubs = ["nss", "plexus", "innovista"];
  return clubs.includes(name);
}
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/:clubName" element={<ClubsPage logo={logo} />} />
      <Route path="/:clubName/:eventName" element={<EventPage logo={logo} validClub={validClub} verifyEvent={() => true} />} />
      <Route path="/" element={<HomePage logo={logo} />} />
      </Routes>
    </Router>
  );
}

export default App;
