import { url_base_weather, api_key } from './../constants/api_url';

const getUrlWeatherByCiry = city => {
   return `${url_base_weather}?q=${city}&apiid=${api_key}`;
}

export default getUrlWeatherByCiry;