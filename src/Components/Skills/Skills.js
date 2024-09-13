import React from 'react';
import './Skills.scss';
import html from './Assets/html.png';
import css from './Assets/css.png';
import javascript from './Assets/javascript.png';
import react from './Assets/react.png';
import node from './Assets/node.png';
import express from './Assets/express.png';
import mdb from './Assets/mongodb.jpeg';
import sql from './Assets/download.jpeg';
import git from './Assets/git.png';
import man from "./Assets/man1.png"
import boostrap from "./Assets/bootstrap.png"
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init()


const skills = [
    { img: html, alt: 'HTML' },
    { img: css, alt: 'CSS' },
    { img: javascript, alt: 'JavaScript' },
    { img: react, alt: 'React' },
    { img: node, alt: 'Node.js' },
    { img: express, alt: 'Express' },
    { img: mdb, alt: 'MongoDB' },
    { img: sql, alt: 'SQL' },
    { img: git, alt: 'Git' },
    { img: boostrap, alt: 'Bootstrap' },
];

const Skills = () => {
    return (
        <div className='skills-container'>
            <h2 className='skills-title'>My Skills</h2>
            <div className="skillbox">
                <div className="img" data-aos="fade-right" data-aos-duration="1500">
                    <img src={man} alt="" style={{ transform: "scaleX(-1)" }} />
                </div>
                <div className='skills-flex'>
                    {skills.map((skill, index) => (
                        <div className='skill-item' key={index}>
                            <img src={skill.img} alt={skill.alt} className='skill-image' />
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Skills;
