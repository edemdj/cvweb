import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">À propos</Link></li>
                    <li><Link to="/projects">Projets</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;