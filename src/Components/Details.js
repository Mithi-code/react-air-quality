import React from 'react';
import './Details.css';
import { useDispatch, useSelector } from 'react-redux';
import { getweathersData } from '../Redux/Detail';
import { useEffect } from 'react';
import { useLocation } from 'react-router';

export const Details = () => {
  const location = useLocation();
  const data = useSelector((state) => state.weathersReducer.weathers);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getweathersData(location.state.name));
  }, []);
  // const flag = location.state.flag
  return (
    <div className="weather-container" >
      <h1>Weather info of--{data.name}</h1>
      <img src={location.state.flag} className="weather-img"/>
      {data && (
        <div className="weather-card">
          <div className="weather-info">
            <p><b>Name:-</b> {data.name}</p>
            <p><b>Wind-Speed:-</b> {data.windSpeed} KM/H</p>
            <p><b>Timezone:-</b> {data.TimeZone}</p>
            <p><b>Weather-Forecast:-</b> {data.description}</p>
            <p><b>Pressure:-</b> {data.pressure} atm</p>
            <p><b>humidity:-</b> {data.humidity}%</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
