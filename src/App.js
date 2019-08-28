import React, { Component } from 'react';
import LocationList from './components/LocationList';
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

  handleSelectionLocation = city => {
    console.log(`handleSelectionLocation ${city}`);

  }

  render() {
    return (
      <div className="App">
        <LocationList cities={cities}
          onSelectedLocation={this.handleSelectionLocation}></LocationList>
      </div>
    );
  }
}

export default App;
