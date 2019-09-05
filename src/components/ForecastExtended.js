import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import transformForecast from './../services/transformForecast'

const days = [
   'Lunes',
   'Martes',
   'Miércoles',
   'Jueves',
   'Viernes',
]

const data2 = {
   temperature: 10,
   humidity: 19,
   weatherState: 'normal',
   wind: 'normal',
}


export const api_key = 'cc6aae116a67355c8d5c5772051cb35d';
export const url = 'http://api.openweathermap.org/data/2.5/forecast';

class ForecastExtended extends Component {

   constructor() {
      super();

      this.state = { forecastData: null };
   }

   componentDidMount() {
      this.updateCity(this.props.city);
   }
   
   /*
    UNSAFE_componentWillReceiveProps()
    Referencia: https://es.reactjs.org/docs/react-component.html
    */

   componentWillReceiveProps(nextProps) {
      if(nextProps.city !== this.props.city) {
         this.setState({ forcastData: null });
         this.updateCity(nextProps.city);
      }
   }

   updateCity = city => {      
      const url_forecast = `${url}?q=${this.props.city}&appid=${api_key}`;
      
      fetch(url_forecast).then(
         data => (data.json())
      ).then(
         weather_data => {
            console.log(weather_data);
            const forecastData = transformForecast(weather_data);
            console.log(forecastData);
            this.setState({ forecastData: forecastData })
         }
      );
   }

   renderForcastItemDays(forecastData) {
      return forecastData.map( forecast => (
         <ForecastItem 
            key={`${forecast.weekDay}${forecast.hour}`}
            weekDay={forecast.weekDay} 
            hour={forecast.hour}
            data={forecast.data}></ForecastItem>))
   }

   renderProgress = () => {
      return <h3>Cargando pronostico extendido...</h3>;
   }

   render() {
      const { city } = this.props;
      const { forecastData } = this.state;

      return (
         <div>
            <h2>Pronostico extendido para {city}</h2>
            {
               forecastData ?
               this.renderForcastItemDays(forecastData) :
               this.renderProgress()
            }
         </div>
      )
   }
}

ForecastExtended.propTypes = {
   city: PropTypes.string.isRequired,
}

export default ForecastExtended;