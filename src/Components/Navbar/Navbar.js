import React, { useState } from 'react';
import './Navbar.scss';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <h4>Ajay</h4>
            </div>
            <div className={`links ${isOpen ? 'open' : ''}`}>
                <a href="#home" className='line-shade'  >Home</a>
                <a href="#about" className='line-shade'>About Me</a>
                <a href="#projects" className='line-shade'>Projects</a>
                <a href="#skills" className='line-shade'>Skills</a>
                <a href="#contact" className='line-shade'>Contact</a>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </div>
        </nav>
    );
};

export default Navbar;
