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
          Hi :-) I'm <span>Caden</span>.
        </h1>
        <p>
          I'm a software engineer currently taking time off from school to work at <a href="https://checkhq.com">Check</a>. In the past, I worked in software at big tech and a few startups, including
          one I tried to start with a few friends. Among other work, I also had a blast helping college students donate to charities fighting global poverty by leading Vanderbilt's chapter of <a href="https://1fortheworld.org">One for the World</a>. 
          If you're looking for an easy way to alleviate an immense amount of suffering, reach out to me or take the <a href="https://vandy.link/oftw/pledge">Pledge</a>! 
        </p>
        <p>
          Some topics I've been exploring, and that interest me deeply, include urbanism and the evolution of cities, global development, mechanism design, spirituality, physical and digital infrastructure and public goods, and how we might protect ourselves from very efficient paperclip makers.
          I know almost nothing about all of these things, and would love to learn from you if you do.
        </p>
        <p>
          One of my favorite things is meeting new people, and I'd love to meet you. 
          Contact me via <a href="mailto:cadenmfelton@gmail.com">cadenmfelton@gmail.com</a>, <a href="https://twitter.com/cadenfelton">Twitter</a>, <a href="https://linkedin.com/in/cadenfelton">LinkedIn</a>, or checkout my <a href="https://github.com/queden">GitHub</a>.
        </p>
      </div>
    </div>
  );
}

export default HomePage;
