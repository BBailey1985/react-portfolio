import React from "react";

function Footer(){
  return (
    <footer>
      <a 
        href="https://www.github.com/bbailey1985"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={require("../../assets/images/github.png")}
          alt="github logo"
        ></img>
      </a>
      <a
        href="https://www.linkedin.com/in/brandonbailey1985/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={require("../../assets/images/linkedin.png")}
          alt="linkedin logo"
        ></img>
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100052792385422"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={require("../../assets/images/facebook.png")}
          alt="facebook logo"
        ></img>
      </a>
    </footer>
  )
}
export default Footer;