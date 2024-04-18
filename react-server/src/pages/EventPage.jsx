import React from "react";
import { useParams } from "react-router-dom";
import Nav from "./components/Nav";
import Background from "./components/Background";

function EventPage({ getEventByName, getClubByName }) {
  let root = document.documentElement;
  root.style.setProperty("--primary-color", "#ff2a6d");
  root.style.setProperty("--secondary-color", "#005678");
  root.style.setProperty("--background-color", "#f0ece5");
  root.style.setProperty("--nav-color", "rgba(0, 0, 0, 0.3)");
  root.style.setProperty("--text-color", "#E5E5E5");
  const data = useParams();
  const { logo, name } = getClubByName(data.clubName);
  const { navigation } = getEventByName(data.eventName);
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
