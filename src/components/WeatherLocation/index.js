import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from '../../services/transformWeather';
import { api_weather } from '../../constants/api_url';
import './styles.css';

class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
            city: 'Santiago',
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
                <Location city={ city }></Location>
                {data ? 
                    <WeatherData data={ data }></WeatherData> :
                    "Cargando..."
                }
            </div>
        );
    }
}

export default WeatherLocation;

