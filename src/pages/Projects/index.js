import React from 'react';
// import './style.css';
import NewProjectCard from './ProjectCardInteractive';
import { projects } from '../../data/projects';

export default function Header() {

  return (
    <div className="project-section container" id="projects"  style={{ zIndex: 3, backgroundColor: 'dk' }}>
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
              <NewProjectCard
                key={index}
                imageUrl={project.imageUrl}
                projectName={project.name}
                deployedSite={project.deployedSite}
                githubUrl={project.githubUrl}
              />
            )
          })
        }

      </div>
    </div>
  )
};