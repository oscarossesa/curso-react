import React, { Component } from 'react';
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';

import './App.css';

const cities = [
  'Buenos Aires,ar',
  'Washington,us',
];

class App extends Component {  
  render() {

    // console.log('cities', cities); ok
    
    return (
      <div className="App">
        Bienvenido a Weather App - Aprendiendo React
        <LocationListContainer cities={cities}></LocationListContainer>        
        <div className="detail">
            <ForecastExtendedContainer></ForecastExtendedContainer>
        </div>
      </div>
    );
  }
}

export default App;