import React from 'react';
import './Home.scss';

type Props = {
  theme: String, 
}

// Hello
const HomePage = (props : Props) => {
  return (
    <div className="home">
      <div className={`intro ${props.theme}`}>
        <h1>
          Hi, I'm <span>Caden</span>.
        </h1>
        <p>
          I'm a software engineer and R&D lead at <a href="https://checkhq.com" target="_blank">Check</a>. In the past, I built software at big tech and a few startups, including
          one I started with a few friends.
        </p>
        <p>
          I am personally interested in where new applications of geophysics can build more robust, sovereign societies.
        </p>
        <p>
          You can find me via <a href="mailto:cadenmfelton@gmail.com" target="_blank">cadenmfelton@gmail.com</a>, <a href="https://linkedin.com/in/cadenfelton" target="_blank">LinkedIn</a>, or <a href="https://github.com/queden" target="_blank">GitHub</a>.
        </p>
      </div>
    </div>
  );
}

export default HomePage;
