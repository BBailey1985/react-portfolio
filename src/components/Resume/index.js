import React from "react";

function Resume() {
  return (
    <section>
      <div>
      <h1 className="h1resume">My Resume</h1>
      </div>
      <div className='lower-spacing'>
      <a href={require("../../assets/files/Web Developer.pdf")} download>
        <h3 className="h3resume">Download my Resume!</h3>
      </a>
      </div>
      <div>
      <h3 className="h3resume">Web Development Proficiencies</h3>
      <ul>
        <li>Javascript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>React.js</li>
        <li>Node. js</li>
        <li>MondoDB</li>
        <li>RESTful API</li>
        <li>SQL</li>
        <li>PWA</li>
      </ul>
      </div>
    </section>
  )
}

export default Resume;
