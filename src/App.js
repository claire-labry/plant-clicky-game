import React, { Component } from 'react';
import PlantCard from './components/PlantCard';
import Wrapper from './components/Wrapper';
import Scoreboard from './components/Scoreboard';
import plants from './plants.json';

class App extends Component {
  state = {
    plants,
  };

  render() {
    return (
      <Wrapper>
        <Scoreboard> Plant Clicky Game</Scoreboard>
        {this.state.plants.map((plant) => (
          <PlantCard
            id={plant.id}
            key={plant.id}
            name={plant.name}
            image={plant.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
