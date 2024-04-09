import React from 'react';
import { useParams } from 'react-router-dom';

function EventComponent() {
  const data = useParams();
    console.log(data);
  return (
    <div>
      <h1>{data.clubName}</h1>
      <h1>{data.eventName}</h1>
    </div>
  );
}

export default EventComponent;
