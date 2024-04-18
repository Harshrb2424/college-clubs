import React from "react";
import { useParams } from "react-router-dom";
import Nav from "./components/Nav";
import Background from "./components/Background";

function ClubPage({ getClubByName }) {
  let root = document.documentElement;
  root.style.setProperty("--primary-color", "#002e76");
  root.style.setProperty("--secondary-color", "red");
  root.style.setProperty("--background-color", "#33333");
  root.style.setProperty("--nav-color", "rgba(0, 0, 0, 0.3)");
  root.style.setProperty("--text-color", "#333333");
  const data = useParams();
  const { navigation, logo, name } = getClubByName(data.clubName);
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
