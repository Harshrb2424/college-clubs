import React from "react";
import { useParams } from "react-router-dom";
import Nav from "./components/Nav";
import Background from "./components/Background";

function EventPage({ getEventByName, getClubByName }) {

  const data = useParams();
  const {colors, navigation } = getEventByName(data.eventName);
  const { logo, name } = getClubByName(data.clubName);

  let root = document.documentElement;
  root.style.setProperty("--primary-color", colors[0]);
  root.style.setProperty("--secondary-color", colors[1]);
  root.style.setProperty("--text-color", colors[2]);
  root.style.setProperty("--background-color", colors[3]);
  root.style.setProperty("--nav-color", colors[4]);

  console.log(data);
  console.log(getClubByName(data.clubName));
  console.log(getEventByName(data.eventName));
  
  return (
    <div>
      <Nav navigation={navigation} logo={logo} name={name} />
      <Background backgroundID={3} />
      <h1>{data.clubName}</h1>
      <h1>{data.eventName}</h1>
    </div>
  );
}

export default EventPage;
