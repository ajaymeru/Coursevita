import React from 'react'
import "./About.scss"
import hacker from "./Assets/hacker.png"

const About = () => {
    return (
        <div className='About'>
            <h4>About me</h4>
            <div className="aboutcontent">
                <div className="aboutleft">
                    <img src={hacker} alt="" />
                </div>
                <div className="aboutright">
                    <p> Hello I'm actively seeking opportunities with a passion for full-stack development, I thrive on tackling complex challenges and delivering innovative solutions that push the boundaries of what's possible. With a keen eye for detail and a relentless commitment to learning, I seamlessly navigate the ever-evolving landscape of web technologies, crafting seamless user experiences and robust, scalable architectures. Whether it's mastering the latest front-end frameworks, optimizing server-side performance, or delving into the intricacies of database management, I approach each project with a creative mindset and a dedication to excellence.</p>
                </div>
            </div>
        </div>
    )
}

export default About