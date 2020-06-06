import React from 'react';
import './scoreboard.css';

function Scoreboard(props) {
  return (
    <header className='scoreboard'>
      <div className='row'>
        <div className='col-md-5 col-left'>
          <h3>{props.title}</h3>
        </div>
        <div className='col-md-3 col-right'>
          <h4>High Score: {props.topScore}</h4>
        </div>
        <div className='col-md-3 col-right'>
          <h4> Current Score: {props.score}</h4>
        </div>
        <div className='row'>
          <div className='col-md-12 col-right'>
            <h4>
              * Test your flower memory! Don't click on a flower more than once.
              *
            </h4>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Scoreboard;
