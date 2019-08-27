const location = "Santiago,cl";

const api_key = "60afb89f361b12769ffa6eecf2a2b879";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}&units=metric`;