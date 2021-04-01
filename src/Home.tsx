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
          Hi :-) I'm <span>Caden Felton</span>.
        </h1>
        <p>
          I'm a sophomore at Vanderbilt studying Computer Science. I've worked in software engineering for big tech and a few startups, including
          one I tried to found with a few friends, and will be helping out <a href="https://checkhq.com">Check</a> this summer in NYC. 
          Among other work, I also help college students donate to effective charities by leading Vanderbilt's chapter of <a href="https://1fortheworld.org">One for the World</a>. 
          If you're looking for an easy way to alleviate an immense amount of suffering, reach out to me or take the <a href="https://vandy.link/oftw/pledge">Pledge</a>! 
        </p>
        <p>
          I'm fascinated by cities and their future, economic development, 
          affordable housing for all, spirituality, fintech and blockchain. I do not know much about any of these things, and would love to learn from you if you do.
        </p>
        <p>
          One of my favorite things is meeting new people, and I'd love to meet you! 
          Contact me via <a href="mailto:cadenmfelton@gmail.com">cadenmfelton@gmail.com</a>, <a href="https://twitter.com/cadenfelton">Twitter</a>, <a href="https://linkedin.com/in/cadenfelton">LinkedIn</a>, or checkout my <a href="https://github.com/queden">GitHub</a>.
        </p>
      </div>
    </div>
  );
}

export default HomePage;
