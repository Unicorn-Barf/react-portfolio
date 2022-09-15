import React from 'react';

export default function Header() {

    return (
        <div class="project-section" id="projects">
        {/* <!-- Separate box for a Projects header and brief description --> */}
        <div class="project-dscr">
          <h2>My Projects</h2>
          <p>These projects are all part of my journey to become the best coder I can be, ENJOY!</p>
        </div>
  
        {/* <!-- Grid display of project tiles with Header and background images --> */}
        <div class="projects">
          {/* <!-- my featured project to be displayed larger--> */}
          <a class="main-project" href="https://nanifer.github.io/NaNarWord-word-game/" target="_blank">
            <h3>NaNarWord</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </a>
  
          {/* <!-- My additional projects to be displayed smaller --> */}
          <div class="secondary-projects">
  
            {/* <!-- Project 3 --> */}
            <a class="freakimono" href="https://github.com/Team-Narwhal/My_Pet" target="_blank">
              <h3>Freakimono</h3>
            </a>
  
            {/* <!-- Project 2 --> */}
            <a class="code-snippet" href="https://unicorn-barf.github.io/code_snippet/" target="_blank">
              <h3>Code Snippet</h3>
            </a>
  
            {/* <!-- Project 4 --> */}
            <a target="_blank">
              <h3>COMING SOON</h3>
            </a>
  
            {/* <!-- Project 5 --> */}
            <a target="_blank">
              <h3>COMING SOON</h3>
            </a>
          </div>
        </div>
      </div>
    )
};