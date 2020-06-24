import React, { Component } from 'react';
import PlantCard from './components/PlantCard';
import Scoreboard from './components/Scoreboard';
import plants from './plants.json';

function mix(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

class App extends Component {
  state = {
    plants,
    score: 0,
    topScore: 0,
    displayAlert: 0,
    showSuccess: 0,
    clickedplants: [],
  };

  clickedPhoto = (id) => {
    let clickedplants = this.state.clickedplants;
    let score = this.state.score;
    let topScore = this.state.topScore;
    this.setState({
      displayAlert: 0,
    });

    if (clickedplants.indexOf(id) === -1) {
      clickedplants.push(id);
      console.log(clickedplants);

      this.handleIncrement();
      this.createMix();
    } else if (this.state.score === 12) {
      this.setState({
        showSuccess: 1,
        score: 0,
        clickedplants: [],
      });
    } else {
      this.setState({
        score: 0,
        clickedplants: [],
      });
      console.log('duplicate');
      this.setState({
        displayAlert: 1,
      });
    }

    if (score > topScore) {
      this.setState({
        topScore: score,
      });
    }
  };

  handleIncrement = () => {
    this.setState({ score: this.state.score + 1 });
  };

  createMix = () => {
    this.setState({ plants: mix(plants) });
  };

  render() {
    return (
      <div className='container'>
        <div
          className='alert alert-danger'
          style={{ opacity: this.state.displayAlert }}
        >
          You clicked this plant already, try again!
        </div>
        <div
          className='alert alert-success'
          style={{ opacity: this.state.showSuccess }}
        >
          Look at you! You remember your plants!
        </div>
        <Scoreboard
          title='Plant Clicky Game'
          score={this.state.score}
          topScore={this.state.topScore}
        />

        <div className='row'>
          {this.state.plants.map((plant) => (
            <PlantCard
              id={plant.id}
              key={plant.id}
              name={plant.name}
              image={plant.image}
              clickedPhoto={this.clickedPhoto}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
