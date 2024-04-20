import React from "react";
import Nav from "./components/Nav";
import Background from "./components/Background";

function HomePage({ getCollegeDetails }) {

  const { colors, navigation, logo, name } = getCollegeDetails();

  let root = document.documentElement;
  root.style.setProperty("--primary-color", colors[0]);
  root.style.setProperty("--secondary-color", colors[1]);
  root.style.setProperty("--text-color", colors[2]);
  root.style.setProperty("--background-color", colors[3]);
  root.style.setProperty("--nav-color", colors[4]);

  console.log(getCollegeDetails());
  
  return (
    <div>
      <Nav navigation={navigation} logo={logo} name={name} />
      <Background backgroundID={1} />
      <h1>Welcome to College Clubs!</h1>
      <p>Explore and register for events hosted by various college clubs.</p>
    </div>
  );
}

export default HomePage;
