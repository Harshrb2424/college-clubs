import React from 'react';
import { useParams } from 'react-router-dom';

function EventComponent() {
  const data = useParams();
    console.log(data);
  return (
    <main id='club'>
      <h1>{data.clubName}</h1>
    </main>
  );
}

export default EventComponent;
