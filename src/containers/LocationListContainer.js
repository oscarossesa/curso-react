import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getWeatherCities, getCity } from './../reducers';
import LocationList from './../components/LocationList';
import { bindActionCreators } from 'redux';
import * as actions from './../actions';

class LocationListContainer extends Component {

    componentDidMount() {

        const { 
            setWeather, 
            setSelectedCity, 
            cities, 
            city 
        } = this.props;

        setWeather(cities);

        setSelectedCity(city);
    }
    
    handleSelectedLocation = city => {
        this.props.setSelectedCity(city);
    }
        
    render() {
        return (
            <LocationList cities={this.props.citiesWeather} 
              onSelectedLocation={this.handleSelectedLocation} 
            ></LocationList>
        );
    }
}

LocationListContainer.propTypes = {
    setSelectedCity: PropTypes.func.isRequired,
    setWeather: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
    citiesWeather: PropTypes.array,
    city: PropTypes.string.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const mapStateToProps = state => ({
    citiesWeather: getWeatherCities(state),
    city: getCity(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationListContainer);