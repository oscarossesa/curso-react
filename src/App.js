import React, { Component } from 'react';
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';

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
  render() {
    return (
      <div className="App">
        <LocationListContainer cities={cities}></LocationListContainer>
        <div className="detail">
            <ForecastExtendedContainer></ForecastExtendedContainer>
        </div>

      </div>
    );
  }
}

export default App;