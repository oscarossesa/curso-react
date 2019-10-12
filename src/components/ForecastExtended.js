import React from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';

const renderForcastItemDays = (forecastData) => {
   return forecastData.map( forecast => (
      <ForecastItem 
         key={`${forecast.weekDay}${forecast.hour}`}
         weekDay={forecast.weekDay} 
         hour={forecast.hour}
         data={forecast.data}></ForecastItem>))
}

const renderProgress = () => {
   return <h3>Cargando pronostico extendido...</h3>;
}

const ForecastExtended = ({ city, forecastData }) => (
   <div>
      <h2>Pronostico extendido para {city}</h2>
      {forecastData ?
         renderForcastItemDays(forecastData) :
         renderProgress()}
   </div>
)

ForecastExtended.propTypes = {
   city: PropTypes.string.isRequired,
   forecastData: PropTypes.array.isRequired,
}

export default ForecastExtended;