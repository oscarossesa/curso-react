import React, { Component } from 'react';
import { connect } from 'react-redux';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import { setCity } from './actions';

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
    
    this.props.setCity(city);
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

const mapDispatchToPropsActions = dispatch => ({ 
  setCity: value => dispatch(setCity(value))
});

const AppConnected = connect(null, mapDispatchToPropsActions)(App);

export default AppConnected;