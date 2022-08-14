import React, { useEffect } from 'react';
import './Details.css';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { getweathersData } from '../Redux/Detail';

export function Details() {
  const location = useLocation();
  const data = useSelector((state) => state.weathersReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getweathersData(location.state.name));
  }, []);
  return (
    <div className="weather-container">
      <h1>
        {data.weathers.name}
      </h1>
      <img src={location.state.flag} className="weather-img" alt="flag" />
      {data && (
        <div className="weather-card">
          <div className="weather-info">
            <p>
              <span>Wind-Speed : </span>
              {' '}
              {data.weathers.windSpeed}
              {' '}
              KM/H
            </p>
            <p>
              <span>Timezone : </span>
              {' '}
              {data.weathers.TimeZone}
            </p>
            <p>
              <span>Weather-Forecast : </span>
              {' '}
              {data.weathers.description}
            </p>
            <p>
              <span>Pressure : </span>
              {' '}
              {data.weathers.pressure}
              {' '}
              atm
            </p>
            <p>
              <span>Humidity : </span>
              {' '}
              {data.weathers.humidity}
              %
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Details;
