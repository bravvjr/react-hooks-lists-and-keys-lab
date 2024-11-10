import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
      {projects.map((project) => (
          <ProjectItem 
            key={project.id}  // Use the project’s id as the key
            {...project}      // Spread the project object to pass each property as a prop
                />
        ))}      </div>
    </div>
  );
}

export default ProjectList;
