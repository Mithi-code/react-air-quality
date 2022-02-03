import React from 'react';
import './Home.css';
import { useDispatch, useSelector } from 'react-redux';
import { getCountriesData } from '../Redux/HomeInfo'
import { useEffect } from 'react';


export const Home = () => {
  const data = useSelector((state) => state.restcountriesReducer.countries);
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(getCountriesData())
  },[])
  
  return (
    <>
    <input type="search" placeholder="Search Country name " />
    <div className="alter">
      {data.map((e, i) => (
        <div className="container" key={i}>
          <img src={e.flags.png} className="img" />
          <a href={`/details?name=${e.name.common}`}><b>Name</b>: {e.name.common}</a>
          <p><b>Capital</b>: {e.capital}</p>
          <p><b>Popullation</b>: {e.population}</p>
        </div>
      )
      )}
    </div>
  </>
  );
};

export default Home;