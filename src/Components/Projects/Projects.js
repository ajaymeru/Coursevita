import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Projects.scss';
import bookstore from './Assets/bookstore.png';
import elearning from './Assets/elearning.png';
import galaxy from './Assets/galaxy.png';
import nft from './Assets/nft.png';
import weather from './Assets/weather.png';
import quiz from "./Assets/quiz.png"
import foozero from "./Assets/foodzero.png"
import news from './Assets/newsapp.png';

const projects = [
    { img: bookstore, url: 'https://ajaymeru.github.io/book-store-app/', title: 'Bookstore' },
    { img: elearning, url: 'https://ajaymeru.github.io/E-Learning/', title: 'E-Learning' },
    { img: galaxy, url: 'https://travel-galaxy-by-ajay.netlify.app/', title: 'Galaxy' },
    { img: nft, url: 'https://ajaymeru.github.io/NFT/', title: 'NFT' },
    { img: weather, url: 'https://ajaymeru-weather-app.netlify.app/', title: 'Weather' },
    { img: quiz, url: 'https://quiz-tech-am.netlify.app/', title: 'Quiz App' },
    { img: foozero, url: 'https://ajaymeru.github.io/Food-Zero/', title: 'foozero' },
    { img: news, url: 'https://ajaymeru.github.io/News-', title: 'News App' },
];

const Projects = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='projects-container'>
            <h4>Projects</h4>
            <Slider {...settings}>
                {projects.map((project, index) => (
                    <div key={index} className='project-container'>
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                            <img src={project.img} alt={`Project ${index}`} className='project-image' />
                            <div className='project-link'>Link to page</div>
                        </a>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Projects;
