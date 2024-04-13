import React from 'react';
import { useParams } from 'react-router-dom';
import Nav from "./pages/Nav";
import Error from "./pages/Error";
import Home from "./pages/Home";

function Event({verifyEvent, validClub, logo}) {
  const data = useParams();
    console.log(data);
  return (
    verifyEvent(data['clubName'], data['eventName'])
    ?
    <main id='event'>
    <Nav logo={logo} validClub={validClub(data['clubName'])} home={true} />
      <Home info={data.clubName} />
      <h1>{data.clubName}</h1>
      <h1>{data.eventName}</h1>
    </main>
    :
    <main id="error">
      <Nav logo={logo} validClub={validClub} home={true} />
      <Error />
    </main>
  );
}

export default Event;
