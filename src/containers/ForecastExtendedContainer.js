import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getForecastDataFromCities, getCity } from './../reducers';
import ForecastExtended from './../components/ForecastExtended';

class ForecastExtendedContainer extends Component {
   render() {
      const { city, forecatData } = this.props;
      return (
         <ForecastExtended city={city} forecastData={forecatData}></ForecastExtended>
      );
   }
}

ForecastExtendedContainer.propTypes = {
   city: PropTypes.string.isRequired,
   forecastData: PropTypes.array,
};

const mapStateToProps = state => ({ city: getCity(state), forecastData: getForecastDataFromCities(state) });

export default connect(mapStateToProps, null)(ForecastExtendedContainer);