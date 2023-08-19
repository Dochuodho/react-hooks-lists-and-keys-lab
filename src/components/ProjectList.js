import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const proj = projects.map((pro)=>{
    console.log(pro)
    return <ProjectItem key={pro.id} name={pro.name} about={pro.about} technologies={pro.technologies} />  
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{/* render ProjectItem components here */}
      {proj}
      
      
      
      
      
      </div>
    </div>
  );
}

export default ProjectList;
