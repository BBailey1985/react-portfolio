import React from "react"; // eslint-disable-line no-unused-vars

function About() {
  return (
    <section id="about-me" className="about-me">
      <h2>About Me</h2>
      <div className="about-me-pic">
        <img src={require("../../assets/images/file.jpeg")} alt="Me at an Astros game" />
      </div>
      <div className="about-me-data">
        <p>Hi, im Brandon. I am currently a Master Flight Planning Specialist
          at Universal Weather and Aviation. I am almost to the end of the UT
          coding bootcamp to learn how to be a full-stack developer. I will be looking
          to change careers after this bootcamp is over. I am a quick learner and really do
          enjoy learning new things. Feel free to reach out!
        </p>
      </div>
    </section>
  )
}

export default About;

