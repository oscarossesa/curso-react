import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { PropTypes } from 'prop-types';
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from '../../services/transformWeather';
import { api_weather } from '../../constants/api_url';
import './styles.css';

class WeatherLocation extends Component {

    constructor(props) {
        super(props);
        const { city } = props;

        this.state = {
            city,
            data: null,
        };

        console.log("constructor");
        
    }

    componentDidMount(){
        console.log("componentDidMount");
        this.handleUpdateClick();
    }

    componentDidUpdate(){
        console.log("componentDidUpdate");
    }

    componentDidMount() {
        this.handleUpdateClick();
    }

    handleUpdateClick = () => {
        console.log("actualizado");
        console.log(api_weather);

        fetch(api_weather).then(resolve => {

            return resolve.json();
        }).then(data => {

            const newWeather = transformWeather(data);

            console.log(newWeather);

            this.setState({
                data: newWeather,
            });

        });

    }

    render() {
        console.log("render");
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

