import axios from 'axios';

const initialState = {
  weathers: [],
};

const apikey = '1030c54e100bec6d6d224fa252d47fb4';
const getwEATHER = 'GET_WEATHERS_DATA/getWeather'
const rmvWeather =  'GET_WEATHERS_DATA/rmvWeather'
 const getweathersData = (id) => (dispatch) => {
  try {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${id}&appid=${apikey}`)
      .then((response) => dispatch({ type: getwEATHER, response }));
  } catch (error) {
    dispatch({ type: rmvWeather, error });
  }
};
const weathersReducer = (state = initialState, action) => {
  switch (action.type) {
    case getwEATHER:
      return { ...state, weathers: { 
      name:action.response.data.name,
      windSpeed:action.response.data.wind.speed,
      TimeZone:action.response.data.timezone,
      Visibility:action.response.data.visibility,
      pressure:action.response.data.main.pressure,
      humidity:action.response.data.main.humidity,
      description:action.response.data.weather['0'].description,
      } };
    case rmvWeather:
      return { ...state, weathers: action.error };
    default:
      return state;
  }
};
export { weathersReducer, getweathersData } ;