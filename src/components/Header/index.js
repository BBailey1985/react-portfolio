import React from "react";
import Navigation from "../Navigation";

function Header(props) {
  const { currentLink, setCurrentLink } = props;
  return (
    <header className="flex-row">
      <h1>Brandon Bailey</h1>
      <Navigation
        currentLink={currentLink}
        setCurrentLink={setCurrentLink}
      ></Navigation>
    </header>
  );
}
export default Header