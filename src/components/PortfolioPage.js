import React from 'react';
import { Parallax } from 'react-scroll-parallax';

const PortfolioPage = () => (
    <Parallax className="page" y={[-20, 20]} tagOuter="figure">
        <div className="portfolio-page">
            <h2>Karl Savinskiy's Portfolio</h2>
            <h3>Featured Projects</h3>
            
            <div className="project">
                <h4>Mario Game With Realtime Chat</h4>
                <p>Clone of Mario with real-time chat and excellent parallax effects. Implemented using GSAP for animations and Howl for game audios. Features real-time chat functionality using Firestore Database.</p>
                <a href="https://github.com/karlsavinskiy/mario-game" target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </div>

            <div className="project">
                <h4>Instagram Clone</h4>
                <p>Full-stack Instagram Clone with a React frontend and a Ruby on Rails backend. Custom database schema with Postgres and JWT authentication for user login.</p>
                <a href="https://github.com/karlsavinskiy/instagram-clone" target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </div>

            <div className="project">
                <h4>my-Pomodoro</h4>
                <p>A time management tool based on the Pomodoro technique. Developed using Vanilla JavaScript, integrating an external API for motivational quotes and a local server for user data management.</p>
                <a href="https://github.com/karlsavinskiy/my-pomodoro" target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </div>
        </div>
    </Parallax>
);

export default PortfolioPage;
