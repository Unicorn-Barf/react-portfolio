import React from 'react';
import './style.css';
import ProjectCard from '../../components/ProjectCard';
import { projects } from '../../data/projects';

export default function Header() {

  return (
    <div className="project-section container" id="projects">
      {/* <!-- Separate box for a Projects header and brief description --> */}
      <div className="project-dscr">
        <h2>My Projects</h2>
        <p>These projects are all part of my journey to become the best coder I can be, ENJOY!</p>
      </div>

      {/* <!-- Grid display of project tiles with Header and background images --> */}
      <div className="projects-container">
        {
          projects.map((project, index) => {
            return (
              <ProjectCard
                key={index}
                githubUrl={project.githubUrl}
                name={project.name}
                imageUrl={project.imageUrl}
              />
            )
          })
        }

      </div>
    </div>
  )
};