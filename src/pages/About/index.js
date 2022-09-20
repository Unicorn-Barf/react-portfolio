import React from 'react';

export default function Header() {
    return (
        <div>
            <section class="about" id="about">

                {/* <!-- This is my profile picture --> */}
                <img class="profile-pic" src="./assets/images/profile.jpg" alt="A beautiful placeholder image"/>

                    {/* <!-- This is my about article --> */}
                    <article>

                        {/* <!-- side by side div sections for my about me --> */}
                        <div class="about-me">
                            {/* <!-- About me header --> */}
                            <h2>About Me</h2>
                            {/* <!-- first paragraph --> */}
                            <p>
                                Hi, my name is <span>Nolan</span>. I am a full stack web developer ready to provide
                                creative solutions to complex problems. I have a passion to innovate, create, and
                                code to expand my skills as a developer.
                            </p>
                        </div>

                        {/* <!-- My skill list --> */}
                        <div class="skills">
                            <h2>My Skills</h2>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Javascript</li>
                                <li>Unity</li>
                                <li>Kotlin</li>
                            </ul>
                        </div>

                    </article>

            </section>
        </div>
    );
};