import React from "react";

function Nav() {
  return (
    <header className="flex-row">
      <h1 className="flex-row ml-1">Brandon Bailey</h1>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about-me">About Me</a>
          </li>
          <li className="mx-2">
            <a href="#projects">Portfolio</a>
          </li>
          <li className="mx-2">
            <a href="#contact">Contact</a>
          </li>
          <li className="mx-2">
            <a href="#resume">Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Nav;
