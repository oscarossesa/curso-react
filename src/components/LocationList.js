import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';
// import './styles.css';

const LocationList = ({ cities, onSelectedLocation }) => {

    // console.log('LocationList cities', cities);

    const handleWeatherLocationClick = city => {
        console.log("handleWeatherLocationClick");
        onSelectedLocation(city);
    };

    const strToComponent = cities => (
        cities.map(city => (
            // console.log('la city', city),
            <WeatherLocation
                key={city.key}
                city={city.name}
                onWeatherLocationClick={() => handleWeatherLocationClick(city.name)} 
                data={city.data} />))
    );

    return (<div className="locationList">
        {strToComponent(cities)}
    </div>);
};

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
}

export default LocationList;