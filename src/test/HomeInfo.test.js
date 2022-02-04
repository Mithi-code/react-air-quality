import {restcountriesReducer} from '../Redux/HomeInfo';


describe('Test', () => {
  test('Initial State', () => {
    let data = []
    expect(typeof restcountriesReducer({countries: []}, {type: 'GET_COUNTRIES_DATA/RESTData', response: data})).toBe('object');
  });
});

