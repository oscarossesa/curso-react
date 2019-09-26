export const SET_CITY = 'SET_CITY';

export const setCity = value => ({ type: SET_CITY, value });

const api_key = 'cc6aae116a67355c8d5c5772051cb35d';
const url = 'http://api.openweathermap.org/data/2.5/forecast';

export const fetchForecast = payload => {
   return dispatch => {
      const url_forecast = `${url}?q=${this.props.city}&appid=${api_key}`;
      //console.log(url_forecast);
      
      // activar en el estado un indicador de búsqueda de datos

      fetch(url_forecast).then(
         data => (data.json())
      ).then(
         weather_data => {
            //console.log(weather_data);
            const forecastData = transformForecast(weather_data);
            //console.log(forecastData);
            //this.setState({ forecastData: forecastData })

            // modificar el estado con el resultado de la promise (fetch)
         }
      );
   }
}