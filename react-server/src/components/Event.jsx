import React from 'react';
import { useParams } from 'react-router-dom';

function EventComponent() {
  const data = useParams();
    console.log(data);
  return (
    <main id='event'>
      <h1>{data.clubName}</h1>
      <h1>{data.eventName}</h1>
    </main>
  );
}

export default EventComponent;
