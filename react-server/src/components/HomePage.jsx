import React from 'react';
function HomePage({ getCollegeDetails }) {
  console.log(getCollegeDetails());
  return (
    <div>
      <h1>Welcome to College Clubs!</h1>
      <p>Explore and register for events hosted by various college clubs.</p>
      {/* Add any other content or components you want to display on the home page */}
    </div>
  );
}

export default HomePage;
