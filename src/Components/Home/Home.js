import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Home.scss';
import man from './Assets/image.png';
import resume from './Assets/Patluri_Ajay_Resume.pdf';

const Home = () => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Full-Stack Developer", "frontend web developer"],
            typeSpeed: 50,
            backSpeed: 50,
            backDelay: 1000,
            loop: true,
            showCursor: false,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className="Home">
            <div className="homeleft">
                <h2>Hi!</h2>
                <h2>I am Ajay</h2>
                <h2><span ref={el}></span></h2>
                <a href={resume} target="_blank" without rel="noreferrer" >
                    <button className='line-shade'>Resume</button>
                </a>
                <div className="icons">
                    <a href="https://www.linkedin.com/in/patluri02/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                    <a href="https://github.com/ajaymeru/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                </div>
            </div>
            <div className="logo">
                <div className="firstcircle"></div>
                <div className="secondcircle"></div>
                <div className="myimg">
                    <img src={man} alt="Profile" />
                </div>
            </div>
        </div>
    );
};

export default Home;
