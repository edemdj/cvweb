import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faPython, faDocker, faHtml5, faCss3Alt, faReact, faGithub } from '@fortawesome/free-brands-svg-icons';
import { SiC, SiPostgresql } from 'react-icons/si';
import React from 'react';

function Skills() {
  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <ul>
        <li><FontAwesomeIcon icon={faJs} className="fa" /> JavaScript</li>
        <li><FontAwesomeIcon icon={faPython} className="fa" /> Python</li>
        <li><FontAwesomeIcon icon={faDocker} className="fa" /> Docker</li>
        <li><FontAwesomeIcon icon={faHtml5} className="fa" /> HTML5</li>
        <li><FontAwesomeIcon icon={faCss3Alt} className="fa" /> CSS3</li>
        <li><FontAwesomeIcon icon={faReact} className="fa" /> React</li>
        <li><SiPostgresql className="si" /> SQL</li>
        <li><SiC className="si" /> Langage C</li>
        <li><FontAwesomeIcon icon={faGithub} className="fa" /> GitHub</li>
      </ul>
    </div>
  );
}

export default Skills;