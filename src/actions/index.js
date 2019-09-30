import transformForecast from './../services/transformForecast'

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

const setCity = payload => ({ type: SET_CITY, payload });
const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload });

const api_key = 'cc6aae116a67355c8d5c5772051cb35d';
const url = 'http://api.openweathermap.org/data/2.5/forecast';

export const setSelectedCity = payload => {
   
   return dispatch => {
      const url_forecast = `${url}?q=${payload}&appid=${api_key}`;
      //console.log(url_forecast);

      // activar en el estado un indicador de búsqueda de datos
      dispatch(setCity(payload));

      return fetch(url_forecast).then(
         data => (data.json())
      ).then(
         weather_data => {
            //console.log(weather_data);
            const forecastData = transformForecast(weather_data);
            //console.log(forecastData);
            //this.setState({ forecastData: forecastData })

            // modificar el estado con el resultado de la promise (fetch)
            dispatch(setForecastData({ city: payload, forecastData }));
         }
      );
   }
}