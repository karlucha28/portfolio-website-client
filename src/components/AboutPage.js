import React from 'react';
import { Parallax } from 'react-scroll-parallax';

const AboutPage = () => (
    <Parallax className="page" y={[-20, 20]} tagOuter="figure">
        <div className="about-page">
            <h2>About Karl Savinskiy</h2>
            <p>
                I am a results-oriented Full Stack Developer with a solid foundation in both frontend and backend development. I am proficient in a wide range of programming languages and frameworks, including JavaScript, Python, and Ruby, with extensive experience in building scalable and robust web applications.
            </p>
            <h3>Professional Experience</h3>
            <p>
                <strong>Full Stack Developer</strong><br />
                December 2022 - Present<br />
                Upwork (remote)<br />
                My recent projects involve designing and implementing front-end interfaces for various web applications, including a hardware supplies website. I have extensive experience with JavaScript, React, and the MaterialUI library, and I am proficient in CRUD operations and containerizing applications using Docker.
            </p>
            <h3>Key Projects</h3>
            <ul>
                <li>
                    <strong>Mario Game With Realtime Chat:</strong> A clone of Mario with real-time chat functionality, showcasing my skills in game engine development and optimization.
                </li>
                <li>
                    <strong>Instagram Clone:</strong> A full-stack application with a JavaScript/React frontend and a Ruby/Ruby on Rails backend, featuring a custom database schema and JWT for user authentication.
                </li>
                <li>
                    <strong>my-Pomodoro:</strong> A time management tool based on the Pomodoro technique, developed with Vanilla JavaScript, showcasing my ability to integrate external APIs and manage user data.
                </li>
            </ul>
            <h3>Educational Background</h3>
            <p>
                <strong>Saint Petersburg State University of Architecture and Civil Engineering</strong><br />
                Bachelor's Degree, September 2016 - June 2020, Saint Petersburg, Russia
            </p>
            <p>
                <strong>FlatIron School</strong><br />
                Software Engineering Program, July 2022 - April 2023, NYC Campus, NY
            </p>
            <h3>Languages</h3>
            <p>Fluent in English and Russian</p>
        </div>
    </Parallax>
);

export default AboutPage;

