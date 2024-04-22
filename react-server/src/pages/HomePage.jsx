import React from "react";
import Nav from "./components/Nav";
import Background from "./components/Background";
import MainBody from "./components/MainBody";

function HomePage({ getCollegeDetails }) {

  const { colors, navigation, logo, name, title, subTitle, list, members} = getCollegeDetails();

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
      <MainBody title={title} subTitle={subTitle} list={list} members={members} />
    </div>
  );
}

export default HomePage;
