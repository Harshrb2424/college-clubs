import React from "react";
import { useParams } from "react-router-dom";
import Nav from "./components/Nav";
import Background from "./components/Background";

function ClubPage({ getClubByName }) {

  const data = useParams();
  const { colors, navigation, logo, name } = getClubByName(data.clubName);

  let root = document.documentElement;
  root.style.setProperty("--primary-color", colors[0]);
  root.style.setProperty("--secondary-color", colors[1]);
  root.style.setProperty("--text-color", colors[2]);
  root.style.setProperty("--background-color", colors[3]);
  root.style.setProperty("--nav-color", colors[4]);

  console.log(data);
  console.log(getClubByName(data.clubName));
  
  return (
    <div>
      <Nav navigation={navigation} logo={logo} name={name} />
      <Background backgroundID={2} />
      <h1>{data.clubName}</h1>
      <div className={"bg-" + data.clubName}></div>
    </div>
  );
}

export default ClubPage;
