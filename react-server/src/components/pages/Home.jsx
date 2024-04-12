import React from "react";
import { useParams } from "react-router-dom";

function Nav() {
    const data = useParams();
  console.log(data);
  return (
    <section id="home">
    <h1>Where Minds Connect, Ideas Ignite, and Boundaries Fade Away</h1>
    <h4>Plexus Club, MRCE</h4>
</section>
  );
}

export default Nav;