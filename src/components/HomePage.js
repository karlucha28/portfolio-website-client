
import React from 'react';
import { Parallax } from 'react-scroll-parallax';

const HomePage = () => (
  <Parallax className="page" y={[-20, 20]}>
    <div className="home-page">
        <h1>Welcome to Karl Savinskiy's Portfolio</h1>
        <p>Discover the world of a Full-Stack Developer with a passion for crafting enchanting web experiences.</p>

        <div className="introduction">
            <p>
                I'm a results-oriented Full Stack Developer with expertise in both frontend and backend development, proficient in JavaScript, Python, Ruby, and more. Dive into my portfolio to explore my projects and journey in the realm of web development.
            </p>
        </div>
    </div>
  </Parallax>
);

export default HomePage;