import React from 'react';
import './Home.scss';

type Props = {
  theme: String, 
}

const HomePage = (props : Props) => {
  return (
    <div className="home">
      <div className={`intro ${props.theme}`}>
        <h1>
          Hi, I'm <span>Caden</span>.
        </h1>
        <p>
          I'm a software engineer at <a href="https://checkhq.com" target="_blank">Check</a>, where I build tax infrastructure and help platforms use it. In the past, I built software at big tech and a few startups, including
          one I tried to start with a few friends.
        </p>
        <p>
          I am interested in energy security and abundance, global development, urbanism, volcanoes, pluralism, where we come from, and figuring out where we go from here.
        </p>
        <p>
          Get in touch via <a href="mailto:cadenmfelton@gmail.com" target="_blank">cadenmfelton@gmail.com</a>, <a href="https://linkedin.com/in/cadenfelton" target="_blank">LinkedIn</a>, or <a href="https://github.com/queden" target="_blank">GitHub</a>.
        </p>
      </div>
    </div>
  );
}

export default HomePage;
