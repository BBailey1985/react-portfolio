import React, { useState} from "react";
import Card from "react-bootstrap/Card";

function Project(props) {
  const currentProject = useState(props)[0].projects;

  const name = currentProject.name;
  const image = currentProject.image;
  const githubLink = currentProject.github;
  const deployedLink = currentProject.deployed;

  return (
    <Card style={{ width: "18rem" }}>
			<Card.Img
				variant="top"
				src={require(`../../assets/images/${image}`)}
				className="card-image"
			/>
			<div>
				<Card.Body>
					<Card.Title className="card-title">{name}</Card.Title>
					<Card.Link href={deployedLink} target="_blank" className="card-link">
						{name} App
					</Card.Link>
					<br></br>
					<Card.Link href={githubLink} target="_blank" className="card-link">
						{name} Github
					</Card.Link>
				</Card.Body>
			</div>
		</Card>
	);
}

export default Project;