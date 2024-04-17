import React from 'react';
import { useParams } from 'react-router-dom';
import Nav from './components/Nav';

function ClubPage({ getClubByName }) {
  const data = useParams();
  const {navigation, logo, name} = getClubByName(data.clubName);
    console.log(data);
    console.log(getClubByName(data.clubName));
  return (
    <div>
    <Nav navigation={navigation} logo={logo} name={name} />
      <h1>{data.clubName}</h1>
      <div className={"bg-"+data.clubName}></div>
    </div>
  );
}

export default ClubPage;
