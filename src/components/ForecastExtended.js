import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';

const days = [
   'Lunes',
   'Martes',
   'Miércoles',
   'Jueves',
   'Viernes',
]

class ForecastExtended extends Component {

   renderForcastItemDays() {
      return days.map( day => (<ForecastItem weekDay={day}></ForecastItem>));
   }

   render() {
      const { city } = this.props;

      return (
         <div>
            <h2>Pronostico extendido  {city}</h2>
            {this.renderForcastItemDays()}
         </div>
      )
   }
}

ForecastExtended.propTypes = {
   city: PropTypes.string.isRequired,
}

export default ForecastExtended;