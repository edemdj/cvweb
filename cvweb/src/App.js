import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import './App.css';

const App = () => {
    return (
        <Router>
            <Header />
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </Router>
    );
};

export default App;