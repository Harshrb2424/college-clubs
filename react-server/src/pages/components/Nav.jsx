import React from "react";

function Nav({ navigation, logo, name }) {
  return (
    <nav>
      <div>
        <img src={logo} alt={name} />
        <h2>{name}</h2>
      </div>
      <div>
        {navigation.map((e) => <h3 key={e.url} className={"click-"+e.url} >{e.name}</h3>)}
      </div>
    </nav>
  );
}

export default Nav;
