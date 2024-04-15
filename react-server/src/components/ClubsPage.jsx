import React from 'react';
import { useParams } from 'react-router-dom';

function EventComponent({ getClubByName }) {
  const data = useParams();
    console.log(data);
    console.log(getClubByName(data.clubName));
  return (
    <div>
      <h1>{data.clubName}</h1>
    </div>
  );
}

export default EventComponent;
