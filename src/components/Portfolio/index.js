import React from "react";
import Project from "../Project";

function Portfolio() {
  const projects = [
    {
      name: 'Run Buddy',
      image: '../../assets/images/runbuddy.png',
      github: 'https://github.com/BBailey1985/run-buddy',
      deployed: 'https://bbailey1985.github.io/run-buddy/'
    },
    {
      name: 'Deep Thoughts',
      image: '../../assets/images/runbuddy.png',
      github: 'https://github.com/BBailey1985/deep-thoughts',
      deployed: 'https://still-earth-64024.herokuapp.com/'
    },
    {
      name: 'Budget Your Life',
      image: '../../assets/images/runbuddy.png',
      github: 'https://github.com/BBailey1985/budget-your-life',
      deployed: 'https://budget-your-life.herokuapp.com/'
    },
    {
      name: 'Puckwudgie E-Commerce',
      image: '../../assets/images/runbuddy.png',
      github: 'https://github.com/BBailey1985/puckwudgie-ecomm',
      deployed: 'https://sheltered-coast-08352.herokuapp.com/'
    },
    {
      name: 'All Things Tech',
      image: '../../assets/images/runbuddy.png',
      github: 'https://github.com/BBailey1985/all-things-tech',
      deployed: 'https://ancient-hamlet-74658.herokuapp.com/'
    },
    {
      name: 'Movie Search',
      image: '../../assets/images/runbuddy.png',
      github: 'https://github.com/BBailey1985/movie-search',
      deployed: 'https://bbailey1985.github.io/movie-search/'
    },
  ];

  return (
    <section>
      <div>
      <h2>Portfolio</h2>
      </div>
      <div className="portfolio-container">
        {projects.map((project, index) => (
          <Project key={index} project={project} /> 
        ))}
      </div>
    </section>

  )
}