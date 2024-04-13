import React from "react";
import { useParams } from "react-router-dom";


function Nav(p) {
    const data = useParams();
    console.log(data);
  return (
    <nav>
      <div class="logo click-home">
      {p.logo(data['clubName'])}

      <h2>{p.club && p.validClub(data['clubName']) && data['clubName'].toUpperCase()}</h2>
        {p.home && <h2>MRCE</h2>}
        {/* <h2>{data['clubName'] ? data['clubName'].toUpperCase() : "MRCE"}</h2> */}
      </div>
      <div class="nav">
        {p.home && <h3 class="click-home">Home</h3>}
        {p.about && <h3 class="click-aboutUs">About Us</h3>}
        {p.event && <h3 class="click-events">Events</h3>}
        <h3 class="click-login">Login</h3>
      </div>
    </nav>
  );
}

export default Nav;
