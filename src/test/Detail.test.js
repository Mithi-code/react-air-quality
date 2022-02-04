import { weathersReducer } from '../Redux/Detail';

describe('Test', () => {
  test('Initial State', () => {
    const data = {
      name: '', wind: { speed: '' }, visibility: '', timezone: '', main: { pressure: '', humidity: '' }, weather: { 0: { description: '' } },
    };
    expect(typeof weathersReducer({ weathers: [] }, { type: 'GET_WEATHERS_DATA/getWeather', response: { data } })).toBe('object');
  });
});
