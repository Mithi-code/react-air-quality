import React from 'react';
import './Details.css';
import { useDispatch, useSelector } from 'react-redux';
import { getweathersData } from '../Redux/Detail';
import { useEffect } from 'react';
import img from '../Assest/venom.jpg'

export const Details = () => {
  const data = useSelector((state) => state.weathersReducer.weathers);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getweathersData(location.search.split('=')[1]));
  }, []);
  return (
    <div className="weather-container">
      <img src={img} className="weather-img"/>
      {data && (
        <div className='weather-card'>
          <div className='weather-info'>
            <p><b>Name:-</b>{data.name}</p>
            <p><b>Visibility:-</b>{data.visibility}</p>
            <p><b>Timezone:-</b>{data.timezone}</p>
            <p><b>Name:-</b>{data.name}</p>
            <p><b>Visibility:-</b>{data.visibility}</p>
            <p><b>Timezone:-</b>{data.timezone}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
