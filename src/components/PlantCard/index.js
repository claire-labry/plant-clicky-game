import React from 'react';
import './plant.css';

function PlantCard(props) {
  return (
    <div className='card' onClick={() => props.clickPhoto(props.id)}>
      <div className='img-container'>
        <img
          className='img-thumbnail img-responsive'
          alt={props.name}
          src={props.image}
        />
      </div>
    </div>
  );
}

export default PlantCard;
