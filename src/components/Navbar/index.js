import React from 'react';
import './style.css';

export default function Navbar({ currentPage, pageChange }) {


    return (
        <div>
            <nav>
                <a
                    href="#about"
                    onClick={() => pageChange('about')}
                    className={currentPage === 'about'
                        ? 'nav-link current'
                        : 'nav-link'
                    }
                >
                    ABOUT
                </a>
                <a
                    href="#projects"
                    onClick={() => pageChange('projects')}
                    className={currentPage === 'projects'
                        ? 'nav-link current'
                        : 'nav-link'
                    }
                >
                    PROJECTS
                </a>
                <a
                    href="#contact"
                    onClick={() => pageChange('contact')}
                    className={currentPage === 'contact'
                        ? 'nav-link current'
                        : 'nav-link'
                    }
                >
                    CONTACT
                </a>
                <a
                    href="#resume"
                    onClick={() => pageChange('resume')}
                    className={currentPage === 'resume'
                        ? 'nav-link current'
                        : 'nav-link'
                    }
                >
                    RESUME
                </a>
            </nav>
        </div>
    );
};