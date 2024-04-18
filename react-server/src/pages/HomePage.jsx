import React from "react";
import Nav from "./components/Nav";
import Background from "./components/Background";

function HomePage({ getCollegeDetails }) {
  let root = document.documentElement;
  root.style.setProperty("--primary-color", "#002e76");
  root.style.setProperty("--secondary-color", "#ff5202");
  root.style.setProperty("--background-color", "#ffffff");
  root.style.setProperty("--nav-color", "rgba(0, 0, 0, 0.3)");
  root.style.setProperty("--text-color", "#333333");
  console.log(getCollegeDetails());
  const { navigation, logo, name } = getCollegeDetails();
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
