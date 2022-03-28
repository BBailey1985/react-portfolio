import React from "react"; // eslint-disable-line no-unused-vars

function About() {
  return (
    <section id="about-me" class="about-me">
      <h2>About Me</h2>
      <div className="about-me-pic">
        <img src={require("../../assets/images/file.jpeg")} alt="Me at an Astros game" />
      </div>
      <div class="about-me-data">
        <p>Hi, im Brandon. I am currently a Master Flight Planning Specialist
          at Universal Weather and Aviation. I am currently enrolled in the UT
          coding bootcamp to learn how to be a web developer. I will be looking
          to change careers after this bootcamp is over. Feel free to reach out!
        </p>
      </div>
    </section>
  )
}

export default About;

