import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setSelectedCity, setWeather } from './../actions';
import LocationList from './../components/LocationList';

class LocationListContainer extends Component {

   componentDidMount() {
      this.props.setWeather(this.props.cities);
   }

   handleSelectionLocation = city => {
      this.props.setCity(city);
   }

   render() {
      return (
         this.props.cities &&
         <LocationList cities={this.props.cities}
            onSelectedLocation={this.handleSelectionLocation}>
         </LocationList>
      );
   }
}

LocationListContainer.propTypes = {
   setCity: PropTypes.func.isRequired,
   cities: PropTypes.array.isRequired,
};

const mapDispatchToProps = dispatch => ({
   setCity: value => dispatch(setSelectedCity(value)),
   setWeather: cities => dispatch(setWeather(cities))
});

export default connect(null, mapDispatchToProps)(LocationListContainer);