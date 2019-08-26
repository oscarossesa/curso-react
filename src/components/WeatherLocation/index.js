import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { PropTypes } from 'prop-types';
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {
    WINDY,
} from './../../constants/weathers';

const data2 = {
    temperature: 14,
    weatherState: WINDY,
    humidity: 10,
    wind: '10 m/s',
}

class WeatherLocation extends Component {

    constructor(props) {
        super(props);
        const { city } = props;

        this.state = {
            city,
            data: null,
        };
    }

    componentDidMount() {
        this.handleUpdateClick();
    }

    handleUpdateClick = () => {
        console.log("actualizado");

        //TODO: hacer el llamado a la api

        debugger;

        const api_weather = getUrlWeatherByCity(this.state.city);

        fetch(api_weather).then(resolve => {
            console.log(resolve);
            debugger;
        });

        setTimeout(function () {
            this.setState({
                city: 'Iquique',
                data: data2,
            })
        }.bind(this), 2000)
    }

    render() {
        const { city, data } = this.state;
        return (
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                {data ? <WeatherData data={data}></WeatherData> : <CircularProgress />}
            </div>
        );
    }
}

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
}
export default WeatherLocation;

