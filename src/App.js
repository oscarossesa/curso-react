import React, { Component } from 'react';
import LocationList from './components/LocationList';
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
  
  handleSelectionLocation = city => {

    this.setState({ city });
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
          {/* {
            city === null ?
            <h1>No se seleccionó ciudad</h1> :
            <ForecastExtended city={city}></ForecastExtended>
          } */} 

          {/* Mejorado... */}
          {/* {
            !city ?
              <h1>No se seleccionó ciudad</h1> :
              <ForecastExtended city={city}></ForecastExtended>
          } */}

          {/* Otra opción con null... */}
          {/* {
            !city ?
              null :
              <ForecastExtended city={city}></ForecastExtended>
          } */}

          {/* Otra opción más abreviada... */}
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
