import React from 'react';
import LocationList from './components/LocationList';
import './App.css';

const cities = [
  'Buenos Aires,ar',
  'Washington,us',
  'Bogota,col',
  'Ciudad de México,mx',
  'Madrid,es',
  'Lima,pe',
  'Santiago,cl',
]

function App() {
  return (
    <div className="App">
        <LocationList cities={cities}></LocationList>
    </div>
  );
}

export default App;
