import React, { Component } from 'react';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import './App.css';

const cities = [
  'Santiago,cl',
  'Buenos Aires,ar',
  'Washington,us',
  'Bogota,col',
  'Ciudad de México,mx',
  'Madrid,es',
  'Lima,pe',
]

class App extends Component {

  constructor() {
    super();

    this.state = { city: "nueva ciudad2"};
  }
  handleSelectionLocation = city => {

    console.log(`handleSelectionLocation ${city}`);

  }

  render() {
    const { city } = this.state; 
    return (
      <div className="App">
        <LocationList cities={cities}
          onSelectedLocation={this.handleSelectionLocation}>
        </LocationList>
        <div className="detail">
          <ForecastExtended city={city}></ForecastExtended>
        </div>

      </div>
    );
  }
}

export default App;
