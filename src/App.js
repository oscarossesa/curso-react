import React, { Component } from 'react';
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtended from './components/ForecastExtended';

import './App.css';

const cities = [
  'Santiago,cl',
  'Buenos Aires,ar',
  // 'Washington,us',
  // 'Bogota,col',
  // 'Ciudad de México,mx',
  // 'Madrid,es',
  // 'Lima,pe',
]

class App extends Component {
  
  constructor() {
    super();
    this.state = { city: null };
  }
  
  render() {
    const { city } = this.state;
    return (
      <div className="App">
        <LocationListContainer cities={cities}></LocationListContainer>
        <div className="detail">
          {
            city &&
            <ForecastExtended city={city}></ForecastExtended>
          }
        </div>

      </div>
    );
  }
}

export default App;