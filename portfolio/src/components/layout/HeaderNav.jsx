import React from "react";

export const HeaderNav = () => {
  return (
    <header className="header flex ">
      <div className="logo flex gap-1 top-20 text-center">
        <span className="text-8xl text-center text-gray-300 pl-2 font-extrabold">
          C
        </span>
        <h3 className="block leading-6  text-2xl basis-20 text-gray-300 font-sans font-thin align-baseline justify-center pt-4 ">
          Cesar Bacaro Ley
        </h3>
      </div>

      <nav>
        <ul>
          <li></li>
          <li>{/* <NavLink to="/portfolio">Portfolio</NavLink> */}</li>
          <li></li>
        </ul>
      </nav>
    </header>
  );
};
