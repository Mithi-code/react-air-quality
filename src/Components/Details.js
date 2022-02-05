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
        Weather info of--
        {data.weathers.name}
      </h1>
      <img src={location.state.flag} className="weather-img" alt="flag" />
      {data && (
        <div className="weather-card">
          <div className="weather-info">
            <p>
              <b>Name:-</b>
              {' '}
              {data.weathers.name}
            </p>
            <p>
              <b>Wind-Speed:-</b>
              {' '}
              {data.weathers.windSpeed}
              {' '}
              KM/H
            </p>
            <p>
              <b>Timezone:-</b>
              {' '}
              {data.weathers.TimeZone}
            </p>
            <p>
              <b>Weather-Forecast:-</b>
              {' '}
              {data.weathers.description}
            </p>
            <p>
              <b>Pressure:-</b>
              {' '}
              {data.weathers.pressure}
              {' '}
              atm
            </p>
            <p>
              <b>humidity:-</b>
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
