import React from "react";

function Navigation(props) {
  const {currentLink, setCurrentLink} = props;
  return (
    <nav>
        <ul className="flex-row">
          <li className={currentLink === 'about' ? 'mx-2 navActive' : 'mx-2'}>
            <span onClick={() => setCurrentLink('about')}>About Me</span>
          </li>
          <li className={currentLink === 'portfolio' ? 'mx-2 navActive' : 'mx-2'}>
            <span onClick={() => setCurrentLink('portfolio')}>Portfolio</span>
          </li>
          <li className={currentLink === 'contact' ? 'mx-2 navActive' : 'mx-2'}>
            <span onClick={() => setCurrentLink('contact')}>Contact</span>
          </li>
          <li className={currentLink === 'resume' ? 'mx-2 navActive' : 'mx-2'}>
            <span onClick={() => setCurrentLink('resume')}>Resume</span>
          </li>
        </ul>
      </nav>
  )
}
export default Navigation;
