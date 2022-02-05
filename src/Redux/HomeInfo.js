import axios from 'axios';

const initialState = {
  countries: [],
};

const url = 'https://restcountries.com/v3.1/all';
const restData = 'GET_COUNTRIES_DATA/RESTData';
const cancelRestData = 'GET_COUNTRIES_DATA/cancelRestData';

const getCountriesData = () => (dispatch) => {
  try {
    axios
      .get(url)
      .then((response) => dispatch({ type: restData, response }));
  } catch (error) {
    dispatch({ type: cancelRestData, error });
  }
};
const restcountriesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case restData:
      return { ...state, countries: action.response.data };
    case cancelRestData:
      return { ...state, countries: action.error };
    default:
      return state;
  }
};
export { restcountriesReducer, getCountriesData };
