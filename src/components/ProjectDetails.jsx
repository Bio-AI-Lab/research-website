import React from "react";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = {
    title: `Project ${id}`,
    description: `Detailed description of project ${id}.`,
    tools: ["Tool 1", "Tool 2"],
    datasets: ["Dataset 1", "Dataset 2"],
  };

  return (
    <div className="project-details">
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <h3>Developed Tools:</h3>
      <ul>
        {project.tools.map((tool, index) => (
          <li key={index}>{tool}</li>
        ))}
      </ul>
      <h3>Used Datasets:</h3>
      <ul>
        {project.datasets.map((dataset, index) => (
          <li key={index}>{dataset}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectDetails;
