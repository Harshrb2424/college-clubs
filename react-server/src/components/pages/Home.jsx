import React from "react";
// import { useParams } from "react-router-dom";



function Home({info}) {
    // const {clubName} = useParams();
  // console.log(clubName);
  // console.log(info[clubName]);
  // console.log(info[clubName]['title']);
  return (
    <section id="home">
    {(info) ? <h1>{info["title"]}</h1> : <h1>Error</h1> }
    <h4>Plexus Club, MRCE</h4>
</section>
  );
}

export default Home;