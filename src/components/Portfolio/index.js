import React from "react";
import { Container, Row } from "react-bootstrap";
import Project from "../Project";

function Portfolio() {
  // projects array
  const projects = [
    {
      name: 'Run Buddy',
      image: 'run-buddy.png',
      github: 'https://github.com/BBailey1985/run-buddy',
      deployed: 'https://bbailey1985.github.io/run-buddy/'
    },
    {
      name: 'Deep Thoughts',
      image: 'deep-thoughts.png',
      github: 'https://github.com/BBailey1985/deep-thoughts',
      deployed: 'https://still-earth-64024.herokuapp.com/'
    },
    {
      name: 'Budget Your Life',
      image: 'budget.png',
      github: 'https://github.com/BBailey1985/budget-your-life',
      deployed: 'https://budget-your-life.herokuapp.com/'
    },
    {
      name: 'Puckwudgie E-Commerce',
      image: 'puck.png',
      github: 'https://github.com/BBailey1985/puckwudgie-ecomm',
      deployed: 'https://sheltered-coast-08352.herokuapp.com/'
    },
    {
      name: 'All Things Tech',
      image: 'tech.png',
      github: 'https://github.com/BBailey1985/all-things-tech',
      deployed: 'https://ancient-hamlet-74658.herokuapp.com/'
    },
    {
      name: 'Movie Search',
      image: 'movie-search.png',
      github: 'https://github.com/BBailey1985/movie-search',
      deployed: 'https://bbailey1985.github.io/movie-search/'
    },

  ];
  return (
    <Container fluid className= 'my-auto'>
      <Row>
        <section className="portfolio">
          <div className="center">
            <h1 className="page-header">My Portfolio</h1>
          </div>
          <div>
            <ul className="flex-row mobile-row">
              <li className="padding">
                <Project projects={projects[0]}></Project>
              </li>
              <li className="padding">
                <Project projects={projects[1]}></Project>
              </li>
            </ul>
            <ul className="flex-row mobile-row">
              <li className="padding">
                <Project projects={projects[2]}></Project>
              </li>
              <li className="padding">
                <Project projects={projects[3]}></Project>
              </li>
            </ul>
            <ul className="flex-row mobile-row">
              <li className="padding">
                <Project projects={projects[4]}></Project>
              </li>
              <li className="padding">
                <Project projects={projects[5]}></Project>
              </li>
            </ul>
          </div>
        </section>
      </Row>
    </Container> 
	);
}

export default Portfolio;