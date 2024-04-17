import React from 'react';
import Nav from './components/Nav';


function HomePage({ getCollegeDetails }) {
  console.log(getCollegeDetails());
  const {navigation, logo, name} = getCollegeDetails();
  return (
    <div>
    <Nav navigation={navigation} logo={logo} name={name} />
      <h1>Welcome to College Clubs!</h1>
      <p>Explore and register for events hosted by various college clubs.</p>
    </div>
  );
}

export default HomePage;
