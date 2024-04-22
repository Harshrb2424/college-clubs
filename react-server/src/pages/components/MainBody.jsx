import React from "react";

function Nav({ title, subTitle, list, members }) {
  return (
    <main>
      <div>
        <h1>{title}</h1>
        <p>{subTitle}</p>
      </div>
      <div>
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
    </main>
  );
}

export default Nav;
