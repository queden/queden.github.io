import React from 'react';
import HomePage from './Home';
import './App.scss';

const App = () => {
  
  let theme : String = "theme" + Math.floor(Math.random() * 5);
  
  return (
    <div className="background">
      <HomePage theme={theme} />
    </div>
  );
}

export default App;
