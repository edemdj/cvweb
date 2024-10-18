import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
    return (
        <div className="App page-home">
            <h1>EDEM DJOSSOU</h1>
            <h2>Full Stack Developer</h2>
            <p>Ceci est la page d'accueil de mon site web.</p>
            <div>
                <a href="https://github.com/edemdj" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="3x" />
                </a>
                <a href="https://www.linkedin.com/in/ton-profil-linkedin" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '20px' }}>
                    <FontAwesomeIcon icon={faLinkedin} size="3x" />
                </a>
            </div>
        </div>
    );
};

export default Home;
