import React from 'react';
import { useParams } from 'react-router-dom';
import Nav from './components/Nav';

function EventPage({ getEventByName, getClubByName }) {
  const data = useParams();
  const {logo, name} = getClubByName(data.clubName);
  const {navigation} = getEventByName(data.eventName);
    console.log(data);
    console.log(getClubByName(data.clubName));
    console.log(getEventByName(data.eventName));
  return (
    <div>
    <Nav navigation={navigation} logo={logo} name={name} />
      <h1>{data.clubName}</h1>
      <h1>{data.eventName}</h1>
    </div>
  );
}

export default EventPage;
