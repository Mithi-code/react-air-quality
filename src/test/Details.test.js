import { render, asFragment } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../Redux/Store';
import Details from '../Components/Details';

describe('DetailsPage tests', () => {
  test('should render', () => {
    const {asFragment} = render(
      <Provider store={store}>
          <MemoryRouter initialEntries={[{ pathname:'/', state: { flag: 'India' } }]}>
            <Details />
          </MemoryRouter>
      </Provider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});