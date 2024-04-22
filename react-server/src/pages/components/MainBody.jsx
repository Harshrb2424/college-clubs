import React from "react";

function Nav({ title, subTitle, list, members }) {
  return (
    <main>
    
      <div>
        <h1>{title}</h1>
        <p>{subTitle}</p>
      </div>
      <div>
      <h1>Clubs</h1>
        {list.map((e) => (
          <a href={e.url}>
            <div>
              <h3>{e.name}</h3>
              <p>{e.desc}</p>
              <img src={e.image} alt={e.name} />
            </div>
          </a>
        ))}
      </div>
      <div>
      <h1>About Us</h1>
        {members.map((e) => (
          <div>
            <h5>{e.title}</h5>
            {e.list.map((n) => (
              <div>
              <img src={n.imgUrl} alt={n.name} />
                <h6>{n.name}</h6>
                {n.description.map((p) => (
                  <p>{p}</p>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}

export default Nav;
