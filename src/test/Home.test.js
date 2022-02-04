import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import Home from '../Components/Home';
import store from '../Redux/Store';

describe('HomePage tests', () => {
    test('should render', () => {
      const homePage = render(
        <Provider store={store}>
          <BrowserRouter>
            <Home />
          </BrowserRouter>
          ,
        </Provider>,
      );
  
      expect(homePage).toMatchSnapshot();
    });
  });