import React from 'react';
import { useParams } from 'react-router-dom';

function EventComponent({ getEventByName, getClubByName }) {
  const data = useParams();
    console.log(data);
    console.log(getClubByName(data.clubName));
    console.log(getEventByName(data.eventName));
  return (
    <div>
      <h1>{data.clubName}</h1>
      <h1>{data.eventName}</h1>
    </div>
  );
}

export default EventComponent;
