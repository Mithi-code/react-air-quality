import '@testing-library/jest-dom/extend-expect';
import fetchedData from '../mock/getData';

describe('test fetched data', () => {
  it('test fetching country name', async () => {
    await fetchedData().then((data) => expect(data.data[0].name).toBe('Afganistan'));
  });
  it('test fetched country code', async () => {
    await fetchedData().then((data) => expect(data.data[1].code).toBe('NG'));
  });

  it('test fetched popullation', async () => {
    await fetchedData().then((data) => expect(data.data[1].popullation).toEqual(206139587));
  });
});
