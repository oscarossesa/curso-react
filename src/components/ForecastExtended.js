import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';

class ForecastExtended extends Component {
   render() {
      const { city } = this.props;

      return (
         <div>
            <h2>Pronostico extendido  {city}</h2>
            <ForecastItem></ForecastItem>
         </div>
      )
   }
}

ForecastExtended.propTypes = {
   city: PropTypes.string.isRequired,
}

export default ForecastExtended;