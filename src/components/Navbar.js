import React from 'react';

export default function Navbar({ currentPage, pageChange }) {


    return (
        <div>
            <nav>
                <a
                    href="#about"
                    onClick={() => pageChange('about')}
                >
                    ABOUT
                </a>
                <a
                    href="#projects"
                    onClick={() => pageChange('projects')}
                >
                    PROJECTS
                </a>
                <a
                    href="#contact"
                    onClick={() => pageChange('contact')}
                >
                    CONTACT
                </a>
                <a
                    href="#resume"
                    onClick={() => pageChange('resume')}
                >
                    RESUME
                </a>
            </nav>
        </div>
    );
};