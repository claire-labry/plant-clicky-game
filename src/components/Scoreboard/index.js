import React from 'react';
import './scoreboard.css';

function Scoreboard(props) {
  return <h1 className='scoreboard'>{props.children}</h1>;
}

export default Scoreboard;
